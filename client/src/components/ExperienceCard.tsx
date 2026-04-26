import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  description: string[];
  variant?: 'cyan' | 'magenta' | 'purple';
}

export default function ExperienceCard({
  role,
  company,
  period,
  description,
  variant = 'cyan',
}: ExperienceCardProps) {
  const accentColor = variant === 'magenta' ? '#ff006e' : variant === 'purple' ? '#a78bfa' : '#00d9ff';
  const borderClass = variant === 'magenta' ? 'neon-border-magenta' : 'neon-border';

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className={`relative p-6 rounded-lg border ${borderClass} bg-card/50 backdrop-blur-md hover:bg-card/70 transition-all duration-300 group`}
    >
      {/* Left accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-lg"
        style={{ backgroundColor: accentColor, opacity: 0.5 }}
      />

      {/* Header */}
      <div className="pl-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-lg font-bold" style={{ color: accentColor }}>
              {role}
            </h3>
            <p className="text-foreground/70 font-medium">{company}</p>
          </div>
          <Briefcase size={20} style={{ color: accentColor, opacity: 0.6 }} />
        </div>

        {/* Period */}
        <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
          <Calendar size={14} />
          <span>{period}</span>
        </div>

        {/* Description */}
        <ul className="space-y-2">
          {description.map((point, idx) => (
            <li key={idx} className="text-sm text-foreground/80 flex gap-3">
              <span className="text-cyan-400 flex-shrink-0 mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
