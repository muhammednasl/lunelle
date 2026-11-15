
import {
    MapPin,
    Phone,
    Mail,
    ArrowUpRight,
  } from "lucide-react";
  
  import {
    FaInstagram,
    FaFacebookF,
  } from "react-icons/fa";

  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Our Menu", href: "/#menu" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Locations", href: "/locations" },
  ];
  
  export default function Footer() {
    return (
      <footer
        id="contact"
        className="bg-[#3F4B3C] px-5 pb-6 pt-16 text-[#FAF9F6] sm:px-8 lg:px-12 lg:pt-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 border-b border-white/20 pb-14 text-center sm:grid-cols-2 lg:grid-cols-4 lg:text-left">
  
            {/* Brand */}
            <div>
              <img
                src="/lunelle.png"
                alt="Cafe Lunelle"
                className="mx-auto mb-5 h-20 w-auto object-contain lg:mx-0"
              />
  
              <p className="mx-auto max-w-xs font-body text-sm leading-7 text-white/70 lg:mx-0">
                A place where beautiful flavours, warm moments and
                unforgettable experiences come together.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="mb-6 font-heading text-2xl">Quick Links</h3>
  
              <ul className="space-y-4">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="font-body text-sm text-white/70 transition hover:text-[#D9AAA7]"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Contact */}
            <div>
              <h3 className="mb-6 font-heading text-2xl">Contact Us</h3>
  
              <div className="space-y-5">
                <p className="flex flex-col items-center gap-2 font-body text-sm text-white/70 lg:flex-row">
                  <MapPin size={17} className="text-[#D9AAA7]" />
                  Add your restaurant address
                </p>
  
                <p className="flex flex-col items-center gap-2 font-body text-sm text-white/70 lg:flex-row">
                  <Phone size={17} className="text-[#D9AAA7]" />
                  Add your contact number
                </p>
  
                <p className="flex flex-col items-center gap-2 font-body text-sm text-white/70 lg:flex-row">
                  <Mail size={17} className="text-[#D9AAA7]" />
                  Add your email address
                </p>
              </div>
            </div>
  
            {/* Social Media */}

{/* Social Media */}
<div>
  <h3 className="mb-6 font-heading text-2xl">
    Follow Us
  </h3>

  <p className="mb-6 font-body text-sm leading-7 text-white/70">
    Stay connected with Cafe Lunelle.
  </p>

  <div className="flex justify-center gap-4 lg:justify-start">

    <a
      href="https://www.instagram.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:border-[#D9AAA7] hover:bg-[#D9AAA7] hover:text-[#3F4B3C]"
    >
      <FaInstagram size={19} />
    </a>

    <a
      href="https://www.facebook.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:border-[#D9AAA7] hover:bg-[#D9AAA7] hover:text-[#3F4B3C]"
    >
      <FaFacebookF size={18} />
    </a>


  </div>
</div>

          
          </div>
  
          {/* Copyright */}
          <div className="flex flex-col items-center justify-between gap-4 pt-7 text-center sm:flex-row">
            <p className="font-body text-xs text-white/60">
              © {new Date().getFullYear()} Cafe Lunelle. All rights reserved.
            </p>
  
            <a
              href="#home"
              className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-widest text-white/70 transition hover:text-[#D9AAA7]"
            >
              Back to Top
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </footer>
    );
  }
  