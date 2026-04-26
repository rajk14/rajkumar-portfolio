import { motion } from 'framer-motion';

interface ProfileImageProps {
  src: string;
  variant?: 'cyan' | 'magenta';
}

export default function ProfileImage({ src, variant = 'cyan' }: ProfileImageProps) {
  const borderColor = variant === 'cyan' ? 'rgba(0, 217, 255, 0.5)' : 'rgba(255, 0, 110, 0.5)';
  const glowColor = variant === 'cyan' ? 'rgba(0, 217, 255, 0.3)' : 'rgba(255, 0, 110, 0.3)';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.05, rotate: 2 }}
      className="relative w-full max-w-md aspect-square mx-auto lg:ml-auto"
    >
      {/* Glow effect behind */}
      <div 
        className="absolute inset-0 rounded-2xl blur-2xl opacity-20"
        style={{ backgroundColor: variant === 'cyan' ? '#00d9ff' : '#ff006e' }}
      />
      
      {/* Image container with neon border */}
      <div 
        className="relative h-full w-full rounded-2xl overflow-hidden border-2 z-10"
        style={{ 
          borderColor: borderColor,
          boxShadow: `0 0 20px ${glowColor}`
        }}
      >
        <img 
          src={src} 
          alt="Rajkumar Sinha" 
          className="w-full h-full object-cover object-top"
          onError={(e) => {
            // Fallback to a placeholder if image doesn't exist
            (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Rajkumar+Sinha&background=0a0e27&color=00d9ff&size=512";
          }}
        />
      </div>

      {/* Decorative elements */}
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 rounded-tr-xl z-20"
        style={{ borderColor: borderColor }}
      />
      <motion.div
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 rounded-bl-xl z-20"
        style={{ borderColor: borderColor }}
      />
    </motion.div>
  );
}
