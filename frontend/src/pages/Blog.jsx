import { motion } from 'framer-motion';

export default function Blog() {
  const blogPosts = [
    {
      title: 'Designing repEAT: A Specialized Fruit Shopping App 🍇',
      content:
        'repEAT was born from the realization that grocery apps rarely optimize for fruit shoppers. After competitor analysis, I created a calming dual-theme UI focused on curated baskets and clean UX. This blog explores the research, wireframes, and final designs.',
      date: 'April 2025',
    },
    {
      title: 'From Case Study to Prototypes: My UX Process ✍️',
      content:
        'From ideation to usability testing, this post covers how I translated user needs into working Figma prototypes. I defined personas (busy pros, elderly users), minimized friction in navigation, and tested layouts for accessibility.',
      date: 'March 2025',
    },
    {
      title: 'Crafting Audiogram: The Challenge of Audio-Only Social UX 🎙️',
      content:
        'Audiogram pushed me to design a visually minimal yet expressive interface. With no text or image feed, I focused on waveform previews, emoji reactions, and voice replies. This blog dives into creating a new category of audio-first social UX.',
      date: 'February 2025',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
     <div className="max-w-6xl mx-auto p-6 text-white font-mono">
      <h1 className="text-4xl font-bold text-fuchsia-500 mb-10">🧠 Blog Insights</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 shadow-lg hover:shadow-fuchsia-500/40 transition-all"
          >
            <p className="text-sm text-cyan-400 mb-2">{post.date}</p>
            <h2 className="text-xl font-semibold text-fuchsia-400 mb-3">
              {post.title}
            </h2>
            <p className="text-zinc-300 text-sm leading-relaxed">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
    </motion.div>
  );
}
