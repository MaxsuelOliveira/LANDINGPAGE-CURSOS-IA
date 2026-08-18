import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Brain, 
  Lock, 
  Users, 
  Star, 
  Play, 
  CheckCircle, 
  Award,
  TrendingUp,
  Globe,
  Zap,
  Target
} from 'lucide-react';

const Home = () => {
  const [email, setEmail] = useState('');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Obrigado pelo interesse! Entraremos em contato em breve no email: ${email}`);
    setEmail('');
  };

  const features = [
    {
      icon: Shield,
      title: 'Proteção Avançada',
      description: 'Aprenda técnicas de segurança de última geração para sistemas de IA'
    },
    {
      icon: Brain,
      title: 'IA Ética e Segura',
      description: 'Desenvolva sistemas de inteligência artificial responsáveis e seguros'
    },
    {
      icon: Lock,
      title: 'Criptografia Quântica',
      description: 'Domine as tecnologias de criptografia para a era quântica'
    },
    {
      icon: Target,
      title: 'Detecção de Ameaças',
      description: 'Identifique e neutralize ameaças em tempo real usando IA'
    },
    {
      icon: Globe,
      title: 'Padrões Globais',
      description: 'Conforme com regulamentações internacionais de segurança'
    },
    {
      icon: Zap,
      title: 'Resposta Rápida',
      description: 'Sistemas automatizados de resposta a incidentes de segurança'
    }
  ];

  const stats = [
    { number: '5,000+', label: 'Alunos Certificados' },
    { number: '98%', label: 'Taxa de Aprovação' },
    { number: '150+', label: 'Empresas Parceiras' },
    { number: '24/7', label: 'Suporte Técnico' }
  ];

  const testimonials = [
    {
      name: 'Dr. Maria Silva',
      role: 'CISO - TechCorp Brasil',
      text: 'O curso transformou completamente nossa abordagem de segurança em IA. Implementamos as técnicas aprendidas e reduzimos incidentes em 85%.',
      rating: 5,
      initials: 'MS'
    },
    {
      name: 'Carlos Rodrigues',
      role: 'Engenheiro de ML - DataSec',
      text: 'Conteúdo excepcional e muito prático. Consegui uma promoção para líder de segurança em IA logo após concluir o curso.',
      rating: 5,
      initials: 'CR'
    },
    {
      name: 'Ana Santos',
      role: 'Pesquisadora - AI Lab',
      text: 'A metodologia é fantástica! Aprendi conceitos avançados de forma clara e objetiva. Recomendo para todos os profissionais da área.',
      rating: 5,
      initials: 'AS'
    }
  ];

  return (
    <div className="pt-16 bg-dark-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-500 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-200"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-400"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full mb-8"
          >
            <Star className="h-5 w-5 text-yellow-400" />
            <span className="text-sm font-medium text-white">Curso #1 em Segurança de IA no Brasil</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white"
          >
            Domine a{' '}
            <span className="text-gradient">Segurança</span>
            <br />
            em Inteligência{' '}
            <span className="text-gradient">Artificial</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Torne-se um especialista em segurança de IA e proteja o futuro da tecnologia. 
            Curso completo com certificação internacional reconhecida.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-gradient px-8 py-4 rounded-full text-lg font-semibold text-white shadow-lg"
              onClick={() => document.getElementById('signup').scrollIntoView({ behavior: 'smooth' })}
            >
              Começar Agora 🚀
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-effect px-8 py-4 rounded-full text-lg font-semibold text-white border border-white/20"
              onClick={() => setIsVideoPlaying(true)}
            >
              <Play className="inline h-5 w-5 mr-2" />
              Assistir Demo
            </motion.button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center space-x-6 text-sm text-gray-400"
          >
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>5,000+ alunos</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-400" />
              <span>4.9/5 avaliação</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5" />
              <span>Certificação ISO</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative glass-effect rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="aspect-video relative bg-dark-900">
              {!isVideoPlaying ? (
                <div className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                     onClick={() => setIsVideoPlaying(true)}>
                  <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute z-10 w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Play className="h-8 w-8 text-primary-600 ml-1" />
                  </motion.div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Vídeo de Apresentação</h3>
                    <p className="text-gray-300">Conheça nosso curso de segurança em IA</p>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full bg-dark-900 flex items-center justify-center">
                  <p className="text-white">Vídeo seria reproduzido aqui</p>
                </div>
              )}
            </div>
          </motion.div>
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
                className="text-center"
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

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              O que você vai <span className="text-gradient">aprender</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Nosso curso abrange todos os aspectos essenciais da segurança em IA, 
              desde conceitos básicos até técnicas avançadas de proteção.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-effect p-8 rounded-2xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              O que nossos <span className="text-gradient">alunos dizem</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Histórias reais de profissionais que transformaram suas carreiras 
              com nosso curso de segurança em IA.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-effect p-8 rounded-2xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">{testimonial.initials}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Section */}
      <section id="signup" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect p-8 md:p-12 rounded-3xl text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Pronto para se tornar um <span className="text-gradient">especialista</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Junte-se a mais de 5.000 profissionais que já dominam a segurança em IA. 
              Comece sua jornada hoje mesmo!
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="btn-gradient px-8 py-4 rounded-full font-semibold text-white whitespace-nowrap"
                >
                  Inscrever-se 🚀
                </motion.button>
              </div>
            </form>

            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>Garantia de 30 dias ou seu dinheiro de volta</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;