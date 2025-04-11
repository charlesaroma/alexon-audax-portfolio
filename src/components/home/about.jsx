import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 px-4 bg-[var(--color-primary-960)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-500)]">
              About Alexon
            </h2>
            <p className="text-[var(--color-secondary-100)] text-md md:text-lg leading-relaxed">
              A Tanzanian-born Ugandan actor whose contributions have
              significantly shaped Uganda's film and television industry. With
              his athletic build, dark hair, brown eyes, and signature baritone
              voice, Alexon captivates audiences with depth and emotional
              intensity across a wide range of roles.
            </p>
            <p className="text-[var(--color-secondary-100)] text-md md:text-lg leading-relaxed">
              His journey in the entertainment industry spans over a decade,
              marked by numerous acclaimed performances and a commitment to
              nurturing the next generation of talent through his acting
              workshops and mentorship programs.
            </p>
          </motion.div>
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-md mx-auto"
          >
            {/* Image container */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-xl border border-[var(--color-secondary-200)]/40">
              <motion.img
                src="https://ik.imagekit.io/ldeismm29/Alexon%20Audax/alexon-audax-.JPG?updatedAt=1744172754679"
                alt="Alexon Audax"
                className="w-full h-full object-contain scale-x-[-1]"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--color-secondary-200)]/40 rounded-tl-xl"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--color-secondary-200)]/40 rounded-br-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
