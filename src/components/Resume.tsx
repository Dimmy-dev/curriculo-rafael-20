import { Target, GraduationCap, Code, Globe, Users, Briefcase, BookOpen } from 'lucide-react';

const Resume = () => {
  return (
    <section id="curriculo" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Objetivo */}
        <div id="objetivo" className="mb-16 animate-fade-in">
          <div className="flex items-center mb-6">
            <Target className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Objetivo Profissional
            </h2>
          </div>
          <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300">
            <p className="text-lg text-foreground">
              Atuar como <span className="text-primary font-semibold">estagiário em Segurança da Informação</span>, 
              aplicando conhecimentos em automação, contribuindo para a proteção de dados e o 
              fortalecimento da infraestrutura tecnológica da instituição.
            </p>
          </div>
        </div>

        {/* Formação Acadêmica */}
        <div id="formacao" className="mb-16 animate-fade-in animation-delay-200">
          <div className="flex items-center mb-6">
            <GraduationCap className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Formação Acadêmica
            </h2>
          </div>
          <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300">
            <h3 className="text-xl font-bold text-primary mb-2">Segurança da Informação</h3>
            <p className="text-foreground">SENAC/DF</p>
            <p className="text-muted-foreground">Início: 2025 | Previsão de conclusão: 2026</p>
          </div>
        </div>

        {/* Conhecimentos Técnicos */}
        <div id="conhecimentos" className="mb-16 animate-fade-in animation-delay-400">
          <div className="flex items-center mb-6">
            <Code className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Conhecimentos Técnicos
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300">
              <h3 className="text-lg font-semibold text-primary mb-3">Linguagens & Tecnologias</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span className="text-foreground">Python, HTML, Shell</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span className="text-foreground">VSCode, AWS, LucidChart, Trello</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300">
              <h3 className="text-lg font-semibold text-primary mb-3">Sistemas & Ferramentas</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  <span className="text-foreground">Windows e Linux (Ubuntu)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  <span className="text-foreground">Pacote Office Básico</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills em Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Idiomas */}
          <div className="animate-fade-in animation-delay-600">
            <div className="flex items-center mb-6">
              <Globe className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Idiomas
              </h2>
            </div>
            <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="text-foreground">Inglês</span>
                <span className="text-muted-foreground">Básico (em desenvolvimento)</span>
              </div>
              <div className="mt-3 bg-muted rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-primary h-full w-1/3 rounded-full animate-gradient-shift"></div>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="animate-fade-in animation-delay-800">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Soft Skills
              </h2>
            </div>
            <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20">
                  Trabalho em Equipe
                </span>
                <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full border border-secondary/20">
                  Proatividade
                </span>
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full border border-accent/20">
                  Disciplina
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Experiência */}
        <div id="experiencia" className="mb-16 animate-fade-in">
          <div className="flex items-center mb-6">
            <Briefcase className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Experiência
            </h2>
          </div>
          <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300">
            <h3 className="text-xl font-bold text-primary mb-2">Professor de Violão</h3>
            <p className="text-secondary mb-3">Freelancer</p>
            <p className="text-foreground">
              Aulas personalizadas, com foco no aprendizado prático e na disciplina.
            </p>
          </div>
        </div>

        {/* Cursos e Estudos */}
        <div className="animate-fade-in">
          <div className="flex items-center mb-6">
            <BookOpen className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Cursos e Estudo Autodidata
            </h2>
          </div>
          <div className="space-y-4">
            <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 animate-pulse"></div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Laboratório de Firewall Linux
                  </h3>
                  <span className="text-sm text-secondary">Em andamento</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-4"></div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    TAP – Projeto de Segurança de Dados do SUS
                  </h3>
                  <p className="text-muted-foreground">
                    Tentativa de implementação de projeto de segurança de dados
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;