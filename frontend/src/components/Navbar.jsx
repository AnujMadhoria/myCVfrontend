import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "CV", "UI/UX", "Blog", "Contact"];

  return (
    <nav className="bg-zinc-900 text-cyan-300 px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wider">Anuj.dev</h1>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-cyan-300 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="hover:text-fuchsia-500 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col mt-4 gap-4 md:hidden">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="block hover:text-fuchsia-500 transition"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
