import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

export function Experience() {
  const experiences: ExperienceItem[] = [
    {
      title: "Senior 3D Designer",
      company: "Creative Design Studio",
      period: "2022 - Present",
      description: "Lead the 3D design team in creating immersive user experiences. Developed interactive web-based 3D visualizations for major clients in technology and retail sectors."
    },
    {
      title: "UI/UX Designer",
      company: "Digital Innovations",
      period: "2020 - 2022",
      description: "Designed user interfaces for web and mobile applications. Created wireframes, prototypes, and final designs. Collaborated with development teams to implement responsive and accessible designs."
    },
    {
      title: "Web Developer",
      company: "Tech Solutions Inc.",
      period: "2018 - 2020",
      description: "Developed and maintained websites and web applications using modern frontend technologies. Implemented responsive designs and ensured cross-browser compatibility."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400"
        >
          Professional Experience
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-4 mb-12"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="bg-blue-500 rounded-full p-2 text-white">
                  <Briefcase size={20} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  {exp.title}
                </h3>
                <div className="flex items-center gap-2 mt-1 mb-3">
                  <span className="text-zinc-700 dark:text-zinc-300">
                    {exp.company}
                  </span>
                  <span className="text-zinc-400">•</span>
                  <span className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 text-sm">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
