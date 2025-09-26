export const generateStartupRoadmap = async (idea: string, systemPrompt: string, userQuery: string): Promise<string> => {
  try {
    const response = await fetch('http://localhost:3001/generate-roadmap', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idea, systemPrompt, userQuery }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to fetch roadmap from backend.');
    }

    const data = await response.json();
    return data.roadmap;
  } catch (error) {
    console.error('Error generating roadmap:', error);
    throw new Error('Failed to generate roadmap. Please ensure the backend server is running on port 3001 and try again.');
  }
};
