import { Shield, Database, Server, AlertTriangle, ChevronRight, FileText, Trello, GitBranch } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projetos" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Projetos & Estudos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explorando tecnologias e implementando soluções em segurança da informação
          </p>
        </div>

        {/* TAP Project - Featured */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-300">
            <div className="flex items-start mb-6">
              <Shield className="w-10 h-10 text-primary mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  TAP – Projeto de Segurança de Dados do SUS
                </h3>
                <p className="text-muted-foreground mb-4">
                  Tentativa de implementação de medidas de segurança da informação voltadas 
                  à proteção de dados sensíveis no setor da saúde.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Identificação */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-primary flex items-center">
                  <Database className="w-5 h-5 mr-2" />
                  Identificação
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-secondary mt-0.5 mr-2 flex-shrink-0" />
                    <span><strong className="text-foreground">Projeto:</strong> Implementação de Ferramentas DLP & DR</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-secondary mt-0.5 mr-2 flex-shrink-0" />
                    <span><strong className="text-foreground">Sigla:</strong> DLP & DR</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-secondary mt-0.5 mr-2 flex-shrink-0" />
                    <span><strong className="text-foreground">ID TAP:</strong> 001</span>
                  </li>
                </ul>
              </div>

              {/* Justificativa */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-primary flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Justificativa
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-secondary mt-0.5 mr-2 flex-shrink-0" />
                    <span><strong className="text-foreground">DLP:</strong> Prevenir perda de dados e proteger informações críticas</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-secondary mt-0.5 mr-2 flex-shrink-0" />
                    <span><strong className="text-foreground">DR:</strong> Restaurar dados e sistemas após falhas</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-secondary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Prevenção + recuperação rápida para continuidade</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Objetivos */}
            <div className="mt-6 pt-6 border-t border-border">
              <h4 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Server className="w-5 h-5 mr-2" />
                Objetivos do Projeto
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-background/50 rounded-lg p-4">
                  <p className="text-sm text-foreground">
                    Implantar solução integrada de <strong className="text-primary">DLP & DR</strong> até 
                    <strong className="text-secondary"> 2º trimestre de 2026</strong>
                  </p>
                </div>
                <div className="bg-background/50 rounded-lg p-4">
                  <p className="text-sm text-foreground">
                    Reduzir em <strong className="text-primary">40%</strong> incidentes de vazamento de dados
                  </p>
                </div>
                <div className="bg-background/50 rounded-lg p-4">
                  <p className="text-sm text-foreground">
                    Diminuir tempo de recuperação (RTO) para <strong className="text-secondary">menos de 4 horas</strong>
                  </p>
                </div>
                <div className="bg-background/50 rounded-lg p-4">
                  <p className="text-sm text-foreground">
                    Garantir conformidade com políticas de governança
                  </p>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                Symantec DLP
              </span>
              <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full border border-secondary/20">
                Veeam Backup
              </span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20">
                Data Protection
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                Disaster Recovery
              </span>
            </div>

            {/* Project Links */}
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://docs.google.com/document/d/1Cxrc21WJizQseE0jDULwSpZ_bvOZ5Ue9EbTkbV37_Q8/edit?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-all duration-300"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Relatório do TAP
                </a>
                <a 
                  href="https://trello.com/b/qhOKTwsl/imp-f-dpl-dr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 bg-secondary/10 text-secondary rounded-lg hover:bg-secondary/20 transition-all duration-300"
                >
                  <Trello className="w-4 h-4 mr-2" />
                  Etapas no Trello
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other Studies */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <Server className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Laboratório de Firewall Linux
                </h3>
                <span className="inline-flex items-center px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full">
                  Em andamento
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Configuração e gerenciamento de firewall em ambiente Linux, 
              implementando regras de segurança e monitoramento de tráfego.
            </p>
            <a 
              href="https://lucid.app/lucidchart/b5f5d836-d00e-412e-8196-fb37c56a0eda/edit?viewport_loc=-1860%2C-2499%2C4657%2C2126%2C0_0&invitationId=inv_a036932f-0979-47f8-ad4d-4c11f379d347"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <GitBranch className="w-4 h-4 mr-1" />
              Ver Fluxograma
            </a>
          </div>

          <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Automação em Python
                </h3>
                <span className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  Estudando
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Desenvolvimento de scripts para automação de tarefas de segurança, 
              análise de logs e resposta a incidentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
