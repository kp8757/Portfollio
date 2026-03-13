import { NextResponse } from "next/server";

const context = `You are a portfolio AI assistant for Kapleshwar, a Computer Science student and AI developer.
Core highlights:
- Roles: AI Developer, IoT Engineer, Full Stack Developer
- Key projects: SmartAssist, PetCareAI, AI Resume Generator, Virtual Herbal Garden, Live Machine Monitoring System
- Skills: C++, Python, JavaScript, SQL, React, Node.js, FastAPI, ML, IoT, Cloud, Arduino, Raspberry Pi, GitHub, Docker
- Contact: kapleshwar.ai.dev@gmail.com`;

export async function POST(req: Request) {
  const { message } = (await req.json()) as { message?: string };

  if (!message) {
    return NextResponse.json({ reply: "Please ask a question." }, { status: 400 });
  }

  const key = process.env.OPENAI_API_KEY;

  if (!key) {
    return NextResponse.json({
      reply:
        "Kapleshwar focuses on AI + IoT innovation with projects like SmartAssist and Live Machine Monitoring. For collaboration, contact: kapleshwar.ai.dev@gmail.com"
    });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: context },
          { role: "user", content: message }
        ],
        temperature: 0.4
      })
    });

    const data = (await response.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    const reply = data.choices?.[0]?.message?.content ?? "I can help you explore this portfolio.";
    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({
      reply: "I can guide you through Kapleshwar's projects and skills. Contact: kapleshwar.ai.dev@gmail.com"
    });
  }
}
