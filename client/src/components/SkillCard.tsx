import { motion } from 'framer-motion';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon?: React.ReactNode;
  variant?: 'cyan' | 'magenta' | 'purple';
}

export default function SkillCard({ title, skills, icon, variant = 'cyan' }: SkillCardProps) {
  const glowClass = variant === 'magenta' ? 'neon-glow-magenta' : 'neon-glow';
  const borderClass = variant === 'magenta' ? 'neon-border-magenta' : 'neon-border';
  const accentColor = variant === 'magenta' ? '#ff006e' : variant === 'purple' ? '#a78bfa' : '#00d9ff';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${accentColor}40` }}
      className={`p-6 rounded-lg backdrop-blur-md bg-card/50 ${borderClass} ${glowClass} transition-all duration-300`}
    >
      {icon && <div className="mb-4 text-2xl">{icon}</div>}
      <h3 className="text-lg font-bold mb-4" style={{ color: accentColor }}>
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-xs font-medium rounded-full bg-background/50 border border-current/30 hover:border-current/60 transition-colors"
            style={{ color: accentColor }}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
