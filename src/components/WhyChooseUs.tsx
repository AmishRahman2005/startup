import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Users, Award } from 'lucide-react';

export const WhyChooseUs = () => {
  const benefits = [
  {
    icon: CheckCircle,
    title: 'Reliable Solutions',
    description: 'We focus on building practical, high-quality products tailored to your specific needs.'
  },
  {
    icon: TrendingUp,
    title: 'Growth-Oriented',
    description: 'Designed to help startups and businesses scale efficiently and achieve long-term success.'
  },
  {
    icon: Users,
    title: 'Dedicated Team',
    description: 'Work with passionate developers and innovators committed to turning ideas into reality.'
  },
  {
    icon: Award,
    title: 'Recognized Quality',
    description: 'Our approach is appreciated by clients for its attention to detail, creativity, and usability.'
  }
];


  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-800 relative overflow-hidden transition-colors duration-500">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5 dark:opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm border border-green-500/20 dark:border-blue-500/30 rounded-full px-6 py-3 mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <Award className="w-4 h-4 text-green-600 dark:text-blue-400" />
              <span className="text-green-700 dark:text-blue-300 text-sm font-medium">Why Choose Us</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
              The Smart Choice for{' '}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
                Modern Businesses
              </span>
            </h2>

            <p className="text-xl text-slate-600 dark:text-gray-300 mb-12 leading-relaxed">
              We don't just build products – we craft experiences that transform businesses and delight users. 
              Here's why thousands of companies trust us with their most important projects.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 group"
                  >
                    <motion.div 
                      className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotateY: 180 }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div 
              className="card-gradient p-12 rounded-3xl shadow-2xl backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 card-3d"
              whileHover={{ 
                rotateY: 10,
                rotateX: 5,
                scale: 1.02
              }}
              transition={{ duration: 0.5 }}
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: 'Startup Ideas Generated', value: '120+', color: 'from-blue-500 to-purple-500' },
  { label: 'Roadmaps Created', value: '85+', color: 'from-green-500 to-teal-500' },
  { label: 'AI Models Integrated', value: '10+', color: 'from-orange-500 to-red-500' },
  { label: 'Active Users', value: '200+', color: 'from-purple-500 to-pink-500' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div 
                      className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                      animate={{ 
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                      style={{ backgroundSize: '200% 200%' }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-slate-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Central Icon */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Award className="w-10 h-10 text-white" />
              </motion.div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div 
              className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <TrendingUp className="w-6 h-6 text-white" />
            </motion.div>

            <motion.div 
              className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg"
              animate={{ 
                y: [0, 15, 0],
                rotate: [360, 180, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <Users className="w-5 h-5 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};