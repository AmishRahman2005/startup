import { motion } from 'framer-motion';
import { Zap, Shield, Rocket, Globe } from 'lucide-react';

export const Features = () => {
  const features = [
  {
    icon: Zap,
    title: 'Instant Roadmaps',
    description: 'Generate complete, structured business roadmaps instantly, saving hours of manual planning.',
    gradient: 'from-yellow-500 to-orange-500',
    delay: 0.1
  },
  {
    icon: Shield,
    title: 'Confidential Ideas',
    description: 'Keep your startup ideas safe with secure storage and strict confidentiality standards.',
    gradient: 'from-green-500 to-teal-500',
    delay: 0.2
  },
  {
    icon: Rocket,
    title: 'Growth Strategies',
    description: 'Receive actionable strategies tailored for scaling your startup efficiently and effectively.',
    gradient: 'from-blue-500 to-purple-500',
    delay: 0.3
  },
  {
    icon: Globe,
    title: 'Market Intelligence',
    description: 'Get insights on trends, competitors, and opportunities across different regions and industries.',
    gradient: 'from-purple-500 to-pink-500',
    delay: 0.4
  }
];


  return (
    <section id="features" className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-500">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-teal-50/50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-teal-950/20"></div>
      
      {/* Floating Orbs */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
        animate={{ 
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 dark:border-purple-500/30 rounded-full px-6 py-3 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Zap className="w-4 h-4 text-blue-600 dark:text-purple-400" />
            </motion.div>
            <span className="text-blue-700 dark:text-purple-300 text-sm font-medium">Powerful Features</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive suite of tools and features helps you build, scale, and optimize your business with confidence.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: feature.delay }}
                viewport={{ once: true }}
                className="animate-fade-in-up"
              >
                <motion.div 
                  className="card-gradient group h-full p-8 rounded-3xl hover:shadow-2xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/20 transition-all duration-500 hover:border-purple-500/30 card-3d"
                  whileHover={{ 
                    y: -10,
                    rotateX: 5,
                    rotateY: 5,
                    scale: 1.02
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-6">
                    {/* Icon */}
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ 
                        rotateY: 180,
                        scale: 1.1
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="w-full h-full text-white" />
                    </motion.div>
                    
                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Hover Effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={false}
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};