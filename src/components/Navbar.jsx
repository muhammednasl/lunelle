import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Locations", href: "#locations" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact Us", href: "#contact" },
];

import {
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF9F6] text-[#3F4B3C]">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">

        {/* Logo */}
        <a href="#home" onClick={() => setIsOpen(false)}>
          <img
            src="/lunelle.png"
            alt="Cafe Lunelle"
            className="h-20 w-auto object-contain sm:h-24"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-body text-sm font-medium tracking-wide transition-colors duration-300 hover:text-[#7C8B73]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 text-[#3F4B3C] transition hover:text-[#7C8B73] md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={27} /> : <Menu size={27} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 top-[80px] z-40 flex h-[calc(100dvh-80px)] flex-col items-center justify-center gap-8 bg-[#FAF9F6] md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-heading text-2xl font-medium text-[#3F4B3C] transition-colors hover:text-[#7C8B73]"
            >
              {link.name}
            </a>
          ))}

{/* Mobile Social Media */}
<div className="mt-6 text-center">
  <p className="mb-5 font-body text-xs font-semibold uppercase tracking-[0.25em] text-[#7C8B73]">
    Follow Us
  </p>

  <div className="flex items-center justify-center gap-5">
    <a
      href="https://www.instagram.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-[#7C8B73]/40 text-[#3F4B3C] transition hover:bg-[#D9AAA7] hover:text-white"
    >
      <FaInstagram size={20} />
    </a>

    <a
      href="https://www.facebook.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-[#7C8B73]/40 text-[#3F4B3C] transition hover:bg-[#D9AAA7] hover:text-white"
    >
      <FaFacebookF size={18} />
    </a>
  </div>
</div>

        </div>
      )}
    </header>
  );
}
