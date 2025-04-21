import { motion } from 'framer-motion';

export default function Cv() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
     
    >
      <div className="max-w-6xl mx-auto px-6 py-10 text-white font-mono">
      <div className="md:flex gap-10">
        {/* Sidebar */}
        <aside className="md:w-1/3 mb-10 md:mb-0">
          <img
            src="WhatsApp Image 2025-03-26 at 2.18.34 PM (1).jpeg"
            alt="Anuj Madhoria"
            className="rounded-xl mb-4 shadow-lg"
          />
          <h1 className="text-2xl font-bold text-fuchsia-500">Anuj Madhoria</h1>
          <p className="text-sm text-zinc-400">Full-Stack Developer | UI/UX Designer</p>
          <div className="mt-4 space-y-1 text-sm">
            <p>📧 <span className="text-cyan-400">anujmadhoria0105@gmail.com</span></p>
            <p>📍 Bhopal, India</p>
            
            <p>🌐 <a className="text-fuchsia-400" href="https://github.com/AnujMadhoria">GitHub</a></p>
            <p>🔗 <a className="text-fuchsia-400" href="https://linkedin.com/in/anuj-madhoria-b22b731a2">LinkedIn</a></p>
            <p>🔗 <a className="text-fuchsia-400" href="https://leetcode.com/u/anujmadhoria/">Leetcode</a></p>
          </div>
        </aside>

        {/* Main */}
        <main className="md:w-2/3 space-y-10">
          {/* About */}
          <section>
            <h2 className="text-xl font-bold text-cyan-400 mb-2">## About Me</h2>
            <p className="text-zinc-300 text-sm">
              Results-driven CS undergrad at MANIT Bhopal with a passion for clean design and scalable development.
              Specialized in full-stack web apps and intuitive UI systems. I love turning ideas into reality through code and design.
            </p>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-xl font-bold text-cyan-400 mb-2">## Tech Stack</h2>
            <div className="flex flex-wrap gap-2 text-sm">
              {[
                ['C++', 'https://en.cppreference.com/'],
                ['Python', 'https://docs.python.org/3/'],
                ['HTML5', 'https://developer.mozilla.org/en-US/docs/Web/HTML'],
                ['CSS3', 'https://developer.mozilla.org/en-US/docs/Web/CSS'],
                ['Tailwind', 'https://tailwindcss.com/docs'],
                ['React', 'https://reactjs.org/docs/getting-started.html'],
                ['Node.js', 'https://nodejs.org/en/docs'],
                ['Express.js', 'https://expressjs.com/'],
                ['MongoDB', 'https://www.mongodb.com/docs/'],
                ['Figma', 'https://www.figma.com/resources/learn-design/'],
                ['Framer Motion', 'https://www.framer.com/motion/'],
              ].map(([tech, link]) => (
                <a
                  key={tech}
                  href={link}
                  target="_blank"
                  className="bg-zinc-800 px-3 py-1 rounded-full hover:bg-fuchsia-600"
                >
                  {tech}
                </a>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-xl font-bold text-cyan-400 mb-4">## Projects</h2>

            {/* FeedFlow */}
            <div className="mb-6">
              <h3 className="text-lg text-fuchsia-400 font-semibold">🔗 FeedFlow – Social Media Platform</h3>
              <p className="text-zinc-400 text-sm mb-1">
                A full-stack social media app with authentication, real-time interactions, and profile-driven content.
              </p>
              <ul className="list-disc list-inside text-zinc-500 text-sm ml-4">
                <li>Built JWT-based login system with session handling using cookies</li>
                <li>MongoDB schema for posts, users, and chats with Express.js API</li>
                <li>Integrated Tailwind UI with responsive animations</li>
                <li>Real-time messaging & voice features (Audiogram branch)</li>
              </ul>
            </div>

            {/* CodePen Clone */}
            <div className="mb-6">
              <h3 className="text-lg text-fuchsia-400 font-semibold">💻 CodePen Clone</h3>
              <p className="text-zinc-400 text-sm mb-1">
                A real-time code editor using React where users write HTML, CSS, and JS and see live output.
              </p>
              <ul className="list-disc list-inside text-zinc-500 text-sm ml-4">
                <li>Used localStorage + useEffect for live state saving</li>
                <li>Responsive layout with grid resizing and code color syntax</li>
                <li>Optimized React rendering to prevent unnecessary rerenders</li>
              </ul>
            </div>

            {/* repEAT */}
            <div>
              <h3 className="text-lg text-fuchsia-400 font-semibold">🍇 repEAT – Fruit Basket E-Commerce (UI/UX)</h3>
              <p className="text-zinc-400 text-sm mb-1">
                Designed a dual-theme shopping app focusing on fruits, built in Figma with usability testing.
              </p>
              <ul className="list-disc list-inside text-zinc-500 text-sm ml-4">
                <li>Case study approach: Competitive + use-case analysis</li>
                <li>Accessibility-focused layouts (WCAG-friendly)</li>
                <li>Component-based design system with reusable templates</li>
              </ul>
            </div>
          </section>

          {/* Achievements */}
          <section>
            <h2 className="text-xl font-bold text-cyan-400 mb-2">## Achievements</h2>
            <ul className="list-disc list-inside text-zinc-300 text-sm ml-4">
              <li>🥇 Winner - BIS Hackathon 2024-25 (UI + Frontend)</li>
              <li>💡 Built innovative UX for national-level judging panel</li>
              <li>🔥 Solved 150+ LeetCode challenges</li>
            </ul>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-xl font-bold text-cyan-400 mb-2">## Education</h2>
            <ul className="list-disc list-inside text-zinc-300 text-sm ml-4">
              <li>B.Tech, CSE @ MANIT Bhopal – 2022–2026 (Expected)</li>
              <li>12th – KV No.2, Kota – 81%</li>
              <li>10th – KV No.2, Kota – 76%</li>
            </ul>
          </section>

          {/* Download CV */}
          <div className="mt-10">
            <a
              href="/anuj_cse_2.pdf"
              download
              className="bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-5 py-2 rounded-full font-bold text-black hover:scale-105 transition"
            >
              ⬇️ Download Full CV (PDF)
            </a>
          </div>
        </main>
      </div>
    </div>
    </motion.div>
  );
}
