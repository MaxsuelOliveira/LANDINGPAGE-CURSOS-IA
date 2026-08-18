import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Award, 
  CheckCircle, 
  Play,
  Download,
  MessageCircle,
  Target,
  Brain,
  Shield,
  Code,
  Database,
  Network
} from 'lucide-react';

const Curso = () => {
  const modules = [
    {
      title: 'Fundamentos de Segurança em IA',
      duration: '8 horas',
      lessons: 12,
      description: 'Conceitos básicos, tipos de ameaças e princípios de segurança aplicados à IA.',
      topics: ['Introdução à Segurança de IA', 'Tipos de Ataques', 'Modelos de Ameaças', 'Frameworks de Segurança']
    },
    {
      title: 'Ataques Adversariais',
      duration: '10 horas',
      lessons: 15,
      description: 'Compreenda e mitigue ataques que exploram vulnerabilidades em modelos de ML.',
      topics: ['Ataques de Evasão', 'Ataques de Envenenamento', 'Defesas Adversariais', 'Robustez de Modelos']
    },
    {
      title: 'Privacidade e Proteção de Dados',
      duration: '6 horas',
      lessons: 10,
      description: 'Técnicas para proteger dados sensíveis em sistemas de IA.',
      topics: ['Privacidade Diferencial', 'Federated Learning', 'Anonimização', 'LGPD e GDPR']
    },
    {
      title: 'Segurança em Deep Learning',
      duration: '12 horas',
      lessons: 18,
      description: 'Proteja redes neurais profundas contra ameaças específicas.',
      topics: ['Backdoor Attacks', 'Model Inversion', 'Membership Inference', 'Secure Training']
    },
    {
      title: 'IA Explicável e Auditoria',
      duration: '8 horas',
      lessons: 12,
      description: 'Torne seus modelos interpretáveis e auditáveis para compliance.',
      topics: ['XAI Techniques', 'Model Auditing', 'Bias Detection', 'Fairness Metrics']
    },
    {
      title: 'Implementação Prática',
      duration: '16 horas',
      lessons: 20,
      description: 'Projetos hands-on para aplicar todos os conceitos aprendidos.',
      topics: ['Projeto Capstone', 'Case Studies', 'Red Team Exercises', 'Security Assessment']
    }
  ];

  const features = [
    {
      icon: BookOpen,
      title: 'Conteúdo Atualizado',
      description: 'Material sempre atualizado com as últimas tendências e ameaças'
    },
    {
      icon: Users,
      title: 'Mentoria Personalizada',
      description: 'Acompanhamento individual com especialistas da área'
    },
    {
      icon: Award,
      title: 'Certificação Internacional',
      description: 'Certificado reconhecido mundialmente por empresas líderes'
    },
    {
      icon: Download,
      title: 'Material Complementar',
      description: 'E-books, templates e ferramentas exclusivas para download'
    },
    {
      icon: MessageCircle,
      title: 'Comunidade Ativa',
      description: 'Acesso a grupo exclusivo com networking e suporte 24/7'
    },
    {
      icon: Play,
      title: 'Acesso Vitalício',
      description: 'Assista quantas vezes quiser, para sempre'
    }
  ];

  const tools = [
    { name: 'Python & TensorFlow', icon: Code },
    { name: 'PyTorch & Scikit-learn', icon: Brain },
    { name: 'Security Frameworks', icon: Shield },
    { name: 'Cloud Platforms', icon: Network },
    { name: 'Data Protection Tools', icon: Database },
    { name: 'Monitoring Systems', icon: Target }
  ];

  return (
    <div className="pt-16 bg-dark-950">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Curso Completo de <span className="text-gradient">Segurança em IA</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Domine todas as técnicas e ferramentas necessárias para proteger 
                sistemas de inteligência artificial contra ameaças modernas.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-full">
                  <Clock className="h-5 w-5 text-primary-400" />
                  <span className="text-white">60 horas de conteúdo</span>
                </div>
                <div className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-full">
                  <Users className="h-5 w-5 text-primary-400" />
                  <span className="text-white">5,000+ alunos</span>
                </div>
                <div className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-full">
                  <Award className="h-5 w-5 text-primary-400" />
                  <span className="text-white">Certificação ISO</span>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-gradient px-8 py-4 rounded-full text-lg font-semibold text-white"
              >
                Inscrever-se Agora 🚀
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-effect p-8 rounded-3xl">
                <div className="w-full h-64 bg-gradient-primary opacity-20 rounded-2xl flex items-center justify-center">
                  <Brain className="h-24 w-24 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
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
              Módulos do <span className="text-gradient">Curso</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Currículo estruturado para levar você do básico ao avançado 
              em segurança de inteligência artificial.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-effect p-8 rounded-2xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white flex-1">
                    {module.title}
                  </h3>
                  <div className="text-right text-sm text-gray-400">
                    <div className="flex items-center space-x-1 mb-1">
                      <Clock className="h-4 w-4" />
                      <span>{module.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{module.lessons} aulas</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {module.description}
                </p>
                <div className="space-y-2">
                  {module.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{topic}</span>
                    </div>
                  ))}
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
              O que está <span className="text-gradient">incluído</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tudo que você precisa para se tornar um especialista em segurança de IA.
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

      {/* Tools Section */}
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
              Ferramentas e <span className="text-gradient">Tecnologias</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Aprenda a usar as principais ferramentas utilizadas por especialistas 
              em segurança de IA no mundo todo.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass-effect p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300"
              >
                <tool.icon className="h-12 w-12 text-primary-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white text-sm">
                  {tool.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect p-8 md:p-12 rounded-3xl text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Comece sua jornada <span className="text-gradient">hoje</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Não perca a oportunidade de se tornar um especialista em uma das 
              áreas mais importantes e promissoras da tecnologia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-gradient px-8 py-4 rounded-full text-lg font-semibold text-white"
              >
                Inscrever-se Agora 🚀
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-effect px-8 py-4 rounded-full text-lg font-semibold text-white border border-white/20"
              >
                Baixar Currículo Completo
              </motion.button>
            </div>
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

export default Curso;