import './Recursos.css';

const Recursos = () => {
  const recursos = [
    {
      category: 'Treinamentos',
      items: [
        {
          title: 'Masterclass de E-commerce',
          description: 'Aprenda a criar uma loja online do zero e gerar suas primeiras vendas em 7 dias.',
          icon: '🛍️',
          duration: '4 horas',
          level: 'Iniciante'
        },
        {
          title: 'Marketing Digital Avançado',
          description: 'Técnicas avançadas de marketing digital para escalar seu negócio.',
          icon: '📱',
          duration: '6 horas',
          level: 'Avançado'
        },
        {
          title: 'Automação de Vendas',
          description: 'Crie funis de vendas automatizados que trabalham 24/7 por você.',
          icon: '⚡',
          duration: '5 horas',
          level: 'Intermediário'
        }
      ]
    },
    {
      category: 'Ferramentas',
      items: [
        {
          title: 'Kit de Templates',
          description: 'Mais de 50 templates prontos para landing pages, emails e campanhas.',
          icon: '📋',
          access: 'Download Direto',
          type: 'Templates'
        },
        {
          title: 'Calculadora de ROI',
          description: 'Ferramenta exclusiva para calcular o retorno dos seus investimentos.',
          icon: '🧮',
          access: 'Online',
          type: 'Ferramenta'
        },
        {
          title: 'Planilha de Controle Financeiro',
          description: 'Gerencie todas as finanças do seu negócio com nossa planilha avançada.',
          icon: '📊',
          access: 'Excel/Google Sheets',
          type: 'Planilha'
        }
      ]
    },
    {
      category: 'Suporte',
      items: [
        {
          title: 'Mentoria Individual',
          description: 'Sessões 1-on-1 com especialistas para acelerar seus resultados.',
          icon: '👨‍🏫',
          frequency: 'Semanal',
          duration: '1 hora'
        },
        {
          title: 'Grupo Exclusivo no Telegram',
          description: 'Acesso ao nosso grupo privado com mais de 1.400 empreendedores.',
          icon: '💬',
          members: '1,400+',
          activity: '24/7'
        },
        {
          title: 'Suporte Técnico',
          description: 'Equipe especializada para resolver qualquer problema técnico.',
          icon: '🔧',
          response: '< 2 horas',
          availability: 'Seg-Sex'
        }
      ]
    }
  ];

  const bonus = [
    {
      title: 'Ebook: "Os 10 Segredos dos Milionários Digitais"',
      value: 'R$ 197',
      description: 'Estratégias exclusivas utilizadas pelos maiores empreendedores digitais do mundo.',
      icon: '📚'
    },
    {
      title: 'Acesso VIP ao Evento Anual',
      value: 'R$ 500',
      description: 'Participação gratuita no nosso evento anual com os maiores nomes do empreendedorismo.',
      icon: '🎪'
    },
    {
      title: 'Auditoria Gratuita do Seu Negócio',
      value: 'R$ 800',
      description: 'Nossa equipe fará uma análise completa do seu negócio e sugerirá melhorias.',
      icon: '🔍'
    }
  ];

  return (
    <div className="recursos">
      {/* Hero Section */}
      <section className="recursos-hero">
        <div className="recursos-hero-content">
          <h1 className="fade-in">Recursos Exclusivos</h1>
          <p className="hero-description fade-in">
            Acesse mais de 100 recursos premium que já transformaram a vida de 
            milhares de empreendedores. Tudo que você precisa em um só lugar.
          </p>
        </div>
      </section>

      {/* Resources Section */}
      <section className="recursos-main">
        <div className="recursos-container">
          {recursos.map((category, categoryIndex) => (
            <div key={categoryIndex} className="categoria-section">
              <h2 className="categoria-title fade-in">{category.category}</h2>
              <div className="recursos-grid">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="recurso-card slide-in" style={{animationDelay: `${itemIndex * 0.1}s`}}>
                    <div className="recurso-icon">{item.icon}</div>
                    <div className="recurso-content">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <div className="recurso-meta">
                        {item.duration && <span className="meta-item">⏱️ {item.duration}</span>}
                        {item.level && <span className="meta-item">📊 {item.level}</span>}
                        {item.access && <span className="meta-item">🔗 {item.access}</span>}
                        {item.type && <span className="meta-item">📁 {item.type}</span>}
                        {item.frequency && <span className="meta-item">📅 {item.frequency}</span>}
                        {item.members && <span className="meta-item">👥 {item.members}</span>}
                        {item.activity && <span className="meta-item">🕐 {item.activity}</span>}
                        {item.response && <span className="meta-item">⚡ {item.response}</span>}
                        {item.availability && <span className="meta-item">📞 {item.availability}</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bonus Section */}
      <section className="bonus-section">
        <div className="bonus-container">
          <h2 className="section-title fade-in">Bônus Exclusivos</h2>
          <p className="bonus-description fade-in">
            Como membro do The Income Lounge, você recebe estes bônus valiosos totalmente grátis:
          </p>
          <div className="bonus-grid">
            {bonus.map((item, index) => (
              <div key={index} className="bonus-card fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="bonus-icon">{item.icon}</div>
                <div className="bonus-info">
                  <h3>{item.title}</h3>
                  <div className="bonus-value">Valor: {item.value}</div>
                  <p>{item.description}</p>
                </div>
                <div className="bonus-badge">GRÁTIS</div>
              </div>
            ))}
          </div>
          <div className="total-value fade-in">
            <h3>Valor Total dos Bônus: <span>R$ 1.497</span></h3>
            <p>Tudo isso incluído na sua assinatura, sem custo adicional!</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="recursos-cta">
        <div className="cta-container">
          <h2 className="cta-title fade-in">Pronto para Ter Acesso a Tudo Isso?</h2>
          <p className="cta-description fade-in">
            Não perca mais tempo. Comece a transformar sua vida financeira hoje mesmo!
          </p>
          <button className="cta-button fade-in">
            Quero Acesso Completo Agora! 🚀
          </button>
          <div className="guarantee-badge fade-in">
            <span className="guarantee-icon">🔒</span>
            <span>Garantia incondicional de 30 dias</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recursos;