// src/components/portfolio/portfolioDetails.jsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const achievements = [
  {
    year: "2021-Present",
    title: "The Artistry360",
    role: "Founder & Lead Coach",
    description: "Founded premier acting academy nurturing over 300 aspiring actors. Transformed raw talent into polished professionals through comprehensive training programs.",
    highlight: "Bridging the gap between aspiring actors and production houses"
  },
  {
    year: "2023-2024",
    title: "Beloved",
    role: "Marcus Lubogo",
    description: "Starring role in the critically acclaimed TV series, showcasing versatility and depth in character portrayal.",
    highlight: "Lead Character Performance"
  },
  {
    year: "2022",
    title: "24 Hours",
    role: "Frank",
    description: "Award-winning performance that earned Best Supporting Actor at the Pearl International Film Festival.",
    highlight: "Best Supporting Actor Award"
  },
  {
    year: "2021",
    title: "Sanyu",
    role: "Kaheru",
    description: "Breakthrough role in popular TV series that established widespread recognition.",
    highlight: "Notable Television Performance"
  }
];

const skills = [
  "Method Acting", "Voice Acting", "Character Development",
  "Stage Performance", "Screen Acting", "Acting Coach",
  "Photography", "Direction", "Event Management"
];

const PortfolioDetails = () => {
  return (
    <section className="py-20 px-4 bg-[var(--color-primary-960)]">
      <div className="max-w-6xl mx-auto">
        {/* Introduction */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-primary-500)] mb-6">
            Journey Through Excellence
          </h2>
          <p className="text-[var(--color-secondary-100)] text-lg md:text-xl max-w-3xl mx-auto">
            Alexon Audax Mulokozi, a Tanzanian-born visionary, reshaping Uganda's entertainment landscape through performance, education, and innovation.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-[var(--color-primary-500)]/30 md:before:mx-auto md:before:left-0 md:before:right-0">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex items-center w-full md:w-1/2">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-primary-960)] border-2 border-[var(--color-primary-500)] z-10 md:mx-auto group-hover:bg-[var(--color-primary-500)] transition-colors duration-300">
                  <ArrowRight className="w-4 h-4 text-[var(--color-primary-500)] group-hover:text-[var(--color-primary-960)]" />
                </div>
                <div className="flex-1 ml-4 md:ml-0 md:px-8">
                  <div className="p-4 bg-[var(--color-primary-980)]/50 rounded-lg border border-[var(--color-primary-900)]/20 group-hover:border-[var(--color-primary-500)]/50 transition-all duration-300">
                    <span className="text-sm text-[var(--color-primary-500)]">{achievement.year}</span>
                    <h3 className="text-xl font-bold text-[var(--color-primary-400)] mt-2">{achievement.title}</h3>
                    <p className="text-[var(--color-secondary-200)] font-medium">{achievement.role}</p>
                    <p className="text-[var(--color-secondary-100)] mt-2">{achievement.description}</p>
                    <span className="inline-block mt-3 text-sm font-medium text-[var(--color-primary-500)]">{achievement.highlight}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-primary-500)] mb-8 text-center">
            Areas of Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="p-4 bg-[var(--color-primary-980)]/50 rounded-lg border border-[var(--color-primary-900)]/20 hover:border-[var(--color-primary-500)]/50 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-[var(--color-secondary-100)] text-center font-medium">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioDetails;