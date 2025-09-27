const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');
const path = require('path');

// Load environment variables immediately
dotenv.config();

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

const geminiApiKey = process.env.GEMINI_API_KEY;

if (!geminiApiKey) {
    console.error('Error: GEMINI_API_KEY is not set in the .env file.');
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(geminiApiKey);
const textModel = genAI.getGenerativeModel({ model: "gemini-2.5-flash-preview-05-20" });
const imageModel = genAI.getGenerativeModel({ model: "gemini-2.5-flash-image-preview" });

// API endpoint for generating a roadmap
app.post('/api/generate-roadmap', async (req, res) => {
    const { prompt: idea } = req.body;

    if (!idea) {
        return res.status(400).json({ error: 'Missing startup idea.' });
    }

    const systemPrompt = `You are an expert AI business consultant. Your task is to generate a comprehensive, actionable business roadmap for a startup based on the user's idea. The roadmap should be highly detailed and professional.
    The roadmap must be structured with the following key sections, using Markdown for clear formatting:
    
    ## 🗺️ Strategic Roadmap for a New Venture
    
    ### Phase 1: Idea & Market Validation
    - **Market Research & Analysis:** Identify the target audience, market size, and growth trends.
    - **Competitive Insights:** Analyze direct and indirect competitors, highlighting their strengths and weaknesses.
    - **Problem-Solution Fit:** Define the core problem your startup solves and how your solution uniquely addresses it.
    
    ### Phase 2: Product & Technology Development
    - **Minimum Viable Product (MVP):** Outline the essential features of your initial product.
    - **AI Integration Strategy:** Detail how Gemini API will be used (e.g., personalized recommendations, content generation, data analysis).
    - **Development Roadmap:** Provide a timeline for key development milestones.
    
    ### Phase 3: Go-to-Market Strategy
    - **Branding & Marketing:** Define your brand identity, messaging, and initial marketing channels.
    - **Sales & Distribution:** Outline how you will acquire your first customers.
    - **Launch Plan:** Describe the steps for a successful product launch.
    
    ### Phase 4: Growth & Scaling
    - **Key Performance Indicators (KPIs):** Identify the metrics to track your success.
    - **Funding & Financial Milestones:** Suggest potential funding rounds and financial goals.
    - **Team Expansion:** Advise on the key roles to hire as the company grows.
    
    Ensure your response is helpful, concise, and professional.`;

    try {
        const result = await textModel.generateContent({
            contents: [{ parts: [{ text: idea }] }],
            systemInstruction: { parts: [{ text: systemPrompt }] },
        });
        const text = result.response.text();
        res.json({ roadmap: text });
    } catch (error) {
        console.error('Error with Gemini API:', error);
        res.status(500).json({ error: 'An error occurred with the Gemini API.' });
    }
});

// API endpoint for generating a visual roadmap
app.post('/generate-visual', async (req, res) => {
    const { roadmapText } = req.body;

    if (!roadmapText) {
        return res.status(400).json({ error: 'Missing roadmap text for visual generation.' });
    }

    const imagePrompt = `Create a visually appealing, infographic-style illustration of a business roadmap. The roadmap should represent the following phases and concepts: ${roadmapText}`;

    try {
        const result = await imageModel.generateContent({
            contents: [{ parts: [{ text: imagePrompt }] }],
            generationConfig: {
                responseModalities: ['TEXT', 'IMAGE']
            },
        });

        const base64Data = result.response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
        if (base64Data) {
            res.json({ image: base64Data });
        } else {
            res.status(500).json({ error: 'Image generation failed. No image data received.' });
        }
    } catch (error) {
        console.error('Error generating image:', error);
        res.status(500).json({ error: 'An error occurred with the image generation API.' });
    }
});

// NEW: API endpoint for the subscribe form
app.post('/subscribe', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required.' });
    }

    const filePath = path.join(__dirname, 'subscribers.txt');

    try {
        fs.appendFileSync(filePath, `${email}\n`);
        res.status(200).json({ message: 'Subscription successful!' });
    } catch (error) {
        console.error('Error writing to file:', error);
        res.status(500).json({ error: 'Failed to subscribe.' });
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
