import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <motion.div
      
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto p-6 text-white font-mono space-y-10">
      {/* Hero / Intro */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-lg">
        <h1 className="text-4xl font-bold text-fuchsia-500 mb-2">Hey, I'm Anuj 👋</h1>
        <p className="text-zinc-400 text-sm mb-4">
          A 3rd-year Computer Science student @ MANIT-Bhopal — frontend developer, UI/UX designer, and full-stack builder.
        </p>

        <div className="text-sm text-left bg-[#1e1e1e] text-white font-mono rounded-md p-4 border border-zinc-700 overflow-x-auto">
  <pre className="whitespace-pre-wrap leading-relaxed">
    <code>
      <span className="text-[#569CD6]">const</span> <span className="text-[#9CDCFE]">aboutMe</span> <span className="text-white">=</span> <span className="text-white">&#123;</span><br />
      &nbsp;&nbsp;<span className="text-[#DCDCAA]">name</span>: <span className="text-[#CE9178]">"Anuj Madhoria"</span>,<br />
      &nbsp;&nbsp;<span className="text-[#DCDCAA]">role</span>: <span className="text-[#CE9178]">"Full-Stack Developer"</span>,<br />
      &nbsp;&nbsp;<span className="text-[#DCDCAA]">techStack</span>: <span className="text-white">[</span><span className="text-[#CE9178]">"React"</span>, <span className="text-[#CE9178]">"Tailwind"</span>, <span className="text-[#CE9178]">"MongoDB"</span>, <span className="text-[#CE9178]">"Node.js"</span><span className="text-white">]</span>,<br />
      &nbsp;&nbsp;<span className="text-[#DCDCAA]">tools</span>: <span className="text-white">[</span><span className="text-[#CE9178]">"Figma"</span>, <span className="text-[#CE9178]">"Framer Motion"</span>, <span className="text-[#CE9178]">"VS Code"</span><span className="text-white">]</span>,<br />
      &nbsp;&nbsp;<span className="text-[#DCDCAA]">interests</span>: <span className="text-white">[</span><span className="text-[#CE9178]">"Design Systems"</span>, <span className="text-[#CE9178]">"Product UX"</span>, <span className="text-[#CE9178]">"DSA"</span><span className="text-white">]</span><br />
      <span className="text-white">&#125;;</span>
    </code>
  </pre>
</div>

      </div>

      {/* Highlights */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-zinc-900 border border-fuchsia-500/30 p-4 rounded-lg hover:scale-[1.02] transition">
          <h2 className="text-lg font-semibold text-cyan-300 mb-2">💡 Highlight</h2>
          <p className="text-sm text-zinc-400">
            Winner of BIS National Hackathon 2024–25. Designed award-winning UI + built responsive frontend.
          </p>
        </div>

        <div className="bg-zinc-900 border border-cyan-500/30 p-4 rounded-lg hover:scale-[1.02] transition">
          <h2 className="text-lg font-semibold text-cyan-300 mb-2">📦 Projects</h2>
          <p className="text-sm text-zinc-400">
            Built FeedFlow (social media app), CodePen clone, and repEAT (e-comm UI) from scratch.
          </p>
        </div>

        <div className="bg-zinc-900 border border-purple-500/30 p-4 rounded-lg hover:scale-[1.02] transition">
          <h2 className="text-lg font-semibold text-cyan-300 mb-2">🧠 Learning</h2>
          <p className="text-sm text-zinc-400">
            Currently exploring real-time apps, WebSockets, and clean UI micro-interactions using Framer Motion.
          </p>
        </div>
      </div>

      {/* Call to Actions */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-6">
        <Link to="/cv">
          <button className="bg-fuchsia-500 hover:bg-fuchsia-700 text-white px-6 py-2 rounded-full font-bold shadow-lg">
            📄 View Resume
          </button>
        </Link>
        <Link to="/ui/ux">
          <button className="bg-cyan-500 hover:bg-cyan-700 text-black px-6 py-2 rounded-full font-bold shadow-lg">
            🖌️ UI/UX Case Studies
          </button>
        </Link>
        <Link to="/blog">
          <button className="bg-purple-500 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-bold shadow-lg">
            📝 Read Blog
          </button>
        </Link>
      </div>
    </div>
    </motion.div>
  );
}
