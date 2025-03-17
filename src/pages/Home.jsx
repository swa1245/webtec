import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Footer from '../components/ui/Footer';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const stats = [
  { number: '200+', label: 'Clients Worldwide' },
  { number: '500+', label: 'Projects Completed' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '15+', label: 'Years Experience' }
];

const services = [
  {
    title: 'Custom Software Development',
    description: 'Tailored solutions that perfectly align with your business needs and goals.',
    image: 'https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg'
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure for your growing business needs.',
    image: 'https://img.freepik.com/free-vector/cloud-services-isometric-composition_1284-25084.jpg'
  },
  {
    title: 'Digital Transformation',
    description: 'Modernize your business with cutting-edge digital solutions and strategies.',
    image: 'https://img.freepik.com/free-vector/digital-transformation-concept-illustration_108061-2297.jpg'
  }
];

const technologies = [
  'React.js', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes',
  'TensorFlow', 'GraphQL', 'MongoDB', 'PostgreSQL'
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'Working with Webtech has been transformative for our business. Their innovative solutions and dedicated team have helped us achieve remarkable growth.',
    image: 'https://img.freepik.com/free-photo/young-businesswoman-with-positive-attitude_1098-18644.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'CTO, Innovation Labs',
    content: 'The expertise and professionalism of the Webtech team are unmatched. They delivered our project on time and exceeded all expectations.',
    image: 'https://img.freepik.com/free-photo/young-businessman-with-positive-attitude_1098-18643.jpg'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager, Future Corp',
    content: 'Webtech\'s attention to detail and commitment to quality have made them our go-to technology partner. Highly recommended!',
    image: 'https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg'
  }
];

const features = [
  {
    title: 'Agile Development',
    description: 'Iterative approach with continuous feedback and improvements',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Scalable Architecture',
    description: 'Built to grow with your business needs',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: 'Security First',
    description: 'Enterprise-grade security measures built-in',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock technical assistance',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We analyze your requirements and create a comprehensive project roadmap.'
  },
  {
    number: '02',
    title: 'Design',
    description: 'Our team creates intuitive and engaging user experiences.'
  },
  {
    number: '03',
    title: 'Development',
    description: 'We build your solution using the latest technologies and best practices.'
  },
  {
    number: '04',
    title: 'Deployment',
    description: 'Seamless deployment and ongoing support to ensure success.'
  }
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 min-h-[90vh] flex items-center bg-gradient-soft overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "linear-gradient(to right, rgba(14,165,233,0.1), rgba(99,102,241,0.1))",
                "linear-gradient(to right, rgba(3,105,161,0.1), rgba(79,70,229,0.1))",
                "linear-gradient(to right, rgba(14,165,233,0.1), rgba(99,102,241,0.1))"
              ]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.div 
                variants={fadeIn}
                className="mb-6"
              >
                <span className="heading-md text-blue-600">Welcome to Innovation</span>
              </motion.div>
              <motion.h1 
                variants={fadeIn}
                className="heading-xl mb-6"
              >
                Transform Your
                <span className="text-gradient ml-4">Digital Future</span>
              </motion.h1>
              <motion.p 
                variants={fadeIn}
                className="body-lg text-gray-600 mb-8"
              >
                We craft innovative digital solutions that empower businesses to thrive in the modern tech landscape.
              </motion.p>
              <motion.div 
                variants={fadeIn}
                className="flex gap-4"
              >
                <Button variant="primary">Start Your Journey</Button>
                <Button variant="outline">Explore Solutions</Button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="hidden lg:block"
            >
              <motion.img
                src="https://img.freepik.com/free-vector/artificial-intelligence-concept-illustration_114360-7135.jpg"
                alt="Digital Innovation"
                className="w-full h-auto rounded-2xl shadow-2xl animate-float"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="heading-2xl font-bold text-blue-600 mb-2">{stat.number}</h3>
                <p className="body-md text-gray-600 tracking-wide uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <motion.div 
          style={{ opacity, scale }}
          className="container mx-auto px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="heading-md text-blue-600 font-semibold tracking-widest uppercase">Our Expertise</span>
            <h2 className="heading-3xl font-bold text-gray-900 mt-2 mb-4">Innovative Solutions</h2>
            <p className="body-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Elevate your business with our comprehensive range of cutting-edge services
            </p>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-video mb-6 overflow-hidden rounded-lg bg-blue-50">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <h3 className="heading-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="body-md text-gray-600 leading-relaxed">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="heading-md text-blue-600 font-semibold tracking-widest uppercase">Tech Stack</span>
            <h2 className="heading-3xl font-bold text-gray-900 mt-2 mb-4">Cutting-Edge Technologies</h2>
            <p className="body-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We leverage the latest technologies to deliver exceptional results
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-gray-50 rounded-full shadow-md hover:shadow-xl transition-all duration-300"
              >
                <span className="body-md font-medium text-gray-800 tracking-wide">{tech}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="heading-md text-blue-600 font-semibold tracking-widest uppercase">Why Choose Us</span>
            <h2 className="heading-3xl font-bold text-gray-900 mt-2 mb-4">Features that Set Us Apart</h2>
            <p className="body-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We combine innovation with reliability to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="w-12 h-12 mx-auto mb-4 text-blue-600 bg-blue-100 rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="heading-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="body-md text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="heading-md text-blue-600 font-semibold tracking-widest uppercase">Our Process</span>
            <h2 className="heading-3xl font-bold text-gray-900 mt-2 mb-4">How We Work</h2>
            <p className="body-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A streamlined approach to delivering exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-8xl font-bold text-blue-100 absolute -top-6 left-0">
                  {step.number}
                </div>
                <div className="relative z-10 pt-8">
                  <h3 className="heading-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="body-md text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="heading-md text-blue-600 font-semibold tracking-widest uppercase">Testimonials</span>
            <h2 className="heading-3xl font-bold text-gray-900 mt-2 mb-4">What Our Clients Say</h2>
            <p className="body-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Hear from businesses we've helped transform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="heading-lg font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="body-md text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="body-md text-gray-600 leading-relaxed italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="heading-4xl font-bold mb-4 tracking-tight">Ready to Transform?</h2>
              <p className="body-lg opacity-90 leading-relaxed max-w-2xl mx-auto tracking-wide">
                Join the ranks of innovative businesses that have revolutionized their digital presence
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="secondary" className="text-blue-600 tracking-wider">
                Start Your Project
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10 tracking-wider">
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
