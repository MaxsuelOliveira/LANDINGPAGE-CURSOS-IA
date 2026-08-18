import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Send,
  CheckCircle,
  Clock,
  Users,
  HelpCircle,
  ChevronDown
} from 'lucide-react';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: ''
    });
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'contato@aisecuritypro.com.br',
      description: 'Resposta em até 2 horas'
    },
    {
      icon: Phone,
      title: 'Telefone',
      info: '+55 (11) 99999-9999',
      description: 'Seg-Sex das 9h às 18h'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: '+55 (11) 99999-9999',
      description: 'Suporte instantâneo'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'São Paulo, SP - Brasil',
      description: 'Atendimento remoto'
    }
  ];

  const faqs = [
    {
      question: 'Preciso ter conhecimento prévio em IA para fazer o curso?',
      answer: 'Não é necessário conhecimento avançado em IA. O curso começa com fundamentos e evolui gradualmente. Recomendamos conhecimento básico em programação e conceitos de segurança.'
    },
    {
      question: 'Qual é a duração do curso?',
      answer: 'O curso tem 60 horas de conteúdo distribuídas em 6 módulos. Você pode estudar no seu próprio ritmo, mas recomendamos dedicar 8-10 horas por semana para concluir em 2 meses.'
    },
    {
      question: 'O certificado é reconhecido internacionalmente?',
      answer: 'Sim! Nosso certificado é reconhecido por empresas líderes em tecnologia e está alinhado com padrões internacionais de segurança em IA, incluindo ISO/IEC 23053.'
    },
    {
      question: 'Posso acessar o conteúdo após concluir o curso?',
      answer: 'Sim! Você terá acesso vitalício a todo o conteúdo, incluindo atualizações futuras. Também manterá acesso à comunidade exclusiva de alunos.'
    },
    {
      question: 'Vocês oferecem suporte durante o curso?',
      answer: 'Oferecemos suporte completo através de mentoria individual, comunidade ativa no Discord, e sessões de Q&A semanais com especialistas.'
    },
    {
      question: 'Há garantia de devolução?',
      answer: 'Sim! Oferecemos garantia incondicional de 30 dias. Se não estiver satisfeito por qualquer motivo, devolvemos 100% do valor investido.'
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
            Entre em <span className="text-gradient">Contato</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Tem alguma dúvida sobre o curso? Nossa equipe de especialistas 
            está pronta para ajudar você a dar o próximo passo na sua carreira.
          </motion.p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((contact, index) => (
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
                  <contact.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {contact.title}
                </h3>
                <p className="text-primary-400 font-semibold mb-2">
                  {contact.info}
                </p>
                <p className="text-gray-400 text-sm">
                  {contact.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect p-8 md:p-12 rounded-3xl"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Envie sua <span className="text-gradient">mensagem</span>
              </h2>
              <p className="text-gray-400">
                Preencha o formulário abaixo e nossa equipe entrará em contato em breve
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-white font-semibold mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telefone" className="block text-white font-semibold mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="assunto" className="block text-white font-semibold mb-2">
                    Assunto
                  </label>
                  <select
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300"
                  >
                    <option value="" className="bg-dark-900">Selecione um assunto</option>
                    <option value="curso" className="bg-dark-900">Informações sobre o curso</option>
                    <option value="certificacao" className="bg-dark-900">Certificação</option>
                    <option value="suporte" className="bg-dark-900">Suporte técnico</option>
                    <option value="parceria" className="bg-dark-900">Parcerias</option>
                    <option value="outros" className="bg-dark-900">Outros</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-white font-semibold mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300 resize-none"
                  placeholder="Descreva sua dúvida ou solicitação..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full btn-gradient py-4 rounded-xl font-semibold text-white flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Enviar Mensagem</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Perguntas <span className="text-gradient">Frequentes</span>
            </h2>
            <p className="text-xl text-gray-400">
              Encontre respostas para as dúvidas mais comuns sobre nosso curso
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
                >
                  <span className="font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: activeAccordion === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: activeAccordion === index ? 'auto' : 0,
                    opacity: activeAccordion === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
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
              Ainda tem <span className="text-gradient">dúvidas</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Nossa equipe está sempre disponível para ajudar você a encontrar 
              as melhores soluções para sua carreira em segurança de IA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-gradient px-8 py-4 rounded-full font-semibold text-white"
              >
                Agendar Conversa 📞
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-effect px-8 py-4 rounded-full font-semibold text-white border border-white/20"
              >
                Falar no WhatsApp 💬
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contato;