import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    try {
      await axios.post('http://localhost:5000/api/contact', form);
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      alert("Failed to send message. Try again.");
    }
    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-xl mx-auto text-white font-mono"
    >
      <h2 className="text-4xl font-bold text-cyan-300 mb-6">Contact Me 💬</h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Name"
          className="w-full p-3 rounded bg-zinc-800 text-white"
          required
        />
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
          className="w-full p-3 rounded bg-zinc-800 text-white"
          required
        />
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Message"
          className="w-full p-3 rounded bg-zinc-800 text-white"
          rows="5"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-full font-bold transition-all ${
            loading
              ? 'bg-zinc-700 cursor-not-allowed'
              : 'bg-fuchsia-500 hover:bg-fuchsia-700'
          }`}
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin" />
              Sending...
            </div>
          ) : (
            'Send'
          )}
        </button>
      </form>

      {/* Success Message */}
      {success && (
        <div className="mt-4 text-green-400 text-sm text-center animate-pulse">
          ✅ Message sent successfully!
        </div>
      )}
    </motion.div>
  );
}
