import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { label: "Projects & Initiatives Led", value: "15+" },
    { label: "Team Members Led", value: "100+" },
    { label: "Research Works", value: "2" },
  ];

  return (
    <section id="about" className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT: Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Image Container with Style */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-gray-200">
              <img
                src="/profile.jpg"
                alt="Prakhar Srivastava"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
              />
              {/* Decorative Border/Frame */}
              <div className="absolute inset-0 border border-black/10"></div>
            </div>
          </motion.div>

          {/* RIGHT: Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl mb-6 text-brand-black">
                Structured Thinking. Real-World Impact.
              </h2>
              <p className="text-brand-gray text-lg leading-relaxed mb-6">
                As a final-year Computer Science student, I bring together leadership, analytical thinking, and problem-solving to tackle real-world challenges.

From coordinating with 30+ corporate stakeholders to leading teams of 100+ members across multiple initiatives, I have consistently worked in high-responsibility environments where execution and clarity matter.

I’m particularly interested in Product and Business Analyst roles, where I can:

Break down complex problems
Work with data to derive insights
Build structured, scalable solutions

I focus on clarity over complexity, impact over activity, and outcomes over effort.
              </p>
              <p className="text-brand-gray text-lg leading-relaxed">
                I bridge the gap between complex technical capabilities and
                business value, ensuring that every system I build delivers
                measurable impact. Whether optimizing operations or integrating
                AI, I approach every challenge with a focus on scalability,
                efficiency, and long-term strategic growth.
              </p>
            </motion.div>

            {/* Stats / Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-4 border-t border-brand-black/10"
            >
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="font-serif text-4xl font-medium text-brand-black mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-brand-gray uppercase tracking-widest font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
