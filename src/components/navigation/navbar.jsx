import React, { useState } from "react";
import { Briefcase, Image, Mail, Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { Icon } from "@iconify/react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram", color: "#E4405F" },
  { icon: FaTiktok, href: "#", label: "TikTok", color: "#000000" },
  { icon: RiTwitterXFill, href: "#", label: "X", color: "#000000" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "#0A66C2" },
  { icon: Facebook, href: "#", label: "Facebook", color: "#1877F2" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      icon: () => (
        <Icon icon="lets-icons:home-duotone" width={24} height={24} />
      ),
      label: "Home",
      path: "/",
    },
    {
      icon: () => <Icon icon="ic:twotone-camera" width="24" height="24" />,
      label: "Portfolio",
      path: "/portfolio",
    },
    {
      icon: () => (
        <Icon icon="solar:gallery-wide-bold-duotone" width={24} height={24} />
      ),
      label: "Gallery",
      path: "/gallery",
    },
    {
      icon: () => <Icon icon="mdi:contacts" width="24" height="24" />,
      label: "Contact",
      path: "/contact",
    },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: 20,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <div className="absolute top-0 w-full py-4 flex px-4 items-center justify-between">
        {/* Logo */}
        <Link to="/" className=" z-50 lg:hidden">
          <motion.h1
            className="text-3xl font-bold text-[var(--color-secondary-300)]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            AL
          </motion.h1>
        </Link>
        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className=" z-50 p-2 rounded-full bg-[var(--color-primary-400)]/10 border border-[var(--color-primary-400)]/10 backdrop-blur-lg lg:hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isMenuOpen ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <X className="w-8 h-8 text-[var(--color-primary-400)]" />
              ) : (
                <Menu className="w-6 h-6 text-[var(--color-primary-400)]" />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="fixed inset-0 z-40 bg-[var(--color-primary-980)] backdrop-blur-lg lg:hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.div
              className="flex flex-col items-start justify-center w-full px-12 h-full"
              variants={menuVariants}
            >
              <div className="flex flex-col  gap-8 mb-12">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    variants={itemVariants}
                    custom={index}
                  >
                    <NavLink
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-4 font-medium transition-all duration-200 relative group ${
                          isActive
                            ? "text-[var(--color-primary-990)] text-2xl"
                            : "text-[var(--color-primary-700)] text-xl hover:text-[var(--color-primary-400)]"
                        }`
                      }
                    >
                      <span className="relative">
                        {typeof item.icon === "function" ? (
                          <item.icon />
                        ) : (
                          React.createElement(item.icon, {
                            size: 24,
                            strokeWidth: 2,
                          })
                        )}
                        <motion.span
                          className="absolute inset-0 bg-[var(--color-primary-400)]/10 rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.3 }}
                        />
                      </span>
                      <span className="relative">
                        {item.label}
                        <motion.span
                          className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-primary-400)] group-hover:w-full"
                          transition={{ duration: 0.3 }}
                        />
                      </span>
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div className="flex gap-4 pt-6" variants={itemVariants}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                  >
                    <motion.div
                      className="w-10 h-10 rounded-full bg-[var(--color-primary-800)]/50 flex items-center justify-center
                        border border-[var(--color-primary-400)]/40 transition-all duration-300
                        group-hover:border-[var(--color-primary-500)]/50"
                    >
                      {React.createElement(social.icon, {
                        size: 26,
                        className:
                          "text-[var(--color-primary-400)] transition-colors duration-300 group-hover:text-[var(--color-primary-100)]",
                      })}
                    </motion.div>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Desktop Navigation */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden lg:block">
        <div className="px-6 py-2 backdrop-blur-lg bg-[var(--color-primary-900)] rounded-full shadow-md border border-[var(--color-primary-990)]">
          <div className="flex items-center justify-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex flex-col items-center transition-all duration-200 ${
                    isActive
                      ? "text-[var(--color-primary-200)]"
                      : "text-[var(--color-primary-400)] hover:text-[var(--color-primary-300)]"
                  }`
                }
              >
                {typeof item.icon === "function" ? (
                  <item.icon />
                ) : (
                  React.createElement(item.icon, { size: 20, strokeWidth: 2 })
                )}
                <span className="text-[10px] mt-1">{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
