import { motion } from 'framer-motion';

export default function UiUx() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
       <div className="max-w-5xl mx-auto p-6 text-white font-mono">
      <h1 className="text-4xl font-bold text-fuchsia-500 mb-8">🎨 UI/UX Portfolio</h1>

      {/* repEAT Section */}
      <section className="mb-12">
        <h2 className="text-2xl text-cyan-300 font-semibold mb-4"> MY Designs</h2>
        <p className="text-zinc-400 mb-4">
          There is showcase of some of the refined Ui designs built by me .
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <img src="/WhatsApp Image 2025-04-20 at 5.50.49 PM.jpeg" className="rounded-lg shadow-lg" />
          <img src="/WhatsApp Image 2025-04-20 at 5.50.50 PM.jpeg" className="rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Audiogram Section */}
      <section>
      <h2 className="text-2xl text-cyan-300 font-semibold mb-4">🍓 repEAT – Fruit Grocery App</h2>
        <p className="text-zinc-400 mb-4">
          A fruit-focused grocery shopping experience built with user-friendly navigation, clean layouts, and personalized suggestions.
        </p>
        <video
          src="/WhatsApp Video 2025-04-20 at 5.51.58 PM.mp4"
          controls
          className="w-full rounded-lg shadow-lg"
        />
        <p className="text-sm text-zinc-500 mt-2 italic">Prototype walkthrough with feed, profile, and DM view.</p>
      </section>
    </div>
    </motion.div>
  );
}
