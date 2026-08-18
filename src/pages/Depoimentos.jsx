import { motion } from 'framer-motion';
import { Star, Quote, Briefcase, MapPin, TrendingUp } from 'lucide-react';

const Depoimentos = () => {
  const testimonials = [
    {
      name: 'Dr. Maria Silva',
      role: 'CISO - TechCorp Brasil',
      company: 'TechCorp',
      location: 'São Paulo, SP',
      initials: 'MS',
      text: 'O curso transformou completamente nossa abordagem de segurança em IA. Implementamos as técnicas aprendidas e reduzimos incidentes em 85%. A metodologia é excepcional e o conteúdo está sempre atualizado com as últimas tendências do mercado.',
      rating: 5,
      result: 'Redução de 85% em incidentes',
      timeframe: '3 meses após conclusão'
    },
    {
      name: 'Carlos Rodrigues',
      role: 'Engenheiro de ML - DataSec',
      company: 'DataSec Solutions',
      location: 'Rio de Janeiro, RJ',
      initials: 'CR',
      text: 'Conteúdo excepcional e muito prático. Consegui uma promoção para líder de segurança em IA logo após concluir o curso. Os projetos hands-on me deram a confiança necessária para implementar soluções robustas na empresa.',
      rating: 5,
      result: 'Promoção para líder de equipe',
      timeframe: '2 meses após conclusão'
    },
    {
      name: 'Ana Santos',
      role: 'Pesquisadora - AI Lab',
      company: 'Universidade Federal',
      location: 'Belo Horizonte, MG',
      initials: 'AS',
      text: 'A metodologia é fantástica! Aprendi conceitos avançados de forma clara e objetiva. O suporte da comunidade é incrível e os mentores são extremamente qualificados. Recomendo para todos os profissionais da área.',
      rating: 5,
      result: 'Publicação de 3 papers',
      timeframe: '6 meses após conclusão'
    },
    {
      name: 'Roberto Lima',
      role: 'CTO - FinTech Secure',
      company: 'FinTech Secure',
      location: 'Brasília, DF',
      initials: 'RL',
      text: 'Implementamos um sistema de detecção de fraudes baseado nas técnicas do curso. Os resultados foram impressionantes: 95% de precisão na detecção e redução significativa de falsos positivos.',
      rating: 5,
      result: '95% precisão em detecção',
      timeframe: '4 meses após conclusão'
    },
    {
      name: 'Juliana Costa',
      role: 'Security Analyst - CloudTech',
      company: 'CloudTech Brasil',
      location: 'Porto Alegre, RS',
      initials: 'JC',
      text: 'O curso me deu as ferramentas necessárias para migrar de segurança tradicional para segurança em IA. Hoje lidero projetos de implementação de IA segura em uma das maiores empresas de cloud do país.',
      rating: 5,
      result: 'Transição de carreira bem-sucedida',
      timeframe: '5 meses após conclusão'
    },
    {
      name: 'Pedro Oliveira',
      role: 'Consultor de Segurança',
      company: 'SecureAI Consulting',
      location: 'Recife, PE',
      initials: 'PO',
      text: 'Abri minha própria consultoria especializada em segurança de IA após o curso. A demanda é enorme e o conhecimento adquirido me permite oferecer soluções de alto valor agregado para meus clientes.',
      rating: 5,
      result: 'Empresa própria fundada',
      timeframe: '8 meses após conclusão'
    },
    {
      name: 'Fernanda Alves',
      role: 'Data Scientist - HealthAI',
      company: 'HealthAI Solutions',
      location: 'Curitiba, PR',
      initials: 'FA',
      text: 'Trabalho com IA na área da saúde e a segurança é fundamental. O curso me ensinou como proteger dados sensíveis de pacientes enquanto mantemos a eficácia dos modelos de diagnóstico.',
      rating: 5,
      result: 'Compliance 100% LGPD',
      timeframe: '3 meses após conclusão'
    },
    {
      name: 'Lucas Ferreira',
      role: 'DevSecOps Engineer',
      company: 'TechStart Innovations',
      location: 'Florianópolis, SC',
      initials: 'LF',
      text: 'O módulo de implementação prática foi game-changer para mim. Consegui integrar pipelines de segurança em IA no nosso processo de CI/CD, automatizando a detecção de vulnerabilidades.',
      rating: 5,
      result: 'Pipeline automatizado implementado',
      timeframe: '2 meses após conclusão'
    },
    {
      name: 'Camila Souza',
      role: 'AI Ethics Specialist',
      company: 'EthicalAI Corp',
      location: 'Salvador, BA',
      initials: 'CS',
      text: 'O foco em ética e explicabilidade em IA foi exatamente o que eu precisava. Hoje sou responsável por garantir que todos os modelos da empresa sejam justos, transparentes e seguros.',
      rating: 5,
      result: 'Especialização em IA ética',
      timeframe: '4 meses após conclusão'
    }
  ];

  const stats = [
    { number: '98%', label: 'Taxa de Satisfação' },
    { number: '5,000+', label: 'Alunos Certificados' },
    { number: '4.9/5', label: 'Avaliação Média' },
    { number: '150+', label: 'Empresas Beneficiadas' }
  ];

  return (
    <div className="pt-16 bg-dark-950">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            O que nossos <span className="text-gradient">alunos dizem</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Histórias reais de profissionais que transformaram suas carreiras 
            e empresas com nosso curso de segurança em IA.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center glass-effect p-6 rounded-2xl"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-effect p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 relative"
              >
                {/* Quote Icon */}
                <Quote className="absolute top-4 right-4 h-8 w-8 text-primary-400 opacity-50" />
                
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">{testimonial.initials}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-lg">{testimonial.name}</h3>
                    <p className="text-primary-400 font-semibold text-sm">{testimonial.role}</p>
                    <div className="flex items-center space-x-2 text-gray-400 text-xs mt-1">
                      <Briefcase className="h-3 w-3" />
                      <span>{testimonial.company}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 text-xs">
                      <MapPin className="h-3 w-3" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 italic leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                {/* Results */}
                <div className="border-t border-white/10 pt-4">
                  <div className="flex items-center space-x-2 text-green-400 font-semibold text-sm mb-1">
                    <TrendingUp className="h-4 w-4" />
                    <span>{testimonial.result}</span>
                  </div>
                  <p className="text-gray-400 text-xs">{testimonial.timeframe}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect p-8 md:p-12 rounded-3xl text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Sua história de <span className="text-gradient">sucesso</span> começa aqui
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Junte-se a mais de 5.000 profissionais que já transformaram suas 
              carreiras com nosso curso de segurança em IA.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-gradient px-8 py-4 rounded-full text-lg font-semibold text-white mb-4"
            >
              Começar Minha Jornada 🚀
            </motion.button>
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <Star className="h-5 w-5 text-yellow-400" />
              <span>Garantia de 30 dias ou seu dinheiro de volta</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Depoimentos;