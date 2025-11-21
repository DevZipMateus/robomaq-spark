import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Download, ZoomIn, ZoomOut } from "lucide-react";
import { Document, Page, pdfjs } from 'react-pdf';
import { useState, useEffect, useRef, useCallback } from 'react';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Catalog = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const [scale, setScale] = useState<number>(1.0);
  const [visiblePages, setVisiblePages] = useState<Set<number>>(new Set([1, 2, 3]));
  const observerRefs = useRef<Map<number, IntersectionObserver>>(new Map());

  useEffect(() => {
    // Set initial scale based on screen size
    const setInitialScale = () => {
      if (window.innerWidth < 640) {
        setScale(0.5); // Mobile - smaller for better fit
      } else {
        setScale(1.0); // Tablet and Desktop - original size
      }
    };
    
    setInitialScale();
    window.addEventListener('resize', setInitialScale);

    // Hide Lovable badge on this page
    const style = document.createElement('style');
    style.textContent = `
      [data-lovable-badge],
      a[href*="lovable.app"],
      a[href*="lovable.dev"] {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
    
    // Lock page scroll and hide scrollbar
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.head.removeChild(style);
      document.body.style.overflow = '';
      window.removeEventListener('resize', setInitialScale);
      observerRefs.current.forEach(observer => observer.disconnect());
    };
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const setupObserver = useCallback((element: HTMLDivElement | null, pageNumber: number) => {
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisiblePages((prev) => {
              const newSet = new Set(prev);
              // Load current page and 2 neighbors
              newSet.add(pageNumber);
              newSet.add(pageNumber - 1);
              newSet.add(pageNumber + 1);
              newSet.add(pageNumber - 2);
              newSet.add(pageNumber + 2);
              return newSet;
            });
          }
        });
      },
      { rootMargin: '400px' }
    );

    observer.observe(element);
    observerRefs.current.set(pageNumber, observer);
  }, []);

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 2.0));
  };

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.4));
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar />
      <main className="flex-1 flex flex-col pt-20 md:pt-24 overflow-hidden">
        <div className="container mx-auto px-2 sm:px-4 flex-1 flex flex-col overflow-hidden">
          <div className="w-full max-w-7xl mx-auto flex-1 flex flex-col overflow-hidden">
            <div className="text-center mb-4 sm:mb-6 pt-2">
              <Button asChild className="gap-2 text-xs sm:text-sm">
                <a href="/catalogo-robomaq-2025.pdf" download>
                  <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden xs:inline">Baixar Catálogo PDF</span>
                  <span className="xs:hidden">Download PDF</span>
                </a>
              </Button>
            </div>
            
            <div className="bg-card rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
              {/* PDF Controls */}
              <div className="bg-muted/50 border-b border-border p-2 sm:p-3 md:p-4 flex items-center justify-between gap-2 sm:gap-4 shrink-0">
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="text-xs sm:text-sm font-medium px-1 sm:px-2 md:px-4">
                    {numPages ? `${numPages} pág${numPages > 1 ? 's' : ''}` : 'Carregando...'}
                  </span>
                </div>

                <div className="flex items-center gap-1 sm:gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={zoomOut}
                    disabled={scale <= 0.4}
                    className="h-8 w-8 sm:h-9 sm:w-9"
                  >
                    <ZoomOut className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                  <span className="text-xs sm:text-sm font-medium px-1 sm:px-2 min-w-[40px] sm:min-w-[50px] text-center">
                    {Math.round(scale * 100)}%
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={zoomIn}
                    disabled={scale >= 2.0}
                    className="h-8 w-8 sm:h-9 sm:w-9"
                  >
                    <ZoomIn className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </div>
              </div>

              {/* PDF Viewer - Lazy Loaded Vertical Scroll */}
              <div className="bg-muted/30 p-1 sm:p-2 overflow-auto flex-1">
                <Document
                  file="/catalogo-robomaq-2025.pdf"
                  onLoadSuccess={onDocumentLoadSuccess}
                  loading={
                    <div className="flex flex-col items-center justify-center p-8 gap-4">
                      <div className="text-muted-foreground">Carregando catálogo...</div>
                      <Skeleton className="w-[595px] h-[842px] max-w-full" />
                    </div>
                  }
                  error={
                    <div className="p-8 text-center">
                      <p className="text-destructive mb-4">
                        Erro ao carregar o PDF.
                      </p>
                      <Button asChild>
                        <a href="/catalogo-robomaq-2025.pdf" download>
                          <Download className="w-4 h-4 mr-2" />
                          Baixar Catálogo
                        </a>
                      </Button>
                    </div>
                  }
                  className="flex flex-col items-center gap-2"
                >
                  {Array.from(new Array(numPages), (_, index) => {
                    const pageNumber = index + 1;
                    const shouldRender = visiblePages.has(pageNumber);
                    
                    return (
                      <div
                        key={`page_${pageNumber}`}
                        ref={(el) => setupObserver(el, pageNumber)}
                        className="flex justify-center"
                      >
                        {shouldRender ? (
                          <Page
                            pageNumber={pageNumber}
                            scale={scale}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                            loading={<Skeleton className="w-[595px] h-[842px] max-w-full" />}
                            className="shadow-sm"
                          />
                        ) : (
                          <Skeleton 
                            className="shadow-sm" 
                            style={{ 
                              width: `${595 * scale}px`, 
                              height: `${842 * scale}px`,
                              maxWidth: '100%'
                            }} 
                          />
                        )}
                      </div>
                    );
                  })}
                </Document>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Catalog;
