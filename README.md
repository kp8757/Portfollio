# Kapleshwar — Premium AI Portfolio

A modern, high-end personal portfolio website for **Kapleshwar** (Computer Science student, AI developer, IoT engineer, full stack developer), built with a startup-grade visual style inspired by Apple/Vercel/Stripe aesthetics.

## Tech Stack

- **Next.js 14** + **React 18**
- **TypeScript**
- **Tailwind CSS** (dark futuristic + glassmorphism styling)
- **Framer Motion** (micro-interactions, transitions, reveal animations)
- **Three.js** (animated AI particle background)
- **Chart.js** + `react-chartjs-2` (interactive skills radar graph)
- **OpenAI Chat API** integration for the portfolio assistant

## Implemented Sections

- Hero section with animated typing effect
- Floating navigation bar with smooth scrolling
- About section + visual timeline
- Interactive skills graph
- Animated project cards with embedded demo previews
- Dedicated demo videos section with modal player
- Floating AI chatbot (client UI + backend route)
- GitHub stats/heatmap style section
- Experience & achievements section
- Contact form with success interaction feedback
- Loading overlay and custom cursor effects

## Project Structure

```bash
app/
  api/chat/route.ts      # Chat endpoint (OpenAI + fallback)
  globals.css            # Theme, glassmorphism, cursor, shared styles
  layout.tsx             # Root layout + metadata
  page.tsx               # Main one-page portfolio UI
components/
  Chatbot.tsx            # Floating chatbot widget
  SkillChart.tsx         # Chart.js radar component
  ThreeBackground.tsx    # Three.js animated background
```

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Create `.env.local`:

```bash
OPENAI_API_KEY=your_openai_api_key_here
```

If `OPENAI_API_KEY` is not provided, chatbot replies gracefully using built-in fallback responses.

### 3) Run dev server

```bash
npm run dev
```

Open: `http://localhost:3000`

### 4) Production build

```bash
npm run build
npm run start
```

## Customization Checklist

- Replace placeholder GitHub / LinkedIn / live demo links in `app/page.tsx`
- Replace demo video embed URLs with real project videos
- Add your actual resume PDF and wire the download CTA
- Optionally connect real GitHub metrics APIs for live stats
- Expand chatbot context in `app/api/chat/route.ts` for richer answers

## Notes

- The UI is fully responsive and designed for mobile, tablet, and desktop.
- All animation-heavy elements are intentionally optimized for a premium visual feel.
- For best production security, route OpenAI access through server-side controls only (already done via API route).

## License

This project is for personal portfolio use and can be adapted for custom branding.
