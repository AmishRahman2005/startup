import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/ThemeProvider';
import { MouseFollower } from '@/components/MouseFollower';
import { Toaster } from '@/components/ui/sonner';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import IdeaInputForm from '@/components/IdeaInputForm';
import { Footer } from '@/components/Footer';
import Roadmap from '@/components/Roadmap';
import './App.css';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-slate-900 overflow-x-hidden transition-colors duration-500">
          <MouseFollower />
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Features />
                <WhyChooseUs />
                <IdeaInputForm />
                <Footer />
              </>
            } />
            <Route path="/roadmap" element={<Roadmap />} />
          </Routes>
          <Toaster />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
