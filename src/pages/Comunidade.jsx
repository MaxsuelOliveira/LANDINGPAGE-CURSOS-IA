import { useState } from 'react';
import './Comunidade.css';

const Comunidade = () => {
  const [activeTab, setActiveTab] = useState('depoimentos');

  const depoimentos = [
    {
      name: 'Maria Silva',
      role: 'E-commerce Owner',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Em apenas 2 meses no Income Lounge, consegui escalar minha loja online de R$ 5k para R$ 45k por mês. A comunidade é incrível!',
      result: 'R$ 45k/mês',
      time: '2 meses'
    },
    {
      name: 'João Santos',
      role: 'Digital Marketer',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Saí do zero absoluto e hoje tenho uma agência de marketing digital que fatura R$ 80k mensais. Mudou completamente minha vida!',
      result: 'R$ 80k/mês',
      time: '4 meses'
    },
    {
      name: 'Ana Rodrigues',
      role: 'Infoprodutor',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Criei meu primeiro curso online seguindo as estratégias do Income Lounge. Já vendi mais de R$ 120k e não paro de crescer!',
      result: 'R$ 120k total',
      time: '6 meses'
    },
    {
      name: 'Carlos Oliveira',
      role: 'Dropshipper',
      image: 'https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Estava desempregado há 1 ano. Hoje, com dropshipping, faço R$ 30k por mês trabalhando de casa. Gratidão eterna!',
      result: 'R$ 30k/mês',
      time: '3 meses'
    }
  ];

  const eventos = [
    {
      title: 'Masterclass: Escalar para 6 Dígitos',
      date: '15 de Janeiro',
      time: '19:00 - 21:00',
      speaker: 'Marcus Silva',
      participants: '500+',
      status: 'upcoming'
    },
    {
      title: 'Workshop: Automação de Vendas',
      date: '22 de Janeiro',
      time: '20:00 - 22:00',
      speaker: 'Ana Rodrigues',
      participants: '300+',
      status: 'upcoming'
    },
    {
      title: 'Live: Q&A com a Comunidade',
      date: '28 de Janeiro',
      time: '19:30 - 21:00',
      speaker: 'Equipe Income Lounge',
      participants: '800+',
      status: 'upcoming'
    }
  ];

  const membros = [
    {
      name: 'Lucas Ferreira',
      role: 'Tech Entrepreneur',
      country: '🇧🇷 Brasil',
      business: 'SaaS Platform',
      revenue: 'R$ 150k/mês'
    },
    {
      name: 'Sofia Martinez',
      role: 'E-commerce Expert',
      country: '🇲🇽 México',
      business: 'Fashion Store',
      revenue: 'R$ 90k/mês'
    },
    {
      name: 'David Thompson',
      role: 'Digital Consultant',
      country: '🇺🇸 EUA',
      business: 'Consulting Agency',
      revenue: 'R$ 200k/mês'
    },
    {
      name: 'Isabella Costa',
      role: 'Content Creator',
      country: '🇧🇷 Brasil',
      business: 'Online Courses',
      revenue: 'R$ 75k/mês'
    }
  ];

  return (
    <div className="comunidade">
      {/* Hero Section */}
      <section className="comunidade-hero">
        <div className="comunidade-hero-content">
          <h1 className="fade-in">Nossa Comunidade</h1>
          <p className="hero-description fade-in">
            Mais de 1.400 empreendedores de 15 países diferentes unidos por um objetivo: 
            construir negócios digitais de sucesso e transformar vidas através do empreendedorismo.
          </p>
          <div className="community-stats fade-in">
            <div className="stat">
              <span className="stat-number">1,400+</span>
              <span className="stat-label">Membros Ativos</span>
            </div>
            <div className="stat">
              <span className="stat-number">15</span>
              <span className="stat-label">Países</span>
            </div>
            <div className="stat">
              <span className="stat-number">R$ 50M+</span>
              <span className="stat-label">Faturamento Total</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="tabs-section">
        <div className="tabs-container">
          <div className="tabs-nav">
            <button 
              className={`tab-button ${activeTab === 'depoimentos' ? 'active' : ''}`}
              onClick={() => setActiveTab('depoimentos')}
            >
              Depoimentos
            </button>
            <button 
              className={`tab-button ${activeTab === 'eventos' ? 'active' : ''}`}
              onClick={() => setActiveTab('eventos')}
            >
              Eventos
            </button>
            <button 
              className={`tab-button ${activeTab === 'membros' ? 'active' : ''}`}
              onClick={() => setActiveTab('membros')}
            >
              Membros Destaque
            </button>
          </div>

          <div className="tab-content">
            {/* Depoimentos Tab */}
            {activeTab === 'depoimentos' && (
              <div className="depoimentos-content">
                <h2 className="section-title fade-in">Histórias de Sucesso</h2>
                <div className="depoimentos-grid">
                  {depoimentos.map((depoimento, index) => (
                    <div key={index} className="depoimento-card slide-in" style={{animationDelay: `${index * 0.1}s`}}>
                      <div className="depoimento-header">
                        <img src={depoimento.image} alt={depoimento.name} className="depoimento-avatar" />
                        <div className="depoimento-info">
                          <h3>{depoimento.name}</h3>
                          <p className="role">{depoimento.role}</p>
                        </div>
                        <div className="depoimento-results">
                          <div className="result">{depoimento.result}</div>
                          <div className="time">em {depoimento.time}</div>
                        </div>
                      </div>
                      <div className="depoimento-text">
                        <p>"{depoimento.text}"</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Eventos Tab */}
            {activeTab === 'eventos' && (
              <div className="eventos-content">
                <h2 className="section-title fade-in">Próximos Eventos</h2>
                <div className="eventos-grid">
                  {eventos.map((evento, index) => (
                    <div key={index} className="evento-card slide-in" style={{animationDelay: `${index * 0.1}s`}}>
                      <div className="evento-header">
                        <h3>{evento.title}</h3>
                        <div className="evento-status">
                          <span className="status-badge upcoming">Em Breve</span>
                        </div>
                      </div>
                      <div className="evento-details">
                        <div className="detail">
                          <span className="icon">📅</span>
                          <span>{evento.date}</span>
                        </div>
                        <div className="detail">
                          <span className="icon">⏰</span>
                          <span>{evento.time}</span>
                        </div>
                        <div className="detail">
                          <span className="icon">🎤</span>
                          <span>{evento.speaker}</span>
                        </div>
                        <div className="detail">
                          <span className="icon">👥</span>
                          <span>{evento.participants} participantes</span>
                        </div>
                      </div>
                      <button className="evento-button">Garantir Vaga</button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Membros Tab */}
            {activeTab === 'membros' && (
              <div className="membros-content">
                <h2 className="section-title fade-in">Membros em Destaque</h2>
                <div className="membros-grid">
                  {membros.map((membro, index) => (
                    <div key={index} className="membro-card slide-in" style={{animationDelay: `${index * 0.1}s`}}>
                      <div className="membro-header">
                        <div className="membro-avatar">
                          {membro.name.charAt(0)}
                        </div>
                        <div className="membro-info">
                          <h3>{membro.name}</h3>
                          <p className="membro-role">{membro.role}</p>
                          <p className="membro-country">{membro.country}</p>
                        </div>
                      </div>
                      <div className="membro-business">
                        <div className="business-info">
                          <span className="business-label">Negócio:</span>
                          <span className="business-name">{membro.business}</span>
                        </div>
                        <div className="revenue-info">
                          <span className="revenue-label">Faturamento:</span>
                          <span className="revenue-amount">{membro.revenue}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="comunidade-cta">
        <div className="cta-container">
          <h2 className="cta-title fade-in">Pronto para Fazer Parte Desta Comunidade?</h2>
          <p className="cta-description fade-in">
            Junte-se a mais de 1.400 empreendedores que já estão transformando suas vidas 
            e construindo negócios digitais de sucesso.
          </p>
          <button className="cta-button fade-in">
            Quero Fazer Parte da Comunidade! 🚀
          </button>
          <div className="social-proof fade-in">
            <span className="proof-text">Mais de 50 novos membros se juntaram esta semana!</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Comunidade;