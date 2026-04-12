import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "Executive & Media Member",
      company: "Training & Placement Cell, GNDEC",
      period: "Mar 2024 – Present",
      description:
        "Driving campus recruitment operations and stakeholder coordination.",
    },
    {
      role: "Convenor",
      company: "English Club, GNDEC",
      period: "Mar 2024 – Present",
      description:
        "Led 9+ events with 50+ participants each, improving engagement across students and faculty",
    },
    {
      role: "Hospitality Team Lead",
      company: "Cultural Committee, GNDEC",
      period: "Mar 2023 – Present",
      description:
        "Managed hospitality operations for large-scale multi-day festivals",
    },
    {
      role: "Local Organization President",
      company: "JCI Ludhiana Business Forum",
      period: "2024 – Present",
      description:
        "Led a team of 25+ members across business and community initiatives",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl mb-16 text-brand-black"
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border-b border-gray-100 pb-12 last:border-0"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
                <h3 className="text-xl md:text-2xl font-serif font-medium text-brand-black group-hover:text-brand-gray transition-colors">
                  {exp.role}
                </h3>
                <span className="text-sm font-medium text-brand-gray mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>

              <div className="text-brand-black/60 font-medium mb-4">
                {exp.company}
              </div>

              <p className="text-brand-gray leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
