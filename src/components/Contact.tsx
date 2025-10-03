import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua Anita Garibaldi, 1.190",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(47) 99629-4772",
      link: "https://wa.me/5547996294772",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "lucas.borba@robomaqengenharia.com.br",
      link: "mailto:lucas.borba@robomaqengenharia.com.br",
    },
    {
      icon: Clock,
      title: "Horário de funcionamento",
      content: "Segunda a Sexta das 08h ao 12h e das 13:30 as 17:30",
    },
    {
      icon: Instagram,
      title: "Instagram",
      content: "@robomaq",
      link: "https://instagram.com/robomaq",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Entre em contato</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Estamos prontos para atender suas necessidades e desenvolver soluções personalizadas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
          <div className="space-y-4 md:space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = info.link ? (
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm md:text-base break-words"
                >
                  {info.content}
                </a>
              ) : (
                <span className="text-muted-foreground text-sm md:text-base">{info.content}</span>
              );

              return (
                <Card key={index} className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-4 md:p-6 flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold mb-1 text-sm md:text-base">{info.title}</h3>
                      {content}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="h-[300px] sm:h-[400px] lg:h-auto rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.3968486846697!2d-48.84684692378625!3d-26.304167877029454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb0b5f6f21aa1%3A0x7e8e7e7e7e7e7e7e!2sR.%20Anita%20Garibaldi%2C%201190%20-%20Anita%20Garibaldi%2C%20Joinville%20-%20SC%2C%2089203-301!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização ROBOMAQ ENGENHARIA"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
