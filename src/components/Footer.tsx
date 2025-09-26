import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  // Replaced footerLinks with a single About Me section
  const footerLinks = [
    {
      title: 'About Me',
      links: [
        'Hi, I’m Amish Rahman, a developer passionate about AI and helping startups turn ideas into actionable roadmaps. I build intuitive AI tools that simplify strategy, planning, and execution, empowering founders to bring their visions to life. I enjoy exploring generative AI, automation, and cutting-edge technologies to create practical solutions that make innovation accessible for everyone.'
      ]
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/AmishRahman2005', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/amish-rahman-2k25/', label: 'LinkedIn', color: 'hover:text-blue-600' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'amishrahmanind@gmail.com' },
    { icon: MapPin, text: 'India' }
  ];

  return (
    <footer id="contact" className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200/50 dark:border-slate-800/50 relative transition-colors duration-500">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 dark:from-purple-900/5 dark:to-blue-900/5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div 
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center gap-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center overflow-hidden"
                whileHover={{ 
                  rotateY: 180,
                  scale: 1.1
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Replaced SF text with an image */}
                <img 
                  src="/logo.png" // Replace with your image path
                  alt="StartupForge Logo" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <span className="text-2xl font-bold text-slate-900 dark:text-white">StartupForge</span>
            </motion.div>

            <p className="text-slate-600 dark:text-gray-400 text-lg mb-6 max-w-md">
              Transform your ideas into reality with our cutting-edge platform. Join thousands of innovators building tomorrow's solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 group"
                  >
                    <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm">{contact.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <h3 className="text-slate-900 dark:text-white font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.p 
                      className="text-slate-600 dark:text-gray-400 text-base leading-relaxed"
                    >
                      {link}
                    </motion.p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Links Section */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="text-slate-900 dark:text-white font-semibold text-lg mb-6">Follow Me For Updates</h4>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-12 h-12 bg-slate-200 dark:bg-slate-800 rounded-xl flex items-center justify-center transition-all duration-300 group ${social.color}`}
                  whileHover={{ 
                    scale: 1.2,
                    rotateY: 15,
                    rotateX: 15
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconComponent className="w-6 h-6 text-slate-600 dark:text-gray-400 transition-colors duration-200" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-slate-200/50 dark:border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-500 dark:text-gray-400 text-sm">
            © 2025 StartupForge. All rights reserved.
          </p>
          <motion.p 
            className="text-slate-500 dark:text-gray-400 text-sm"
            whileHover={{ scale: 1.05 }}
          >
            Built with ❤️ for innovators and dreamers
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};
