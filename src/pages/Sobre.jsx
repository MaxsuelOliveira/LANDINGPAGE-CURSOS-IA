import { motion } from 'framer-motion';
import { Shield, Users, Award, TrendingUp, Globe, Target } from 'lucide-react';

const Sobre = () => {
  const stats = [
    { number: '5,000+', label: 'Alunos Certificados' },
    { number: '98%', label: 'Taxa de Aprovação' },
    { number: '150+', label: 'Empresas Parceiras' },
    { number: '3', label: 'Anos de Experiência' }
  ];

  const team = [
    {
      name: 'Dr. Marcus Silva',
      role: 'Fundador & CEO',
      description: 'PhD em Segurança Cibernética com 15 anos de experiência em IA e machine learning.',
      initials: 'MS'
    },
    {
      name: 'Dra. Ana Rodrigues',
      role: 'Diretora de Pesquisa',
      description: 'Especialista em ética em IA e ex-pesquisadora do MIT com foco em segurança algorítmica.',
      initials: 'AR'
    },
    {
      name: 'Carlos Santos',
      role: 'Head de Tecnologia',
      description: 'Ex-engenheiro de segurança do Google, especialista em sistemas distribuídos e criptografia.',
      initials: 'CS'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Segurança Primeiro',
      description: 'Priorizamos a proteção e privacidade em todos os aspectos do nosso ensino.'
    },
    {
      icon: Users,
      title: 'Comunidade Forte',
      description: 'Construímos uma rede de profissionais comprometidos com a excelência.'
    },
    {
      icon: Award,
      title: 'Excelência Acadêmica',
      description: 'Mantemos os mais altos padrões de qualidade em nosso conteúdo educacional.'
    },
    {
      icon: Globe,
      title: 'Impacto Global',
      description: 'Formamos profissionais que fazem a diferença na segurança mundial de IA.'
    }
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
            Sobre o <span className="text-gradient">AI Security Pro</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Somos pioneiros no ensino de segurança em inteligência artificial, 
            formando a próxima geração de especialistas que protegerão o futuro digital.
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

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Nossa <span className="text-gradient">História</span>
              </h2>
              <div className="space-y-6 text-gray-400 leading-relaxed">
                <p>
                  O AI Security Pro nasceu da necessidade urgente de formar profissionais 
                  especializados em segurança de inteligência artificial. Em 2021, 
                  percebemos que o crescimento exponencial da IA criava novos desafios 
                  de segurança que poucos estavam preparados para enfrentar.
                </p>
                <p>
                  Fundado por especialistas com décadas de experiência em segurança 
                  cibernética e IA, nosso programa combina teoria acadêmica rigorosa 
                  com aplicações práticas do mundo real.
                </p>
                <p>
                  Hoje, somos reconhecidos como a principal instituição de ensino em 
                  segurança de IA no Brasil, com parcerias estratégicas com as maiores 
                  empresas de tecnologia do mundo.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-effect p-8 rounded-3xl">
                <div className="w-full h-64 bg-gradient-primary opacity-20 rounded-2xl flex items-center justify-center">
                  <Shield className="h-24 w-24 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Nossos <span className="text-gradient">Valores</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Os princípios que guiam nossa missão de formar os melhores 
              especialistas em segurança de IA do mundo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-effect p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Nossa <span className="text-gradient">Equipe</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Conheça os especialistas que lideram a revolução da segurança em IA.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-effect p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-bold text-2xl">{member.initials}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {member.name}
                </h3>
                <p className="text-primary-400 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-400 leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;