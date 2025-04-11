// src/components/portfolio/portfolioDetails.jsx
import React from "react";
import { motion } from "framer-motion";

const portfolioDetails = [
  "Alexon Audax Mulokozi, a Tanzanian-born, is a renowned Ugandan actor, director, acting coach, life coach, photographer, and award-winning performer whose contributions have significantly shaped Uganda's film and television industry. With his athletic build, dark hair, brown eyes, and a signature baritone voice, Alexon captivates audiences, delivering depth and emotional intensity across a wide range of roles.",
  "Alexon is the visionary founder of The Artistry360, a premier acting academy that has nurtured and inspired over 300 individuals. The academy operates on the belief that every individual holds the potential to become a skilled and confident actor. Through its comprehensive training programs, The Artistry360 instills strength, boldness, and confidence, transforming raw talent into polished professionals. Beyond training, The Artistry360 serves as a casting agency, supplying fresh, well-trained talent to the film industry and helping bridge the gap between aspiring actors and production houses.",
  "As an actor, Alexon has an impressive body of work. He is best known for his role as Kaheru in the TV series Sanyu (2021) and as Frank in the movie 24 Hours (2022), a role that earned him the Best Supporting Actor Award at the Pearl International Film Festival. Other notable performances include his appearances in 27 Guns (2018) and False Dreams (2019) as Jonathan, and his role as Marcus Lubogo in the critically acclaimed TV series Beloved (2023-2024).",
  "In addition to his work in acting, Alexon is the founder of Elite Shooters UG, an Events Management Company. His dedication to the arts, both in front of and behind the scenes, has earned him a reputation for excellence. With his passion for acting and unwavering commitment to empowering others through mentorship, Alexon Audax Mulokozi continues to inspire both on-screen and off, leaving a lasting legacy in Uganda's entertainment industry."
];

const PortfolioDetails = () => {
  return (
    <section className="py-20 px-4 bg-[var(--color-primary-960)]">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary-500)]">
            Portfolio
          </h2>
          {portfolioDetails.map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-[var(--color-secondary-100)] text-md md:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioDetails;