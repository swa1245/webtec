import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-transparent" />
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "linear-gradient(to right, rgba(14,165,233,0.2), transparent)",
                "linear-gradient(to right, rgba(3,105,161,0.2), transparent)",
                "linear-gradient(to right, rgba(14,165,233,0.2), transparent)"
              ]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>
        
        <div className="container relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Setting Benchmarks for the Future
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Pioneering innovative solutions in software development and digital transformation
            </p>
            <button className="btn btn-primary">
              Get Started
            </button>
          </motion.div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Driving Innovation Through Technology
              </h2>
              <p className="text-gray-600 mb-6">
                At Webtech Developers, we're passionate about creating cutting-edge solutions
                that help businesses thrive in the digital age. Our expertise spans across:
              </p>
              <ul className="space-y-4">
                {[
                  'Innovative Software Solutions',
                  'Productivity Tools Development',
                  'Mobile App Development',
                  'Enterprise Software Integration'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 text-gray-700"
                  >
                    <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="aspect-square rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700"
              >
                <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl rounded-2xl transform -rotate-6" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
