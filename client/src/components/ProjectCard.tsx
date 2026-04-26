import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0, 217, 255, 0.4)' }}
      className={`relative group rounded-lg overflow-hidden transition-all duration-300 ${
        featured ? 'col-span-1 md:col-span-2 lg:col-span-2' : ''
      }`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-magenta-500/10 group-hover:from-cyan-500/20 group-hover:to-magenta-500/20 transition-all duration-300" />

      {/* Content */}
      <div className="relative p-6 border border-cyan-500/30 group-hover:border-cyan-500/60 rounded-lg bg-card/50 backdrop-blur-md transition-all duration-300">
        <h3 className="text-xl font-bold mb-2 text-cyan-400">{title}</h3>
        <p className="text-foreground/80 mb-4 text-sm leading-relaxed">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs font-medium rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 items-center">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 border border-cyan-500/50 hover:border-cyan-500/80 transition-all duration-300 text-sm font-medium"
          >
            <Github size={16} />
            GitHub
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-magenta-500/20 text-magenta-300 hover:bg-magenta-500/30 border border-magenta-500/50 hover:border-magenta-500/80 transition-all duration-300 text-sm font-medium"
            >
              <ExternalLink size={16} />
              Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
