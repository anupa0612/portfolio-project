import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Code2, Database, Zap, Download, Award, FileText, TrendingUp, Settings } from 'lucide-react';

export default function AnupaPortfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Cash Recon Pro",
      subtitle: "Flask Web Application",
      description: "Comprehensive web-based reconciliation system automating financial data matching between internal ledgers and external broker statements with high-accuracy data matching logic.",
      achievements: [
        "Engineered data-matching logic using Python Flask & Pandas",
        "Implemented automatic and manual workflows for unmatched transactions",
        "Integrated Excel export (.xlsx/.xlsm) preserving formulas via xlwings",
        "Designed user-friendly interface for real-time review and reporting"
      ],
      tech: ["Python", "Flask", "Pandas", "xlwings", "HTML5", "CSS3", "JavaScript"],
      icon: Code2,
      size: "large",
      color: "from-emerald-500/20 to-teal-500/20",
      gradient: "from-emerald-400 to-teal-500"
    },
    {
      id: 2,
      title: "FinMatch Database System",
      subtitle: "Microsoft Access Application",
      description: "Centralized reconciliation and reporting platform for financial transaction management with normalized relational database structure.",
      achievements: [
        "Structured normalized tables for transaction data",
        "Designed queries and forms for variance analysis",
        "Automated Excel imports and interactive reports",
        "Enhanced workflow efficiency before web migration"
      ],
      tech: ["Microsoft Access", "SQL", "VBA", "Forms & Reports"],
      icon: Database,
      size: "large",
      color: "from-blue-500/20 to-cyan-500/20",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      id: 3,
      title: "Excel VBA Automation Suite",
      subtitle: "12 Advanced Macro Projects",
      description: "Comprehensive collection of automation tools streamlining reconciliation, reporting, and financial operations workflows.",
      achievements: [
        "Full Reconciliation Builder - One-click workflow automation",
        "Account-Wise Reconciliation Loop - Batch processing",
        "Aging & Consolidation - Multi-file data merging",
        "Settlement Calculation - Date-based transaction processing",
        "Cashbook & Journal Preparation - Accounting automation",
        "Multi-File Import & Merge - Unified dataset creation"
      ],
      tech: ["VBA", "Excel Macros", "Advanced Formulas", "Data Processing"],
      icon: Settings,
      size: "medium",
      color: "from-violet-500/20 to-purple-500/20",
      gradient: "from-violet-400 to-purple-500"
    }
  ];

  const skills = [
    {
      category: "Programming & Development",
      icon: Code2,
      items: [
        "Python (Flask, Pandas, xlwings, OpenPyXL)",
        "VBA (Excel Macros & Automation)",
        "SQL (PostgreSQL, MS Access)",
        "JavaScript, HTML5, CSS3"
      ],
      color: "from-cyan-500/20 to-blue-500/20"
    },
    {
      category: "Automation & Tools",
      icon: Zap,
      items: [
        "Flask Web Framework",
        "Power Apps & Power Automate",
        "REST API Integration",
        "PyInstaller & GitHub"
      ],
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      category: "Data & Analytics",
      icon: TrendingUp,
      items: [
        "Power BI & DAX",
        "Pandas & Matplotlib",
        "Excel (Advanced, Power Query, Pivot Tables)",
        "PostgreSQL & Dataverse"
      ],
      color: "from-orange-500/20 to-amber-500/20"
    },
    {
      category: "Database Management",
      icon: Database,
      items: [
        "Microsoft Access Design",
        "PostgreSQL Administration",
        "Relational Database Design",
        "Query Optimization"
      ],
      color: "from-purple-500/20 to-pink-500/20"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science (Hons)",
      field: "Software Engineering & Data Analytics",
      institution: "Solent University",
      year: "2024 - 2026",
      status: "In Progress"
    },
    {
      degree: "Bachelor of Law (Hons)",
      field: "LLB",
      institution: "Open University of Sri Lanka",
      year: "2023 - 2026",
      status: "In Progress"
    },
    {
      degree: "Advanced Diploma",
      field: "Digital Banking and Finance",
      institution: "NIBM Sri Lanka",
      year: "2024",
      status: "Completed"
    }
  ];

  const experience = [
    {
      title: "Reconciliation Officer",
      company: "GTN Technologies",
      period: "June 2024 - Present",
      location: "Colombo, Sri Lanka",
      responsibilities: [
        "Prepare reconciliation reports supporting valuation processes",
        "Identify and resolve cash and position discrepancies",
        "Validate corporate actions and maintain audit records",
        "Deliver timely responses to client and BA queries"
      ],
      highlight: "🏆 GTN Trailblazer Award - 2 consecutive quarters for Internal Process Automation"
    },
    {
      title: "Fund Administrator",
      company: "HSBC",
      period: "February 2023 - June 2024",
      location: "Colombo, Sri Lanka",
      responsibilities: [
        "Performed fund administration activities (Trade Upload, Pricing, Income Processing)",
        "Managed reconciliations and NAV calculations",
        "Handled Transfer Agency for Traditional and Alternative funds"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Custom Cursor Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.08), transparent 40%)`
        }}
      />

      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollY * 0.1}px)`
        }} />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-slate-950/50 border-b border-emerald-500/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center font-black text-slate-950">
              AW
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
              Anupa Wimalasiri
            </span>
          </div>
          <div className="hidden md:flex gap-8">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative text-sm font-medium transition-colors group ${activeSection === item.toLowerCase() ? 'text-emerald-400' : 'text-slate-300 hover:text-emerald-400'
                  }`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-emerald-400 transition-all duration-300 ${activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium backdrop-blur-sm">
                  <Award className="w-4 h-4" />
                  Software Engineering Undergraduate
                </div>

                <h1 className="text-6xl lg:text-8xl font-black leading-none">
                  <span className="bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent">
                    Anupa
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                    Wimalasiri
                  </span>
                </h1>

                <p className="text-2xl font-semibold text-emerald-400">
                  Automation Specialist & Developer
                </p>

                <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                  Reconciliation Officer at GTN Technologies specializing in business process automation.
                  Combining expertise in software engineering, finance, and law to build innovative solutions
                  that streamline operations and drive efficiency.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <div className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-sm">
                    🎓 BSc Software Engineering
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-sm">
                    ⚖️ LLB (Hons) Law
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-sm">
                    💼 Digital Banking & Finance
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:-translate-y-1"
                >
                  View Projects
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 border border-slate-700 hover:border-emerald-500/50 rounded-xl font-semibold backdrop-blur-sm hover:bg-emerald-500/5 transition-all duration-300 flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Get in Touch
                </a>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/anupawimalasiri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl border border-slate-700 hover:border-emerald-500/50 flex items-center justify-center hover:bg-emerald-500/5 transition-all duration-300 group"
                >
                  <Github className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/anupawimalasiri-71b105251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl border border-slate-700 hover:border-emerald-500/50 flex items-center justify-center hover:bg-emerald-500/5 transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                </a>
                <a
                  href="mailto:anupawpahasara@gmail.com"
                  className="w-12 h-12 rounded-xl border border-slate-700 hover:border-emerald-500/50 flex items-center justify-center hover:bg-emerald-500/5 transition-all duration-300 group"
                >
                  <Mail className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                </a>
              </div>
            </div>

            {/* Right side - Animated Code Visual */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square">
                {/* Rotating rings */}
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="absolute inset-0 rounded-full border-2 border-emerald-500/20"
                    style={{
                      animation: `spin ${20 + i * 10}s linear infinite ${i % 2 === 0 ? 'normal' : 'reverse'}`,
                      transform: `scale(${1 - i * 0.15})`
                    }}
                  />
                ))}

                {/* Center content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 backdrop-blur-xl flex items-center justify-center">
                      <Code2 className="w-16 h-16 text-emerald-400" />
                    </div>

                    {/* Floating tech icons */}
                    {[
                      { Icon: Database, angle: 0, label: "SQL" },
                      { Icon: Code2, angle: 90, label: "Python" },
                      { Icon: Zap, angle: 180, label: "VBA" },
                      { Icon: TrendingUp, angle: 270, label: "Analytics" }
                    ].map(({ Icon, angle, label }, i) => (
                      <div
                        key={i}
                        className="absolute"
                        style={{
                          transform: `rotate(${angle}deg) translateY(-140px) rotate(-${angle}deg)`,
                          animation: `float ${3 + i * 0.5}s ease-in-out infinite`
                        }}
                      >
                        <div className="w-16 h-16 rounded-2xl bg-slate-900/50 border border-emerald-500/20 backdrop-blur-sm flex flex-col items-center justify-center gap-1 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300">
                          <Icon className="w-6 h-6 text-emerald-400" />
                          <span className="text-xs text-slate-400">{label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Professional Summary */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl font-black bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                  About Me
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full" />
              </div>

              <div className="space-y-6 text-slate-300 leading-relaxed">
                <p className="text-lg">
                  Results-driven professional with a unique blend of expertise in <span className="text-emerald-400 font-semibold">software engineering</span>,
                  <span className="text-emerald-400 font-semibold"> finance</span>, and <span className="text-emerald-400 font-semibold">law</span>.
                  Currently working as a Reconciliation Officer at GTN Technologies, where I specialize in business process automation.
                </p>

                <p className="text-lg">
                  My passion lies in leveraging technology to transform financial operations. I've developed comprehensive automation
                  solutions that have streamlined reconciliation processes, reduced manual effort, and improved accuracy across the board.
                </p>

                <p className="text-lg">
                  Winner of the <span className="text-emerald-400 font-semibold">GTN Trailblazer Award</span> for two consecutive
                  quarters for Internal Process Automation, demonstrating my commitment to innovation and operational excellence.
                </p>
              </div>

              {/* Experience */}
              <div className="space-y-6 pt-8">
                <h3 className="text-2xl font-bold text-emerald-400">Professional Experience</h3>

                {experience.map((exp, index) => (
                  <div key={index} className="relative pl-8 pb-8 border-l-2 border-slate-800 last:pb-0">
                    <div className="absolute left-0 top-0 w-4 h-4 -ml-2 rounded-full bg-emerald-500 border-4 border-slate-950" />

                    <div className="space-y-3">
                      <div>
                        <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                        <p className="text-emerald-400 font-semibold">{exp.company}</p>
                        <p className="text-sm text-slate-500">{exp.period} • {exp.location}</p>
                      </div>

                      {exp.highlight && (
                        <div className="px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium inline-block">
                          {exp.highlight}
                        </div>
                      )}

                      <ul className="space-y-2 text-slate-400">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-emerald-400 mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="space-y-8">
              {/* Education */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-emerald-400">Education</h3>

                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${edu.status === 'In Progress'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : 'bg-slate-700 text-slate-300'
                          }`}>
                          {edu.status}
                        </span>
                      </div>
                      <p className="text-emerald-400 font-semibold mb-1">{edu.field}</p>
                      <p className="text-slate-400 text-sm">{edu.institution}</p>
                      <p className="text-slate-500 text-sm mt-2">{edu.year}</p>
                    </div>
                  ))}

                  {/* Royal College Achievement */}
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20">
                    <h4 className="text-lg font-bold text-white mb-2">Royal College Colombo</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Economics', 'Business Studies', 'Accounting', 'General English'].map((subject) => (
                        <div key={subject} className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-sm font-medium">
                          {subject}: A
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-emerald-400">Certifications</h3>

                <div className="space-y-3">
                  {[
                    "Becoming an AI-First Product Leader",
                    "Generative AI for Business Leaders"
                  ].map((cert, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-emerald-400" />
                      </div>
                      <span className="text-slate-300">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 text-center">
                  <div className="text-3xl font-black text-emerald-400 mb-2">12+</div>
                  <div className="text-sm text-slate-400">VBA Projects</div>
                </div>
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 text-center">
                  <div className="text-3xl font-black text-emerald-400 mb-2">2</div>
                  <div className="text-sm text-slate-400">Trailblazer Awards</div>
                </div>
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 text-center">
                  <div className="text-3xl font-black text-emerald-400 mb-2">3</div>
                  <div className="text-sm text-slate-400">Major Applications</div>
                </div>
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 text-center">
                  <div className="text-3xl font-black text-emerald-400 mb-2">2+</div>
                  <div className="text-sm text-slate-400">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-6xl font-black bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Innovative automation solutions driving efficiency and accuracy in financial operations
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mx-auto" />
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative rounded-3xl overflow-hidden border border-slate-800 hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50`} />

                {/* Content */}
                <div className="relative p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Left side - Info */}
                    <div className="space-y-6">
                      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                        <project.icon className="w-5 h-5 text-emerald-400" />
                        <span className="text-sm font-medium text-slate-300">{project.subtitle}</span>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-4xl font-black bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent">
                          {project.title}
                        </h3>
                        <p className="text-lg text-slate-300 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 text-sm font-medium bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-white"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right side - Achievements */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-emerald-400 mb-4">Key Achievements</h4>
                      <div className="space-y-3">
                        {project.achievements.map((achievement, i) => (
                          <div key={i} className="flex gap-3 items-start">
                            <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-2 h-2 rounded-full bg-emerald-400" />
                            </div>
                            <p className="text-slate-300 leading-relaxed">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0" style={{
                    background: `linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.1), transparent)`,
                    transform: 'translateX(-100%)',
                    animation: 'shimmer 3s infinite'
                  }} />
                </div>
              </div>
            ))}
          </div>

          {/* Additional VBA Projects Showcase */}
          <div className="mt-16 p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-800">
            <h3 className="text-3xl font-black text-emerald-400 mb-8">Excel VBA Macro Portfolio</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Automated Reconciliation Generator",
                "Account-Wise Reconciliation Loop",
                "Aging and Consolidation Macro",
                "Export Macro for Report Generation",
                "Balance Update and Validation",
                "Cleared Breaks Tracker",
                "Settlement Calculation Macro",
                "Cashbook & Journal Preparation",
                "Carry-Forward Unmatched Automation",
                "Export & Report Renaming",
                "Multi-File Import & Merge",
                "Custom Dashboard Builder"
              ].map((macro, index) => (
                <div key={index} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 group">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                      <Settings className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{macro}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-6xl font-black bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Specialized skills in automation, development, and data analytics
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl border border-slate-800 hover:border-emerald-500/30 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <skill.icon className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{skill.category}</h3>
                  </div>

                  <div className="space-y-3">
                    {skill.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Development Tools */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-emerald-400">Development Tools & Platforms</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "GitHub", "Visual Studio Code", "Power BI Desktop", "PyCharm",
                "Microsoft Access", "Excel Advanced", "PyInstaller", "Power Apps",
                "Power Automate", "PostgreSQL", "Dataverse", "REST APIs"
              ].map((tool) => (
                <div key={tool} className="px-6 py-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300">
                  <span className="text-slate-300">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl p-12 lg:p-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />

            <div className="relative space-y-8 text-center">
              <h2 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Let's Connect
              </h2>

              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Interested in automation solutions, financial technology, or innovative development?
                I'm always open to discussing new opportunities and exciting projects.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <a
                  href="mailto:anupawpahasara@gmail.com"
                  className="group px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <Mail className="w-6 h-6" />
                  Send Email
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="pt-12 space-y-6">
                <h3 className="text-xl font-semibold text-slate-300">Connect with me</h3>
                <div className="flex justify-center gap-6">
                  {[
                    { Icon: Github, label: "GitHub", url: "https://github.com/anupawimalasiri" },
                    { Icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/anupawimalasiri-71b105251" },
                    { Icon: Mail, label: "Email", url: "mailto:anupawpahasara@gmail.com" }
                  ].map(({ Icon, label, url }, i) => (
                    <a
                      key={i}
                      href={url}
                      target={url.startsWith('http') ? '_blank' : undefined}
                      rel={url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group flex flex-col items-center gap-2"
                    >
                      <div className="w-14 h-14 rounded-xl border border-slate-700 hover:border-emerald-500/50 flex items-center justify-center hover:bg-emerald-500/5 transition-all duration-300">
                        <Icon className="w-6 h-6 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                      </div>
                      <span className="text-xs text-slate-500 group-hover:text-emerald-400 transition-colors">
                        {label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-8 space-y-2 text-slate-500">
                <p className="flex items-center justify-center gap-2">
                  <span>📍</span>
                  Colombo, Sri Lanka
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span>📞</span>
                  +94 72 091 9719
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-slate-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center font-black text-slate-950 text-sm">
                AW
              </div>
              <p className="text-slate-500">
                © 2024 Anupa Wimalasiri. All rights reserved.
              </p>
            </div>
            <p className="text-slate-500">
              Crafted with precision & passion 💚
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(5deg);
          }
          66% {
            transform: translateY(10px) rotate(-5deg);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(16, 185, 129, 0.3);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(16, 185, 129, 0.5);
        }
      `}</style>
    </div>
  );
}