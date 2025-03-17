import { motion } from 'framer-motion';
import Footer from '../components/ui/Footer';

const stats = [
  { label: 'Years of Experience', value: '10+' },
  { label: 'Projects Delivered', value: '500+' },
  { label: 'Client Satisfaction', value: '98%' },
  { label: 'Team Members', value: '50+' }
];

const values = [
  {
    title: 'Innovation',
    description: 'We embrace cutting-edge technologies and creative solutions',
    icon: '',
    image: 'https://img.freepik.com/free-vector/innovation-concept-illustration_114360-5848.jpg'
  },
  {
    title: 'Excellence',
    description: 'We strive for the highest quality in everything we do',
    icon: '',
    image: 'https://img.freepik.com/free-vector/achievement-concept-illustration_114360-5001.jpg'
  },
  {
    title: 'Collaboration',
    description: 'We work together to achieve extraordinary results',
    icon: '',
    image: 'https://img.freepik.com/free-vector/team-goals-concept-illustration_114360-5143.jpg'
  },
  {
    title: 'Integrity',
    description: 'We conduct business with honesty and transparency',
    icon: '',
    image: 'https://img.freepik.com/free-vector/business-ethics-concept-illustration_114360-6636.jpg'
  }
];

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://img.freepik.com/free-photo/business-woman-with-tablet_1098-2835.jpg',
    bio: 'With over 15 years of experience in technology and business leadership, Sarah leads our company vision and strategy.'
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    image: 'https://img.freepik.com/free-photo/man-working-laptop_1098-20732.jpg',
    bio: 'Michael brings extensive expertise in software architecture and emerging technologies to drive our technical innovation.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Design Director',
    image: 'https://img.freepik.com/free-photo/creative-designer-working-studio_1098-18195.jpg',
    bio: 'Emily leads our design team in creating beautiful and intuitive user experiences that delight our clients.'
  },
  {
    name: 'David Kim',
    role: 'Head of Engineering',
    image: 'https://img.freepik.com/free-photo/software-developer-laptop_1098-21634.jpg',
    bio: 'David oversees our engineering teams and ensures the delivery of high-quality software solutions.'
  }
];

const milestones = [
  {
    year: '2013',
    title: 'Company Founded',
    description: 'Started with a vision to transform businesses through technology'
  },
  {
    year: '2015',
    title: 'Global Expansion',
    description: 'Opened offices in major tech hubs around the world'
  },
  {
    year: '2018',
    title: 'Innovation Award',
    description: 'Recognized for breakthrough solutions in AI and cloud computing'
  },
  {
    year: '2021',
    title: 'Industry Leader',
    description: 'Became a leading provider of digital transformation solutions'
  }
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-96 h-screen pb-20 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://img.freepik.com/free-photo/modern-office-building-low-angle-shot_1127-2857.jpg"
            alt="Office Building"
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
              About Webtech
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Empowering businesses with innovative technology solutions since 2013
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-gray-50">
            <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-63452.jpg"
            alt="Abstract Background"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-gray-800 font-bold mb-6">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and help us deliver exceptional results
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-gray-50 rounded-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-6 mb-6">
                  <div className="text-4xl">{value.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
                <img 
                  src={value.image} 
                  alt={value.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://img.freepik.com/free-photo/abstract-luxury-plain-blur-grey-black-gradient-used-as-background-studio-wall-display-your-products_1258-63644.jpg"
            alt="Team Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our talented team of experts is dedicated to delivering innovative solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <div className="text-blue-600 font-medium mb-4">{member.role}</div>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://img.freepik.com/free-photo/abstract-smooth-empty-grey-studio-well-use-as-background-business-report-digital-website-template-backdrop_1258-55969.jpg"
            alt="Timeline Background"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-gray-800 font-bold mb-6">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A decade of innovation and growth in technology
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className="flex gap-8 mb-12 last:mb-0"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-24 flex-shrink-0 flex flex-col items-center">
                  <div className="text-2xl font-bold text-blue-600">{milestone.year}</div>
                  <div className="w-px h-full bg-blue-200 mt-4"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white relative">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-63452.jpg"
            alt="CTA Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-6 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Join Us in Shaping the Future
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Whether you're looking to transform your business or join our team, we'd love to hear from you
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-blue-900 transition-colors">
              View Careers
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
