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
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Entre em contato</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atender suas necessidades e desenvolver soluções personalizadas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = info.link ? (
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {info.content}
                </a>
              ) : (
                <span className="text-muted-foreground">{info.content}</span>
              );

              return (
                <Card key={index} className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{info.title}</h3>
                      {content}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="h-[400px] lg:h-auto rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.0!2d-48.0!3d-26.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDAyJzAwLjAiUyA0OMKwMDAnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
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
