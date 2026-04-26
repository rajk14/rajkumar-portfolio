import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import SkillCard from '@/components/SkillCard';
import ProjectCard from '@/components/ProjectCard';
import ExperienceCard from '@/components/ExperienceCard';
import SocialLink from '@/components/SocialLink';
import CertificationBadge from '@/components/CertificationBadge';
import AnimatedCube from '@/components/AnimatedCube';
import ProfileImage from '@/components/ProfileImage';
import { Link } from 'wouter';

/**
 * Design Philosophy: Futuristic Tech Minimalism
 * - Dark luxury aesthetic with neon cyan and magenta accents
 * - Interactive 3D elements and smooth animations
 * - Asymmetric layout with floating elements
 * - Professional yet cutting-edge appearance
 */

export default function Home() {
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
          <motion.h1 className="text-2xl font-bold text-cyan-400">
            RS
          </motion.h1>
          <div className="flex items-center gap-6">
            <Link href="/contact">
              <span className="text-foreground/80 hover:text-cyan-400 cursor-pointer transition-colors font-medium">Contact</span>
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
            <SocialLink
              href="mailto:rajsinha7462@gmail.com"
              icon={<Mail size={18} />}
              label="Email"
              variant="purple"
            />
          </div>
        </div>
      </div>
    </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between gap-12 mb-20 pt-20 lg:pt-0">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-cyan-400 font-medium text-sm">Welcome to my portfolio</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-7xl font-bold mb-4 leading-tight"
            >
              <span className="text-cyan-400">Raj</span>
              <span className="text-foreground">kumar</span>
              <br />
              <span className="text-magenta-400">Sinha</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl text-foreground/80 mb-8 max-w-lg">
              SAP S/4HANA MM Consultant | Mechanical Engineer | Supply Chain & Procurement Specialist
            </motion.p>

            <motion.p variants={itemVariants} className="text-foreground/70 mb-8 max-w-lg leading-relaxed">
              Certified SAP Associate with 140+ hours of hands-on P2P cycle experience. Specialized in Material Master, Procurement, and Inventory Management. Passionate about optimizing supply chain processes and delivering innovative solutions.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 hover:border-cyan-500/80 hover:bg-cyan-500/30 transition-all duration-300 font-medium"
              >
                View My Work
                <ExternalLink size={18} />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-magenta-500/20 text-magenta-300 border border-magenta-500/50 hover:border-magenta-500/80 hover:bg-magenta-500/30 transition-all duration-300 font-medium cursor-pointer"
              >
                Get In Touch
                <Mail size={18} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <div className="flex-1 w-full max-w-sm lg:max-w-none mt-12 lg:mt-0">
            <ProfileImage src="/profile.png" variant="cyan" />
          </div>
        </section>

        {/* About Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-cyan-400">About</span> Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-magenta-400 rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="p-6 rounded-lg border neon-border bg-card/50 backdrop-blur-md">
              <h3 className="text-cyan-400 font-bold text-lg mb-4">Professional Background</h3>
              <p className="text-foreground/80 leading-relaxed">
                I'm a SAP Certified Associate in S/4HANA Sourcing & Procurement with a B.Tech in Mechanical Engineering. Currently working as a Consultant at ITI College under Tata Technologies' skill program, where I handle resource planning, vendor coordination, and software training.
              </p>
            </div>

            <div className="p-6 rounded-lg border neon-border-magenta bg-card/50 backdrop-blur-md">
              <h3 className="text-magenta-400 font-bold text-lg mb-4">Expertise</h3>
              <p className="text-foreground/80 leading-relaxed">
                Specialized in SAP MM module with deep knowledge of P2P cycle, material management, inventory processes, and MM-FI integration. Proficient with SAP Fiori, Power BI, and Excel. Experienced in training and mentoring teams on enterprise software.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-magenta-400">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-magenta-400 to-cyan-400 rounded-full" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-6"
          >
            <ExperienceCard
              role="Consultant — Resource, Maintenance & Software Training"
              company="Tata Technologies Skill Program — Govt. ITI College, Bihar"
              period="2025 – Present"
              description={[
                'Advise ITI management on resource allocation, equipment procurement planning & maintenance scheduling',
                'Coordinate vendor sourcing for spare parts & service contracts, managing procurement requests',
                'Train 50+ students on MS Excel (PivotTables, VLOOKUP, Macros) & Power BI',
              ]}
              variant="cyan"
            />

            <ExperienceCard
              role="SAP S/4HANA Sourcing & Procurement Trainee"
              company="SEED Infotech — SAP Authorized Partner (BIPARD Skill Park) — Patna"
              period="Apr – Jun 2025"
              description={[
                'Trained on full P2P cycle, MRP, Vendor/Material Master, Info Records, Source Lists & Release Strategies',
                'Practiced SAP Fiori apps for procurement approvals and self-service procurement',
                'Worked with real-time embedded analytics dashboards on live SAP S/4HANA system',
              ]}
              variant="magenta"
            />
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-cyan-400">Skills</span> & <span className="text-magenta-400">Competencies</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-magenta-400 rounded-full" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <SkillCard
              title="SAP T-Codes"
              skills={['MM01', 'XK01', 'ME51N', 'ME21N', 'MIGO', 'MIRO', 'MB52', 'MMBE']}
              variant="cyan"
            />

            <SkillCard
              title="P2P & Inventory"
              skills={['PR', 'RFQ', 'PO', 'GR', 'Invoice Verification', 'MRP', 'Goods Movement']}
              variant="magenta"
            />

            <SkillCard
              title="Master Data & Config"
              skills={['Vendor Master', 'Material Master', 'Info Records', 'Source Lists', 'Release Strategies']}
              variant="purple"
            />

            <SkillCard
              title="Tools & Platforms"
              skills={['SAP Fiori', 'Power BI', 'MS Excel', 'AutoCAD', 'SolidWorks', 'CATIA V5']}
              variant="cyan"
            />

            <SkillCard
              title="Integration"
              skills={['MM-FI', 'MM-PP', 'MM-SD', 'S/4HANA 2022', 'Fiori Launchpad']}
              variant="magenta"
            />

            <SkillCard
              title="Certifications"
              skills={['SAP Certified Associate', 'Google Data Analytics', 'Power BI Virtual Experience', 'AWS Cloud']}
              variant="purple"
            />
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-magenta-400">Featured</span> Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-magenta-400 to-cyan-400 rounded-full" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <ProjectCard
              title="SAP MM P2P Self-Learning Project"
              description="Comprehensive 140+ hours hands-on project executing full P2P cycle on SAP IDES system with material master, vendor master, procurement, and inventory management."
              technologies={['SAP MM', 'SAP IDES', 'P2P Cycle', 'Inventory']}
              githubUrl="https://github.com/rajk14/SAP-IDES-"
              featured={true}
            />

            <ProjectCard
              title="Inventory Management Dashboard"
              description="Power BI dashboard for real-time inventory tracking, stock overview (MB52), and operational reporting with KPI metrics."
              technologies={['Power BI', 'Excel', 'Data Visualization']}
              githubUrl="https://github.com/rajkumar-sinha/inventory-dashboard"
            />

            <ProjectCard
              title="Procurement Automation Tool"
              description="Automated procurement request management system with vendor coordination, purchase order tracking, and delivery follow-ups."
              technologies={['Python', 'Excel', 'SAP Integration']}
              githubUrl="https://github.com/rajkumar-sinha/procurement-automation"
            />

            <ProjectCard
              title="Supply Chain Analytics"
              description="Advanced analytics platform for supply chain optimization, vendor performance analysis, and material cost tracking."
              technologies={['Python', 'Pandas', 'Data Analysis']}
              githubUrl="https://github.com/rajkumar-sinha/supply-chain-analytics"
            />

            <ProjectCard
              title="SAP Fiori Mobile App"
              description="Mobile-responsive SAP Fiori application for procurement approvals and self-service procurement on the go."
              technologies={['SAP Fiori', 'React', 'UI5']}
              githubUrl="https://github.com/rajkumar-sinha/sap-fiori-mobile"
            />

            <ProjectCard
              title="Resource Planning System"
              description="Comprehensive resource allocation and maintenance scheduling system for ITI workshop operations."
              technologies={['Excel VBA', 'Database', 'Scheduling']}
              githubUrl="https://github.com/rajkumar-sinha/resource-planning"
            />
          </motion.div>
        </section>

        {/* Certifications Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-cyan-400">Certifications</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-magenta-400 rounded-full" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 gap-6"
          >
            <CertificationBadge
              title="SAP Certified Associate — S/4HANA Sourcing & Procurement"
              issuer="SAP SE"
              date="2025"
              url="https://credly.com/badges/ef1d8a47-becf-455c-a471-7823a3453269"
              variant="cyan"
            />

            <CertificationBadge
              title="Google Data Analytics Professional Certificate"
              issuer="Google / Coursera"
              date="2024"
              variant="magenta"
            />

            <CertificationBadge
              title="Power BI Virtual Experience Program"
              issuer="PwC / Forage"
              date="2024"
              variant="purple"
            />

            <CertificationBadge
              title="AWS Cloud & ML Foundations"
              issuer="Amazon Web Services"
              date="2024"
              variant="cyan"
            />

            <CertificationBadge
              title="Brand Management"
              issuer="NPTEL, IIT Madras"
              date="2024"
              variant="magenta"
            />

            <CertificationBadge
              title="B.Tech Mechanical Engineering"
              issuer="B.P.M.C.E., Madhepura (Bihar Engineering University)"
              date="2024 | GPA: 7.01"
              variant="purple"
            />
          </motion.div>
        </section>

        {/* Contact Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-lg border neon-border bg-card/50 backdrop-blur-md text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Let's <span className="text-cyan-400">Connect</span>
            </h2>
            <p className="text-foreground/80 mb-8 max-w-lg mx-auto">
              I'm always interested in hearing about new opportunities and projects. Feel free to reach out!
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="mailto:rajsinha7462@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 hover:border-cyan-500/80 hover:bg-cyan-500/30 transition-all duration-300 font-medium"
              >
                <Mail size={18} />
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/rajkumar-sinha-6b379620b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-magenta-500/20 text-magenta-300 border border-magenta-500/50 hover:border-magenta-500/80 hover:bg-magenta-500/30 transition-all duration-300 font-medium"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href="https://github.com/rajkumar-sinha"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/50 hover:border-purple-500/80 hover:bg-purple-500/30 transition-all duration-300 font-medium"
              >
                <Github size={18} />
                GitHub
              </a>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="py-8 border-t border-cyan-500/20 text-center text-foreground/60 text-sm"
        >
          <p>© 2025 Rajkumar Sinha. All rights reserved. | Designed with ✨ and built with React + Three.js</p>
        </motion.footer>
      </main>
    </div>
  );
}
