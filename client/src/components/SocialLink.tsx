import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  variant?: 'cyan' | 'magenta' | 'purple';
}

export default function SocialLink({ href, icon, label, variant = 'cyan' }: SocialLinkProps) {
  const accentColor = variant === 'magenta' ? '#ff006e' : variant === 'purple' ? '#a78bfa' : '#00d9ff';
  const borderClass = variant === 'magenta' ? 'border-magenta-500/50 hover:border-magenta-500/80' : 'border-cyan-500/50 hover:border-cyan-500/80';
  const bgClass = variant === 'magenta' ? 'bg-magenta-500/10 hover:bg-magenta-500/20' : 'bg-cyan-500/10 hover:bg-cyan-500/20';

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, boxShadow: `0 0 20px ${accentColor}40` }}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border ${borderClass} ${bgClass} transition-all duration-300 text-sm font-medium`}
      style={{ color: accentColor }}
      title={label}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </motion.a>
  );
}
