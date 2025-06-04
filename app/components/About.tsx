import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-muted">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold mb-4"
        >
          About Me
        </motion.h2>
        <p className="text-muted-foreground">
          I'm a passionate frontend developer with experience in React, Next.js, Tailwind CSS, and modern web technologies.
          I love building clean and user-friendly interfaces.
        </p>
      </div>
    </section>
  );
} 