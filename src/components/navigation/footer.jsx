import React from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Mail } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/alexonaudax?igsh=MXVienczeHg1a2JyZQ==", 
      label: "Instagram",
      color: "#E4405F"
    },
    { 
      icon: FaTiktok, 
      href: "https://www.tiktok.com/@alexonaudax256?_t=ZM-8vRmuQhtMGL&_r=1", 
      label: "TikTok",
      color: "#000000"
    },
    { 
      icon: RiTwitterXFill, 
      href: "https://x.com/lex_dax?t=pf9i9zBC95xKnQLrMb7EMg&s=09", 
      label: "X",
      color: "#000000"
    },
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/share/1HT4LMNGuc/", 
      label: "Facebook",
      color: "#1877F2"
    },
    { 
      icon: Mail, 
      href: "mailto:contact@alexonaudax.com", 
      label: "Email",
      color: "#EA4335"
    },
  ];

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { label: "Home", path: "/" },
        { label: "Portfolio", path: "/portfolio" },
        { label: "Gallery", path: "/gallery" },
        { label: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", path: "/privacy" },
        { label: "Terms of Service", path: "/terms" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[var(--color-primary-980)] border-t border-[var(--color-primary-900)]">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-primary-950)] opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl font-bold text-[var(--color-primary-400)] mb-4">Alexon Audax</h2>
            <p className="text-[var(--color-secondary-200)]/70 mb-6 max-w-md">
              A Tanzanian-born Ugandan actor, director, and founder of The Artistry360. 
              Award-winning performer known for roles in Sanyu, 24 Hours, and Beloved.
            </p>
          </motion.div>

          {/* Quick Links */}
          {footerLinks.map((section, index) => (
            <motion.div 
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-[var(--color-primary-400)] font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      to={link.path}
                      className="text-[var(--color-secondary-200)]/70 hover:text-[var(--color-primary-400)] transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-[var(--color-primary-900)]"
        >
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary-900)]/50 flex items-center justify-center
                    border border-[var(--color-primary-400)]/20 transition-all duration-300
                    group-hover:border-[var(--color-primary-400)]/50 group-hover:bg-[var(--color-primary-900)]"
                  >
                    {React.createElement(social.icon, {
                      size: 20,
                      className: "text-[var(--color-primary-400)] transition-colors duration-300 group-hover:text-[var(--color-primary-200)]",
                    })}
                  </div>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-[var(--color-primary-400)]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
            
            <p className="text-[var(--color-primary-400)]/60 text-sm">
              © {new Date().getFullYear()} Alexon Audax Mulokozi. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
