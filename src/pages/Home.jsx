import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const solutions = [
  {
    title: "AI & Machine Learning",
    description: "Harness the power of artificial intelligence to transform your business operations",
    icon: "🤖",
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "Cloud Solutions",
    description: "Scale your infrastructure with cutting-edge cloud technologies",
    icon: "☁️",
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "Digital Transformation",
    description: "Modernize your business with end-to-end digital solutions",
    icon: "🔄",
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Cybersecurity",
    description: "Protect your assets with advanced security measures",
    icon: "🔒",
    color: "from-red-500 to-rose-600"
  }
];

const insights = [
  {
    title: "The Future of Work",
    category: "Research Report",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    description: "Exploring how AI and automation will reshape the workplace of tomorrow"
  },
  {
    title: "Digital Innovation Trends",
    category: "Industry Analysis",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    description: "Key technology trends driving business transformation in 2025"
  },
  {
    title: "Sustainable Tech",
    category: "Whitepaper",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    description: "How technology is enabling sustainable business practices"
  }
];

const stats = [
  { number: "500+", label: "Enterprise Clients" },
  { number: "50+", label: "Countries" },
  { number: "95%", label: "Client Retention" },
  { number: "24/7", label: "Support" }
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Building on
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"> Innovation</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We help businesses transform through technology, driving innovation and sustainable growth
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="primary" className="text-lg px-8 py-4">
                  Start Your Journey
                </Button>
                <Button variant="outline" className="text-lg px-8 py-4 text-white border-white hover:bg-white/10">
                  Watch Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Solutions that Drive Growth</h2>
            <p className="text-xl text-gray-600">Discover how our expertise can transform your business</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className={`p-8 rounded-2xl bg-gradient-to-br ${solution.color} transform transition-transform group-hover:scale-[1.02]`}>
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                  <p className="text-white/90">{solution.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Latest Insights</h2>
            <p className="text-xl text-gray-600">Stay ahead with our latest research and analysis</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <motion.img
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-full object-cover transform transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-blue-600 font-medium mb-2">{insight.category}</div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                      {insight.title}
                    </h3>
                    <p className="text-gray-600">{insight.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's work together to build innovative solutions that drive your business forward
              </p>
              <Button variant="white" className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-blue-50">
                Schedule a Consultation
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <h3 className="text-white text-lg font-bold mb-4">WebTech</h3>
              <p className="text-sm mb-4">
                Empowering businesses with innovative technology solutions since 2020.
              </p>
              <div className="flex space-x-4">
                {/* Social Media Icons */}
                <a href="#" className="hover:text-white transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Blog</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors duration-200">AI & Machine Learning</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Cloud Solutions</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Digital Transformation</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Cybersecurity</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>123 Tech Street</li>
                <li>Silicon Valley, CA 94025</li>
                <li>contact@webtech.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} WebTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
