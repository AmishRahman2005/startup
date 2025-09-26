import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Roadmap = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Load roadmap from state OR localStorage fallback
  const initialRoadmap = location.state?.roadmap || localStorage.getItem("roadmap") || "";
  const [roadmap, setRoadmap] = useState(initialRoadmap);

  useEffect(() => {
    if (!initialRoadmap) {
      navigate('/'); // redirect if there's really no roadmap
    } else {
      // ✅ Keep roadmap in localStorage so page refresh still works
      localStorage.setItem("roadmap", initialRoadmap);
      setRoadmap(initialRoadmap);
    }
  }, [initialRoadmap, navigate]);

  if (!roadmap) {
    return (
      <div className="text-center mt-20 text-gray-500 dark:text-gray-300">
        Loading roadmap...
      </div>
    );
  }

  // Split into markdown-like sections by headers
  const sections = roadmap.split(/#{1,6}\s(.*)/).filter(Boolean);

  return (
    <div className="space-y-8 max-w-4xl mx-auto px-4 py-10">
      {sections.map((section: string, index: number) => {
        if (index % 2 === 0) {
          const title = section.trim();
          const content = sections[index + 1] || '';
          const items = content.split('- ').filter((item: string) => item.trim() !== '');

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg shadow-md bg-white dark:bg-slate-800"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {title}
              </h3>
              <ul className="space-y-2">
                {items.map((item: string, itemIndex: number) => (
                  <li key={itemIndex} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-600 dark:text-gray-300">
                      {item.trim()}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Roadmap;