"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, PlayCircle } from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import Chatbot from "@/components/Chatbot";
import SkillChart from "@/components/SkillChart";
import ThreeBackground from "@/components/ThreeBackground";

const navItems = ["Home", "About", "Skills", "Projects", "Demos", "Stats", "Experience", "Contact"];

const skillWords = ["AI Systems", "IoT Intelligence", "Full Stack Apps", "Cloud Workflows", "Automation Engines"];

const projects = [
  {
    title: "SmartAssist",
    description: "Hybrid AI assistant using local LLM + Gemini API for reliable intelligent conversations.",
    tech: ["Next.js", "Gemini API", "Ollama", "FastAPI"],
    demo: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    title: "PetCareAI",
    description: "AI-powered system to monitor pet health signals and provide actionable smart recommendations.",
    tech: ["Python", "ML", "IoT Sensors", "Node.js"],
    demo: "https://www.youtube.com/embed/tgbNymZ7vqY"
  },
  {
    title: "AI Resume & Cover Letter Generator",
    description: "Generates recruiter-friendly resumes and cover letters in seconds with adaptive prompts.",
    tech: ["React", "OpenAI API", "Tailwind"],
    demo: "https://www.youtube.com/embed/oUFJJNQGwhk"
  },
  {
    title: "Virtual Herbal Garden",
    description: "Interactive AYUSH educational platform for medicinal plants, use-cases, and visual learning.",
    tech: ["React", "Three.js", "Node.js"],
    demo: "https://www.youtube.com/embed/ysz5S6PUM-U"
  },
  {
    title: "Live Machine Monitoring System",
    description: "IoT dashboard for real-time industrial machine monitoring and predictive alerts.",
    tech: ["Raspberry Pi", "Arduino", "MQTT", "Cloud"],
    demo: "https://www.youtube.com/embed/jNQXAC9IVRw"
  }
];

