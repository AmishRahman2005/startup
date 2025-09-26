import { motion } from 'framer-motion';
import { AnimatedCard } from '@/components/AnimatedCard';
import { Search, Users, Map, Zap, TrendingUp, Target } from 'lucide-react';

export const FeaturesSection = () => {
  const features = [
    {
      icon: Search,
      title: 'Market Research',
      description: 'Deep dive into market size, trends, and opportunities with AI-powered analysis of your target market.',
      gradient: 'from-blue-500 to-cyan-500',
      delay: 0.1
    },
    {
      icon: Users,
      title: 'Competitor Analysis',
      description: 'Identify key competitors, analyze their strengths and weaknesses, and find your competitive advantage.',
      gradient: 'from-purple-500 to-pink-500',
      delay: 0.2
    },
    {
      icon: Map,
      title: 'AI Roadmap',
      description: 'Get a detailed step-by-step roadmap with milestones, timelines, and actionable next steps.',
      gradient: 'from-green-500 to-teal-500',
      delay: 0.3
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-500">
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
              Validate Ideas
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive suite of AI-powered tools helps you make data-driven decisions about your startup ideas.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: feature.delay }}
                viewport={{ once: true }}
              >
                <AnimatedCard className="group h-full bg-white/70 dark:bg-slate-800/50 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 p-8 rounded-3xl hover:shadow-2xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/20 transition-all duration-500 hover:border-purple-500/30">
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
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-lg">
                        {feature.description}
                      </p>
                    </div>

                    {/* Hover Effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={false}
                    />
                  </div>
                </AnimatedCard>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-8 text-slate-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <span>Market Insights</span>
            </div>
            <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              <span>Actionable Data</span>
            </div>
            <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span>AI-Powered</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};