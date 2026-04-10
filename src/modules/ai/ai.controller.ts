import { Request, Response } from 'express';
import { AIService } from './ai.service.js';

export const AIController = {
  chat: async (req: Request, res: Response) => {
    try {
      const { messages } = req.body;
      const apiKey = process.env.OPENROUTER_API_KEY;

      if (!apiKey) {
        return res.status(500).json({
          success: false,
          message: "OpenRouter API Key not configured"
        });
      }

      // RAG: 1. Generate embedding for the latest query
      const lastUserMessage = messages[messages.length - 1]?.content;
      let context = "";
      
      if (lastUserMessage) {
        try {
          const queryEmbedding = await AIService.getEmbedding(lastUserMessage);
          context = await AIService.retrieveContext(queryEmbedding);
        } catch (e) {
          console.warn("RAG Context Retrieval Failed, proceeding without context:", e);
        }
      }

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "HTTP-Referer": process.env.APP_URL || "http://localhost:3000",
          "X-Title": "SkillBridge Learning Assistant",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "google/gemini-2.0-flash-001",
          messages: [
            {
              role: "system",
              content: `
        You are the "SkillBridge Smart Matching AI". Your primary mission is to help students find their "Perfect Match" tutor.
        
        RULES:
        1. Contextual Intelligence: Use the Real Tutor Profiles provided in the context below.
        2. No Placeholders: Never use [Tutor Name] or similar brackets.
        3. Link Format: For each tutor, display their profile URL on a new line at the end of their section.
           URL Format: ${process.env.APP_URL || 'http://localhost:3000'}/tutors/{ID}
        4. No Repetition: Do not include the link inside the recommendation note text.
        5. Empty Context Handling: If the "Current Context" below says "No tutors found", explain kindly that we couldn't find exact matches for their specific criteria. Suggest they try browsing the full marketplace or adjusting their search. Use a helpful, encouraging tone.

        Structure your response as follows:
        - A brief intro.
        - 1. **Tutor Name** (Price/hr) - The recommendation note.
        - ${process.env.APP_URL || 'http://localhost:3000'}/tutors/{ID}
        - (Repeat for top 3 tutors)

        Current Context from Database:
        ${context ? context : 'No tutors found.'}`
            },
            ...messages
          ]
        })
      });

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error.message || "OpenRouter API Error");
      }

      res.status(200).json({
        success: true,
        data: data.choices[0].message
      });
    } catch (error: any) {
      console.error("AI Chat Error:", error);
      res.status(500).json({
        success: false,
        message: error.message || "Failed to process AI request"
      });
    }
  },

  generateRoadmap: async (req: Request, res: Response) => {
    try {
      const { goal, level, tutorId } = req.body;
      const apiKey = process.env.OPENROUTER_API_KEY;

      if (!apiKey) {
        return res.status(500).json({ success: false, message: "OpenRouter API Key not configured" });
      }

      let tutorContext = "";
      if (tutorId) {
        tutorContext = await AIService.getTutorContext(tutorId);
      }

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "HTTP-Referer": process.env.APP_URL || "http://localhost:3000",
          "X-Title": "SkillBridge Roadmap Generator",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "google/gemini-2.0-flash-001",
          response_format: { type: "json_object" },
          messages: [
            {
              role: "system",
              content: `
              You are the "SkillBridge Roadmap Genius". 
              Your job is to create a highly professional, 4-week learning roadmap.
              
              Input:
              - Student Goal: ${goal}
              - Experience Level: ${level}
              - Tutor Context: ${tutorContext || "Generic roadmap needed"}

              Output MUST be a JSON object with the following structure:
              {
                "title": "A catchy title for the roadmap",
                "overview": "A brief summary of what will be achieved",
                "phases": [
                  {
                    "week": 1,
                    "title": "Phase Title",
                    "objectives": ["Obj 1", "Obj 2"],
                    "tutorSessions": "What to focus on during sessions with the tutor"
                  },
                  ... (continue for 4 weeks)
                ],
                "milestoneProject": "A specific project description",
                "recommendedResources": ["Resource Name - Brief Description"]
              }
              `
            },
            {
              role: "user",
              content: `Plan for: ${goal}`
            }
          ]
        })
      });

      const data = await response.json();
      const roadmap = JSON.parse(data.choices[0].message.content);

      res.status(200).json({
        success: true,
        data: roadmap
      });
    } catch (error: any) {
      console.error("Roadmap Generation Error:", error);
      res.status(500).json({
        success: false,
        message: error.message || "Failed to generate roadmap"
      });
    }
  }
};
