import { Shield, Terminal, Lock, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import profilePhoto from '@/assets/profile-photo.png';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Segurança da Informação';
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-glow animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='white' stroke-width='0.5' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Profile Photo */}
          <div className="mb-8 relative inline-block">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-50 animate-glow"></div>
            <img 
              src={profilePhoto} 
              alt="Rafael Rezende Patriota" 
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary/20 shadow-2xl"
            />
          </div>

          {/* Icons */}
          <div className="flex justify-center space-x-4 mb-6">
            <Shield className="w-8 h-8 text-primary animate-glow" />
            <Terminal className="w-8 h-8 text-secondary animate-glow animation-delay-1000" />
            <Lock className="w-8 h-8 text-accent animate-glow animation-delay-2000" />
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Rafael Rezende Patriota
            </span>
          </h1>

          {/* Animated subtitle */}
          <div className="h-8 mb-8">
            <p className="text-xl md:text-2xl text-muted-foreground">
              Estudante de <span className="text-primary font-semibold">{text}</span>
              <span className="animate-pulse">|</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Buscando oportunidade de estágio para aplicar conhecimentos em automação e 
            proteção de dados, contribuindo para o fortalecimento da infraestrutura tecnológica.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#curriculo"
              className="px-8 py-3 bg-gradient-primary text-background font-semibold rounded-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            >
              Ver Currículo
            </a>
            <a
              href="#contato"
              className="px-8 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300"
            >
              Entrar em Contato
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 text-muted-foreground mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;