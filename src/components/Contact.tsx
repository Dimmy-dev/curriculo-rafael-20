import { Phone, Mail, MessageCircle, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Entre em Contato
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fique à vontade para entrar em contato comigo. Será um prazer conversar sobre 
            oportunidades, projetos e parcerias.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center mb-3">
                <Phone className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-lg font-semibold text-foreground">Telefone</h3>
              </div>
              <p className="text-muted-foreground">(61) 99226-7178</p>
            </div>

            <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center mb-3">
                <MessageCircle className="w-6 h-6 text-secondary mr-3" />
                <h3 className="text-lg font-semibold text-foreground">WhatsApp</h3>
              </div>
              <a 
                href="https://wa.me/5561992267178" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:text-secondary/80 transition-colors inline-flex items-center"
              >
                Enviar mensagem
                <Send className="w-4 h-4 ml-2" />
              </a>
            </div>

            <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center mb-3">
                <Mail className="w-6 h-6 text-accent mr-3" />
                <h3 className="text-lg font-semibold text-foreground">E-mail</h3>
              </div>
              <a 
                href="mailto:rafaelpatriota507@gmail.com"
                className="text-accent hover:text-accent/80 transition-colors break-all"
              >
                rafaelpatriota507@gmail.com
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 h-fit">
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-lg font-semibold text-foreground">Localização</h3>
            </div>
            <p className="text-muted-foreground mb-6">Brasília - DF, Brasil</p>
            
            <div className="space-y-3">
              <p className="text-sm text-foreground">
                Disponível para:
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                  Trabalho Presencial
                </span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                  Trabalho Híbrido
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                  Trabalho Remoto
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;