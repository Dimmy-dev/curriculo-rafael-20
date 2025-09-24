import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Desenvolvido com <Heart className="inline w-4 h-4 text-red-500" /> por Rafael Resende Patriota
          </p>
          <div className="flex justify-center space-x-4">
            <a href="mailto:rafaelpatriota507@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            © 2025 - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;