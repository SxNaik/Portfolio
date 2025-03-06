import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';
import { ProjectModal } from './ProjectModal';

interface Project {
  title: string;
  description: string;
  image: string; 
  longDescription?: string;
  features?: string[];
  technologies: string[];
  links: {
    github?: string;
    live?: string;
  };
}

export function Projects3D() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeProjectModal = () => {
    setModalOpen(false);
  };

  const projects: Project[] = [
    {
      title: "3D Interactive Dashboard",
      description: "A dynamic dashboard with 3D interactive elements and data visualization components",
      longDescription: "This innovative dashboard combines sleek design with powerful data visualization to transform complex information into intuitive, interactive 3D elements. Users can interact with data points, rotate charts, and explore multi-dimensional datasets in a visually appealing way that makes understanding complex information easier than ever.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80",
      technologies: ["React", "Three.js", "D3.js", "WebGL"],
      features: [
        "Interactive 3D data visualization components",
        "Real-time data updates with smooth transitions",
        "Customizable views and perspectives",
        "Cross-platform compatibility with responsive design",
        "Dark/light mode support"
      ],
      links: {
        github: "https://github.com",
        live: "https://example.com"
      }
    },
    {
      title: "Immersive Product Showcase",
      description: "A 3D product visualization tool allowing users to interact with products in a virtual space",
      longDescription: "This 3D product showcase revolutionizes how products are presented online by creating an immersive virtual showroom experience. Users can interact with products from any angle, zoom in to see fine details, and even test different configurations or customizations in real-time, all within their browser or mobile device.",
      image: "https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?auto=format&fit=crop&q=80",
      technologies: ["WebGL", "GLSL", "JavaScript", "Blender"],
      features: [
        "360° product rotation and interaction",
        "Realistic lighting and materials",
        "Product configuration options in real-time",
        "Cross-device compatibility",
        "High-performance rendering optimizations"
      ],
      links: {
        github: "https://github.com",
        live: "https://example.com"
      }
    },
    {
      title: "Architectural Visualization",
      description: "3D architectural visualization platform for interior and exterior design previews",
      longDescription: "This architectural visualization platform helps designers and clients visualize spaces before they're built. It creates photorealistic 3D renderings of interior and exterior spaces with accurate lighting, materials, and spatial relationships. The interactive elements allow users to modify designs in real-time, experiment with different finishes, and explore spaces from any perspective.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80",
      technologies: ["Three.js", "React", "Blender", "GSAP"],
      features: [
        "Photorealistic rendering with accurate lighting",
        "Interactive walkthroughs of 3D spaces",
        "Material and texture customization",
        "Time-of-day lighting simulation",
        "VR-compatible viewing options"
      ],
      links: {
        github: "https://github.com",
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-zinc-50 dark:bg-zinc-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={cn(
            "text-3xl md:text-4xl font-bold text-center mb-16",
            "bg-clip-text text-transparent",
            "bg-gradient-to-r from-zinc-900 to-zinc-600",
            "dark:from-zinc-100 dark:to-zinc-400"
          )}
        >
          3D Design Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03, 
                rotateY: 5,
                z: 50,
              }}
              className="group relative bg-white dark:bg-zinc-900 rounded-xl shadow-lg overflow-hidden cursor-pointer"
              style={{ 
                transformStyle: 'preserve-3d',
                perspective: '1000px' 
              }}
              onClick={() => openProjectModal(project)}
            >
              {/* Project Image with Parallax Effect */}
              <div className="h-48 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full"
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">{project.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-300">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex space-x-3">
                  {project.links.github && (
                    <a 
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.links.live && (
                    <a 
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* 3D effects - Corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Project Detail Modal */}
      <ProjectModal 
        isOpen={modalOpen}
        onClose={closeProjectModal}
        project={selectedProject}
      />
    </section>
  );
}
