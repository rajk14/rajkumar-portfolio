import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

interface CertificationBadgeProps {
  title: string;
  issuer: string;
  date: string;
  url?: string;
  variant?: 'cyan' | 'magenta' | 'purple';
}

export default function CertificationBadge({
  title,
  issuer,
  date,
  url,
  variant = 'cyan',
}: CertificationBadgeProps) {
  const accentColor = variant === 'magenta' ? '#ff006e' : variant === 'purple' ? '#a78bfa' : '#00d9ff';
  const borderClass = variant === 'magenta' ? 'border-magenta-500/30 hover:border-magenta-500/60' : 'border-cyan-500/30 hover:border-cyan-500/60';

  const content = (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${accentColor}40` }}
      className={`p-4 rounded-lg border ${borderClass} bg-card/50 backdrop-blur-md transition-all duration-300 cursor-pointer group`}
    >
      <div className="flex items-start gap-3">
        <Award size={24} style={{ color: accentColor, flexShrink: 0 }} />
        <div className="flex-1">
          <h4 className="font-bold text-sm" style={{ color: accentColor }}>
            {title}
          </h4>
          <p className="text-xs text-foreground/70 mt-1">{issuer}</p>
          <p className="text-xs text-foreground/60 mt-1">{date}</p>
        </div>
      </div>
    </motion.div>
  );

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}
