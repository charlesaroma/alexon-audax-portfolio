import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Instagram, Facebook, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { FaTiktok } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { Typewriter } from "react-simple-typewriter";
import Pattern from "../../assets/pattern.png";

const images = [
  "https://ik.imagekit.io/ldeismm29/Alexon%20Audax/alexon2.png?updatedAt=1744172763885",
  "https://ik.imagekit.io/ldeismm29/Alexon%20Audax/alexon-audax.JPG?updatedAt=1744172754964",
  "https://ik.imagekit.io/ldeismm29/Alexon%20Audax/alexon-audax-.JPG?updatedAt=1744172754679",
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram", color: "#E4405F" },
  { icon: FaTiktok, href: "#", label: "TikTok", color: "#000000" },
  { icon: RiTwitterXFill, href: "#", label: "X", color: "#000000" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "#0A66C2" },
  { icon: Facebook, href: "#", label: "Facebook", color: "#1877F2" },
];

const transitionDuration = 5;

const HomeHero = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, transitionDuration * 1000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <section className="min-h-screen  grid place-content-evenly md:grid md:grid-cols-1 lg:grid-cols-2 md:items-center relative overflow-hidden">
      {/* Pattern BG  */}
      <div className="absolute opacity-10 h-full w-full bg-[url('https://ik.imagekit.io/ldeismm29/Alexon%20Audax/pattern.png?updatedAt=1744301260230')]"></div>

      {/* Social Icons */}
      <motion.div
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col gap-4 sm:gap-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
            whileHover={{ x: 5 }}
          >
            <motion.div
              className="w-10 h-10 rounded-full bg-[var(--color-primary-900)] flex items-center justify-center border border-[var(--color-primary-990)]/40 transition-all duration-300 group-hover:border-[var(--color-primary-500)]/50"
              whileHover={{ scale: 1.1 }}
            >
              {React.createElement(social.icon, {
                size: 20,
                className:
                  "text-[var(--color-primary-400)] transition-colors duration-300 group-hover:text-[var(--color-primary-100)]",
              })}
            </motion.div>
            <motion.span
              className="absolute left-12 text-sm text-[var(--color-primary-500)]/0 whitespace-nowrap transition-all duration-300 group-hover:text-[var(--color-primary-500)]"
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
            >
              {social.label}
            </motion.span>
          </motion.a>
        ))}
      </motion.div>

      {/* Image Carousel */}
      <div
        className="order-1 relative overflow-hidden w-full lg:h-screen flex items-center justify-center px-4 sm:px-6 md:px-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-full max-w-2xl h-[400px] sm:h-[500px] md:h-[60vh] lg:h-[85vh] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.img
                src={images[current]}
                className="w-full h-full object-contain"
                alt={`Alexon Audax - Image ${current + 1}`}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-4 left-0 right-0 z-30 hidden">
          <div className="flex justify-center gap-1 py-2 backdrop-blur-sm">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-12 h-1 rounded-full transition-all duration-500 ${
                  current === index
                    ? "bg-[var(--color-primary-400)]"
                    : "bg-[var(--color-primary-400)]/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <motion.div
        className="order-2 items-start md:items-center px-4 sm:px-6 md:py-0 md:px-8 lg:px-12 z-10 mt-0 pb-6  sm:mt-4 md:mt-0"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="max-w-xl flex flex-col items-center justify-center mx-auto lg:mx-0 lg:items-start">
          <motion.h1
            className="text-3xl text-center md:text-start sm:text-4xl md:text-5xl lg:text-6xl font-medium font-[Montserrat] text-[var(--color-primary-400)] mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Alexon Audax Mulokozi
          </motion.h1>

          <motion.p
            className="text-lg text-center md:text-start sm:text-xl md:text-2xl text-[var(--color-secondary-200)] mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Typewriter
              words={["Actor", "Director", "Acting Coach", "Photographer"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 sm:gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              to="/portfolio"
              className="h-10 sm:h-12 md:h-14 lg:h-10 inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[var(--color-primary-400)] text-[var(--color-primary-900)] rounded-lg font-medium text-normal sm:text-md md:text-2xl lg:text-lg hover:bg-[var(--color-primary-300)] transition-all duration-300 hover:scale-105"
            >
              View Portfolio
            </Link>
            <Link
              to="/contact"
              className="h-10 sm:h-12 md:h-14 lg:h-10 inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-[var(--color-secondary-200)] text-[var(--color-secondary-200)] rounded-lg font-medium text-normal sm:text-md md:text-2xl lg:text-lg hover:bg-[var(--color-secondary-100)]/30 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeHero;
