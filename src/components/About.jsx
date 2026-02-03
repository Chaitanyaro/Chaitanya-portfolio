import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { label: "Projects Completed", value: "15+" },
    { label: "Team Members Led", value: "80+" },
    { label: "Research Works", value: "2" },
    { label: "CAT 2025 Percentile", value: "95.78" },
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
                Strategic Engineering. Global Impact.
              </h2>
              <p className="text-brand-gray text-lg leading-relaxed mb-6">
                As a <strong>Product Solution Engineer</strong> at{" "}
                <strong>Smart Energy Water</strong>, I drive digital
                transformation for the energy and water sectors. My focus lies
                in architecting strategic solutions that address critical
                utility challenges at a global scale.
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
