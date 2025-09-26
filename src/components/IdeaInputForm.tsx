import React, { useState } from 'react';
import { marked } from 'marked';
import html2pdf from 'html2pdf.js';
import { motion, AnimatePresence } from 'framer-motion';

const IdeaInputForm: React.FC = () => {
  const [startupIdea, setStartupIdea] = useState<string>('');
  const [roadmap, setRoadmap] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const parseMarkdown = (text: string) => ({
    __html: text ? String(marked.parse(text)) : ''
  });

  const handleGenerateRoadmap = async () => {
    if (!startupIdea.trim()) {
      alert('Please enter your startup idea.');
      return;
    }

    setRoadmap('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/generate-roadmap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: startupIdea
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log("Gemini API Response:", data);

      const generatedText =
        data?.roadmap ||
        "⚠️ No roadmap generated. Try again.";

      setRoadmap(generatedText);
    } catch (error: any) {
      console.error('Error generating roadmap:', error);
      setRoadmap(
        `❌ Error occurred while generating the roadmap. Please try again.\n\nDetails: ${
          error?.message || error
        }`
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleExportPDF = () => {
    const roadmapElement = document.getElementById('roadmap-output');
    if (!roadmapElement) return;

    const options = {
      margin: 1,
      filename: 'startup_roadmap.pdf',
      image: { type: "jpeg" as "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: "portrait" as "portrait" },
    };

    html2pdf().set(options).from(roadmapElement).save();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 px-4">
      <motion.section
        className="text-center py-20 max-w-4xl w-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-4">
          Turn Your Idea Into a Strategic Roadmap
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
          Describe your startup idea and get an AI-generated roadmap with market analysis, competitive insights, and step-by-step execution plan.
        </p>
      </motion.section>

      <motion.section
        className="w-full max-w-3xl mb-12 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="card-gradient p-6 sm:p-8 rounded-3xl shadow-lg border w-full">
          <label
            htmlFor="startup-idea"
            className="flex items-center text-sm font-medium text-gray-400 mb-4"
          >
            <span className="bg-gray-800 text-purple-400 rounded-full w-6 h-6 flex items-center justify-center mr-2">
              💡
            </span>
            Describe Your Startup Idea
          </label>
          <textarea
            id="startup-idea"
            rows={6}
            className="w-full p-4 text-sm bg-gray-900 text-white rounded-xl resize-none outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 placeholder-gray-500"
            placeholder="e.g., A mobile app that uses AI to help people discover and book unique local experiences..."
            value={startupIdea}
            onChange={(e) => setStartupIdea(e.target.value)}
            disabled={isLoading}
            maxLength={2000}
          />
          <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
            <span>{startupIdea.length}/2000 characters</span>
            <span>Be detailed for better insights</span>
          </div>
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleGenerateRoadmap}
              disabled={isLoading}
              className="btn-hero px-12 py-4 rounded-xl text-lg font-semibold flex items-center justify-center transition-all duration-300"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3 text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth={4}
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Generating...
                </div>
              ) : (
                <>
                  Generate AI Roadmap <span className="ml-2">✨</span>
                </>
              )}
            </button>
          </div>
        </div>
      </motion.section>

      <AnimatePresence>
        {roadmap && (
          <motion.section
            key="roadmap-output"
            className="w-full max-w-3xl mb-12 flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            <div
              id="roadmap-output"
              className="bg-gray-800 p-6 sm:p-8 rounded-3xl shadow-xl border w-full"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4 text-center">
                Your Strategic Roadmap
              </h2>
              <div
                className="prose prose-invert max-w-none text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={parseMarkdown(roadmap)}
              ></div>
              <div className="mt-8 flex justify-center">
                <button
                  onClick={handleExportPDF}
                  className="btn-hero px-8 py-3 rounded-xl text-lg font-semibold flex items-center justify-center transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                >
                  Export as PDF
                </button>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IdeaInputForm;
