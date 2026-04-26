import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';
import SocialLink from '@/components/SocialLink';
import { Link } from 'wouter';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend or use an email service
    window.location.href = `mailto:rajsinha7462@gmail.com?subject=${formData.subject}&body=From: ${formData.name} (${formData.email})%0D%0A%0D%0A${formData.message}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated background gradient mesh */}
      <div className="fixed inset-0 gradient-mesh opacity-40 pointer-events-none" />

      {/* Floating particles effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-400/30"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/50 border-b border-cyan-500/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <motion.h1 className="text-2xl font-bold text-cyan-400 cursor-pointer">
              RS
            </motion.h1>
          </Link>
          <div className="flex gap-4 items-center">
            <Link href="/">
              <span className="text-foreground/80 hover:text-cyan-400 cursor-pointer transition-colors font-medium">Home</span>
            </Link>
            <div className="flex gap-2">
              <SocialLink
                href="https://linkedin.com/in/rajkumar-sinha-6b379620b"
                icon={<Linkedin size={18} />}
                label="LinkedIn"
                variant="cyan"
              />
              <SocialLink
                href="https://github.com/rajkumar-sinha"
                icon={<Github size={18} />}
                label="GitHub"
                variant="magenta"
              />
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Get in <span className="text-cyan-400">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-magenta-400 rounded-full mx-auto mb-6" />
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative solutions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
              <div className="p-8 rounded-2xl border neon-border bg-card/40 backdrop-blur-xl">
                <h3 className="text-2xl font-bold text-cyan-400 mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/50 font-medium">Email Me At</p>
                      <a href="mailto:rajsinha7462@gmail.com" className="text-lg font-medium hover:text-cyan-400 transition-colors">
                        rajsinha7462@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-magenta-500/20 text-magenta-400 border border-magenta-500/30">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/50 font-medium">Call Me</p>
                      <p className="text-lg font-medium">+91 (Your Phone Number)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-purple-500/20 text-purple-400 border border-purple-500/30">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/50 font-medium">Location</p>
                      <p className="text-lg font-medium">Bihar, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-12 border-t border-white/5">
                  <p className="text-sm text-foreground/50 mb-4 font-medium uppercase tracking-wider">Social Channels</p>
                  <div className="flex gap-4">
                    <SocialLink
                      href="https://linkedin.com/in/rajkumar-sinha-6b379620b"
                      icon={<Linkedin size={20} />}
                      label="LinkedIn"
                      variant="cyan"
                    />
                    <SocialLink
                      href="https://github.com/rajkumar-sinha"
                      icon={<Github size={20} />}
                      label="GitHub"
                      variant="magenta"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="p-8 rounded-2xl border neon-border-magenta bg-card/40 backdrop-blur-xl space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/70 ml-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-background/50 border border-magenta-500/20 focus:border-magenta-500/50 focus:ring-1 focus:ring-magenta-500/50 outline-none transition-all duration-300"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/70 ml-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-background/50 border border-magenta-500/20 focus:border-magenta-500/50 focus:ring-1 focus:ring-magenta-500/50 outline-none transition-all duration-300"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/70 ml-1">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-magenta-500/20 focus:border-magenta-500/50 focus:ring-1 focus:ring-magenta-500/50 outline-none transition-all duration-300"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/70 ml-1">Message</label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Tell me more about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-magenta-500/20 focus:border-magenta-500/50 focus:ring-1 focus:ring-magenta-500/50 outline-none transition-all duration-300 resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-magenta-600 to-purple-600 text-white font-bold text-lg shadow-lg shadow-magenta-500/20 hover:shadow-magenta-500/40 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-cyan-500/20 text-center text-foreground/60 text-sm relative z-10">
        <p>© 2025 Rajkumar Sinha. All rights reserved.</p>
      </footer>
    </div>
  );
}