export default function Home() {
  const [idx, setIdx] = useState(0);
  const [char, setChar] = useState(0);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [modalVideo, setModalVideo] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setChar((c) => {
        const current = skillWords[idx];
        if (c >= current.length) {
          setTimeout(() => {
            setIdx((v) => (v + 1) % skillWords.length);
            setChar(0);
          }, 1000);
          return c;
        }
        return c + 1;
      });
    }, 120);
    return () => clearTimeout(t);
  }, [char, idx]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const typed = useMemo(() => skillWords[idx].slice(0, char), [idx, char]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <main className="relative overflow-x-hidden">
      <ThreeBackground />
      <div className="custom-cursor hidden md:block" style={{ left: cursor.x, top: cursor.y }} />

      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.3, delay: 1 }}
        className="pointer-events-none fixed inset-0 z-[70] flex items-center justify-center bg-bg"
      >
        <p className="animate-pulse text-2xl font-semibold tracking-[0.2em] text-cyan-300">INITIALIZING AI PORTFOLIO</p>
      </motion.div>

      <nav className="glass fixed left-1/2 top-4 z-40 w-[92%] max-w-5xl -translate-x-1/2 rounded-full px-6 py-3">
        <ul className="flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="transition hover:text-cyan-300">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section id="home" className="mx-auto flex min-h-screen max-w-6xl items-center px-6 pt-36">
        <div className="space-y-7">
          <p className="text-cyan-300">Computer Science Student • AI Developer</p>
          <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
            Kapleshwar
            <span className="block text-2xl text-slate-300 md:text-3xl">AI Developer | IoT Engineer | Full Stack Developer</span>
          </h1>
          <p className="max-w-2xl text-lg text-slate-300">
            "Building intelligent systems that solve real-world problems."
          </p>
          <p className="h-8 text-xl">
            <span className="gradient-text">{typed}</span>
            <span className="animate-pulse">|</span>
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="rounded-full bg-cyan-400 px-6 py-3 font-medium text-slate-950 hover:bg-cyan-300">
              View Projects
            </a>
            <a href="#contact" className="glass rounded-full px-6 py-3 hover:border-cyan-300/80">
              Contact Me
            </a>
            <a href="#" className="glass rounded-full px-6 py-3 hover:border-cyan-300/80">
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="section-title gradient-text">About & Journey</h2>
        <p className="mt-5 max-w-3xl text-slate-300">
          I am a Computer Science student deeply passionate about Artificial Intelligence, IoT and embedded systems,
          Cloud Computing, startup innovation, and intelligent automation platforms that improve real-world outcomes.
        </p>
        <div className="timeline-line relative mt-10 space-y-6 pl-10">
          {[
            "Started core programming and DSA journey",
            "Built early automation + IoT prototypes",
            "Developed AI-powered full stack products",
            "Shipped real-time machine monitoring systems"
          ].map((item) => (
            <div key={item} className="glass relative rounded-xl p-4 before:absolute before:-left-[35px] before:top-5 before:h-3 before:w-3 before:rounded-full before:bg-cyan-300">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="section-title gradient-text">Interactive Skills Graph</h2>
        <div className="glass mt-8 h-[480px] rounded-3xl p-5 md:p-10">
          <SkillChart />
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="section-title gradient-text">Featured Projects</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              whileHover={{ rotateX: 5, rotateY: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="glass rounded-2xl p-5"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 aspect-video overflow-hidden rounded-xl border border-white/10">
                <iframe src={project.demo} title={project.title} className="h-full w-full" allowFullScreen />
              </div>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <a href="#" className="glass rounded-full px-4 py-2 hover:border-cyan-300">GitHub</a>
                <a href="#" className="rounded-full bg-indigo-500/80 px-4 py-2 hover:bg-indigo-400">Live Demo</a>
                <button onClick={() => setModalVideo(project.demo)} className="flex items-center gap-1 rounded-full bg-cyan-500/80 px-4 py-2 hover:bg-cyan-400">
                  Watch <PlayCircle size={15} />
                </button>
              </div>
              <p className="mt-2 text-xs text-slate-400">Project #{i + 1}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="demos" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="section-title gradient-text">Project Demo Videos</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project) => (
            <button
              key={project.title}
              onClick={() => setModalVideo(project.demo)}
              className="glass group rounded-2xl p-4 text-left transition hover:scale-[1.02]"
            >
              <p className="font-medium">{project.title}</p>
              <p className="text-sm text-slate-400">Click to open modal preview</p>
              <div className="mt-2 flex items-center gap-1 text-cyan-300 opacity-80 transition group-hover:translate-x-1">
                Play demo <ArrowRight size={14} />
              </div>
            </button>
          ))}
        </div>
      </section>

      <section id="stats" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="section-title gradient-text">GitHub Activity & Stats</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            ["Total Repositories", "58+"],
            ["Commits", "3,240+"],
            ["Open Source PRs", "140+"],
            ["Coding Streak", "290 days"]
          ].map(([k, v]) => (
            <div key={k} className="glass rounded-2xl p-5 text-center">
              <p className="text-sm text-slate-400">{k}</p>
              <p className="mt-2 text-2xl font-semibold text-cyan-300">{v}</p>
            </div>
          ))}
        </div>
        <div className="glass mt-5 rounded-2xl p-6">
          <p className="mb-2 text-sm text-slate-300">Contribution Heatmap (visual placeholder)</p>
          <div className="grid gap-1" style={{ gridTemplateColumns: "repeat(24, minmax(0, 1fr))" }}>
            {Array.from({ length: 240 }).map((_, i) => (
              <div
                key={i}
                className="h-3 rounded-sm"
                style={{ backgroundColor: `rgba(45,212,191,${0.08 + (i % 5) * 0.15})` }}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="section-title gradient-text">Experience & Achievements</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            "Built and shipped multiple AI + IoT production-grade projects",
            "Participated in national-level hackathons and innovation challenges",
            "Completed technical certifications in ML, Cloud, and Web Engineering",
            "Contributed to open-source tools and developer communities",
            "Research and prototyping in intelligent automation systems"
          ].map((item) => (
            <motion.div key={item} whileHover={{ y: -4 }} className="glass rounded-xl p-4 text-slate-200">
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="section-title gradient-text">Let&apos;s Build the Future Together</h2>
        <form onSubmit={onSubmit} className="glass mt-8 space-y-3 rounded-3xl p-6">
          <input placeholder="Name" className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3" required />
          <input type="email" placeholder="Email" className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3" required />
          <textarea placeholder="Tell me about your project" className="h-36 w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3" required />
          <button className="rounded-full bg-cyan-400 px-6 py-3 font-medium text-slate-900 hover:bg-cyan-300">Send Message</button>
          {sent && <p className="text-sm text-emerald-300">✅ Message sent successfully! I&apos;ll respond soon.</p>}
          <div className="flex flex-wrap gap-4 pt-2 text-sm text-slate-300">
            <a href="mailto:kapleshwar.ai.dev@gmail.com" className="flex items-center gap-1 hover:text-cyan-300"><Mail size={15} /> Email</a>
            <a href="#" className="flex items-center gap-1 hover:text-cyan-300"><Linkedin size={15} /> LinkedIn</a>
            <a href="#" className="flex items-center gap-1 hover:text-cyan-300"><Github size={15} /> GitHub</a>
          </div>
        </form>
      </section>

      {modalVideo && (
        <div className="fixed inset-0 z-[65] flex items-center justify-center bg-black/80 p-4" onClick={() => setModalVideo(null)}>
          <div className="w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-slate-950" onClick={(e) => e.stopPropagation()}>
            <iframe src={modalVideo} title="Demo video" className="aspect-video w-full" allowFullScreen />
          </div>
        </div>
      )}

      <Chatbot />
    </main>
  );
}
