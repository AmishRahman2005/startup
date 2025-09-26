import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 w-14 h-14 rounded-full bg-white/10 dark:bg-slate-800/80 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 flex items-center justify-center group hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {theme === 'dark' ? (
          <Sun className="w-6 h-6 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
        ) : (
          <Moon className="w-6 h-6 text-slate-600 group-hover:text-slate-500 transition-colors" />
        )}
      </motion.div>
    </motion.button>
  );
};