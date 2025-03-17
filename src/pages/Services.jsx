import { motion } from 'framer-motion';
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import Footer from '../components/ui/Footer';

const services = [
  {
    title: 'Custom Software Development',
    description: 'Build scalable, custom software solutions tailored to your business needs',
    icon: '💻',
    features: [
      'Full-stack development',
      'Cloud-native applications',
      'API integration',
      'Legacy system modernization'
    ],
    image: 'https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg'
  },
  {
    title: 'Mobile App Development',
    description: 'Create engaging mobile experiences for iOS and Android platforms',
    icon: '📱',
    features: [
      'Native app development',
      'Cross-platform solutions',
      'UI/UX design',
      'App maintenance & support'
    ],
    image: 'https://img.freepik.com/free-vector/mobile-development-concept-illustration_114360-2120.jpg'
  },
  {
    title: 'Cloud Solutions',
    description: 'Leverage cloud technology to optimize your business operations',
    icon: '☁️',
    features: [
      'Cloud migration',
      'Infrastructure optimization',
      'DevOps implementation',
      'Security & compliance'
    ],
    image: 'https://img.freepik.com/free-vector/cloud-services-isometric-composition_1284-25084.jpg'
  },
  {
    title: 'Machine Learning',
    description: 'Harness the power of AI to drive innovation and efficiency',
    icon: '🤖',
    features: [
      'Predictive analytics',
      'Natural language processing',
      'Computer vision',
      'ML model deployment'
    ],
    image: 'https://img.freepik.com/free-vector/artificial-intelligence-concept-illustration_114360-7135.jpg'
  }
];

const technologies = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Kubernetes', icon: '⎈' },
  { name: 'TensorFlow', icon: '🧠' },
  { name: 'MongoDB', icon: '🍃' }
];

const benefits = [
  {
    title: 'Rapid Development',
    description: 'Get your product to market faster with our agile development approach',
    icon: '⚡'
  },
  {
    title: 'Scalable Solutions',
    description: 'Build systems that grow with your business needs',
    icon: '📈'
  },
  {
    title: 'Expert Team',
    description: 'Work with experienced developers, designers, and project managers',
    icon: '👥'
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock technical assistance and maintenance',
    icon: '🔧'
  }
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Planning',
    description: 'We analyze your requirements and create a comprehensive project roadmap that aligns with your business goals. Our team works closely with you to understand your vision and challenges.',
    image: 'https://img.freepik.com/free-vector/business-planning-concept-illustration_114360-1867.jpg'
  },
  {
    number: '02',
    title: 'Design & Architecture',
    description: 'Our team creates intuitive designs and robust architecture that ensure scalability and performance. We focus on creating user-friendly interfaces that deliver exceptional experiences.',
    image: 'https://img.freepik.com/free-vector/design-process-concept-illustration_114360-4357.jpg'
  },
  {
    number: '03',
    title: 'Development & Testing',
    description: 'We build your solution using cutting-edge technologies and industry best practices. Rigorous testing ensures high quality and reliability of your application.',
    image: 'https://img.freepik.com/free-vector/development-process-concept-illustration_114360-5488.jpg'
  },
  {
    number: '04',
    title: 'Deployment & Support',
    description: 'Seamless deployment and continuous monitoring ensure your solution runs smoothly. Our support team is always ready to assist you with any technical needs.',
    image: 'https://img.freepik.com/free-vector/cloud-hosting-concept-illustration_114360-4123.jpg'
  }
];

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-96 h-screen pb-20 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg"
            alt="Technology Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Transform Your Business with Modern Technology
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We deliver innovative solutions that drive growth and efficiency
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-gray-50">
            <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50 relative">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://img.freepik.com/free-photo/abstract-digital-grid-background_53876-97647.jpg"
            alt="Digital Grid"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <h1 className='text-gray-700 text-4xl font-bold text-center mb-10'>Our Services</h1>
        <div className="container mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-6 mb-6">
                  <div className="text-4xl">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-52 object-cover rounded-xl mb-6"
                />
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <ArrowRightIcon className="w-4 h-4 text-blue-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://img.freepik.com/free-photo/abstract-technology-binary-code-background_53876-97395.jpg"
            alt="Technology Pattern"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Technologies We Use</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We leverage the latest technologies and frameworks to build robust, scalable solutions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="flex items-center justify-center p-6 bg-gray-700 rounded-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <span className="text-4xl mr-3">{tech.icon}</span>
                <span className="text-lg font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white relative">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://img.freepik.com/free-photo/abstract-blue-geometric-shapes-background_24972-1842.jpg"
            alt="Geometric Pattern"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Partner with us to leverage our expertise and experience in delivering exceptional digital solutions
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://img.freepik.com/free-photo/abstract-smooth-empty-grey-studio-well-use-as-background-business-report-digital-website-template-backdrop_1258-55969.jpg"
            alt="Process Background"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-gray-800 font-bold mb-6">Our Development Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and exceptional results
            </p>
          </div>
          <div className="space-y-20">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-12`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-1">
                  <div className="text-5xl font-bold text-blue-600 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                <div className="flex-1">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full rounded-2xl shadow-lg"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-63452.jpg"
            alt="CTA Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-6 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-600  mb-8">
            Ready to Start Your Digital Transformation?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Let's discuss how we can help you achieve your business goals with our innovative solutions
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
