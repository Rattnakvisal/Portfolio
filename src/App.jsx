import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  X,
  Code2,
  Palette,
  Rocket,
  Zap,
  Database,
  Download,
  ArrowRight,
  MapPin,
  User,
  FileDown,
} from "lucide-react";
import profile from "./assets/Chun Rattnakvisal.jpg";
import Ecommerce_shoes from "./assets/E-commerce-shoes.png";
import School from "./assets/school.png";
import Library from "./assets/Library.png";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [scrollY, setScrollY] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) =>
      setMousePosition({ x: e.clientX, y: e.clientY });
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(
              (prev) => new Set([...prev, entry.target.dataset.animateId]),
            );
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    );

    const elements = document.querySelectorAll("[data-animate-id]");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Accessibility: focus the close button when preview opens and close on Escape
  useEffect(() => {
    if (!selectedProject) return;

    // focus close button when modal opens
    const t = setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    const onKey = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };

    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", onKey);
    };
  }, [selectedProject]);

  const scrollToSection = (sectionName) => {
    setActiveSection(sectionName);

    const sectionMap = {
      home: 0,
      work: document.getElementById("projects-section")?.offsetTop - 80,
      skills: document.getElementById("skills-section")?.offsetTop - 80,
      contact: document.getElementById("contact-section")?.offsetTop - 80,
    };

    window.scrollTo({ top: sectionMap[sectionName] || 0, behavior: "smooth" });
  };

  const projects = [
    {
      title: "E-Commerce Shoes Platform",
      description:
        "Full-stack e-commerce system with product management, cart, checkout, order tracking, and role-based admin panel.",
      tech: ["PHP", "MySQL", "Tailwind CSS", "JavaScript", "Vite"],
      link: "https://github.com/Rattnakvisal/E-commerce-shoes",
      image: Ecommerce_shoes,
      color: "#00ff88",
    },
    {
      title: "School Management System",
      description:
        "CRUD web app for managing students with validation, search/filter, and clean MVC structure using Laravel.",
      tech: ["Laravel", "PHP", "MySQL", "Bootstrap","tailwind CSS","Javascript", "Blade"],
      link: "https://github.com/Rattnakvisal/School-Management-System",
      image:
        School,
      color: "#00aaff",
    },
    {
      title: "Library Management System",
      description:
        "Database-driven system for books, authors, borrowing/return, fines calculation, and reservation workflow.",
      tech: ["ASP.NET", "C#", "Microsoft SQL Server", "Jquery", "SQL Design"],
      link: "https://github.com/Rattnakvisal/Library-Management-System",
      image:
        Library,
      color: "#ffaa00",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Bootstrap",
      ],
      icon: Palette,
    },
    {
      category: "Backend",
      items: [
        "PHP",
        "Laravel",
        "REST API",
        "Authentication",
        "MVC Architecture",
      ],
      icon: Code2,
    },
    {
      category: "Database",
      items: [
        "MySQL",
        "MariaDB",
        "Oracle",
        "PDO",
        "Database Design",
        "SQL Optimization",
      ],
      icon: Database,
    },
    {
      category: "Tools & DevOps",
      items: ["Git", "GitHub", "XAMPP", "Composer", "Vite", "Linux"],
      icon: Rocket,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Scroll progress indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 z-50">
        <div
          className="h-full bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-400 transition-all duration-300"
          style={{
            width: `${(scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`,
          }}
        />
      </div>

      {/* Custom cursor effect */}
      <div
        className="fixed w-6 h-6 border-2 border-lime-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: activeSection !== "home" ? "scale(1.5)" : "scale(1)",
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div
            className={`text-2xl font-black tracking-tighter transition-all duration-700 ${isLoaded ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
          >
            <span className="text-white">Chun Rattnakvisal</span>
            <span className="text-lime-400">.</span>
          </div>
          <div
            className={`flex gap-8 transition-all duration-700 delay-300 ${isLoaded ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
          >
            {["Home", "Work", "Skills", "Contact"].map((item, idx) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative text-sm font-bold tracking-wider hover:text-lime-400 transition-colors duration-300 group"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {item.toUpperCase()}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-lime-400 transition-all duration-300 ${
                    activeSection === item.toLowerCase()
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Geometric background elements with parallax */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute top-20 left-10 w-64 h-64 border-4 border-lime-400 rotate-45 animate-pulse"
            style={{
              animationDuration: "4s",
              transform: `translateY(${scrollY * 0.3}px) rotate(45deg)`,
            }}
          />
          <div
            className="absolute bottom-20 right-20 w-96 h-96 border-4 border-pink-500 rounded-full"
            style={{
              animation: "spin 20s linear infinite",
              transform: `translateY(${scrollY * -0.2}px)`,
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl"
            style={{
              transform: `translate(-50%, -50%) translateY(${scrollY * 0.15}px)`,
            }}
          />
        </div>

        {/* Extra glow overlay (no animation) */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-lime-400/10 blur-[120px]" />
          <div className="absolute -bottom-40 right-10 w-[700px] h-[700px] bg-cyan-400/10 blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="md:flex md:items-center md:justify-between gap-10">
            {/* Left Content */}
            <div
              className={`transition-all duration-1000 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-lime-400 text-black px-4 py-2 font-black text-sm tracking-wider mb-4 rotate-[-2deg] shadow-lg shadow-lime-400/30">
                  WEB DEVELOPER
                  <span className="w-1.5 h-1.5 rounded-full bg-black/80" />
                </div>
              </div>

              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-[0.95] tracking-tighter">
                BUILDING
                <br />
                <span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-400 inline-block drop-shadow-[0_0_25px_rgba(163,230,53,0.25)]"
                  style={{
                    animation: "gradient 8s ease infinite",
                    backgroundSize: "200% 200%",
                  }}
                >
                  DIGITAL
                </span>
                <br />
                EXPERIENCES
              </h1>

              <p className="text-lg md:text-2xl text-gray-300/80 max-w-2xl mb-12 font-light leading-relaxed">
                Full-stack developer specializing in creating exceptional web
                applications with clean code, modern UI, and seamless user
                experiences.
              </p>

              <div className="flex gap-4 flex-wrap items-center">
                <button
                  onClick={() => scrollToSection("work")}
                  className="group relative bg-lime-400 text-black px-8 py-4 font-black text-sm tracking-wider
                       transition-all duration-300 hover:scale-105 hover:rotate-[-2deg]
                       shadow-lg shadow-lime-400/40 rounded-xl"
                >
                  <span className="inline-flex items-center gap-2">
                    VIEW PROJECTS
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  {/* subtle shine */}
                  <span className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                <a
                  href="/src/assets/Mr Chun Rattnakvisal.pdf"
                  download
                  className="group inline-flex items-center gap-2 rounded-xl border-2 border-white/80 text-white px-8 py-4
                       font-black text-sm tracking-wider
                       hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:rotate-[2deg]"
                >
                  <Download className="w-4 h-4" />
                  DOWNLOAD CV
                </a>

                {/* quick small line */}
                <div className="hidden md:flex items-center gap-3 text-sm text-gray-400 ml-2">
                  <span className="w-10 h-px bg-white/20" />
                  Available for internship / freelance
                </div>
              </div>
            </div>

            {/* Right Profile Card */}
            <aside
              className={`mt-10 md:mt-0 ${isLoaded ? "opacity-100" : "opacity-0"}`}
            >
              <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl shadow-black/40">
                {/* top glow border */}
                <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-r from-lime-400/30 via-cyan-400/20 to-pink-500/20 opacity-60 blur-sm" />

                <div className="relative">
                  <div className="flex justify-center">
                    <img
                      src={profile}
                      alt="Profile photo"
                      className="w-40 h-40 rounded-full object-cover border-4 border-lime-400 shadow-xl shadow-lime-400/20"
                    />
                  </div>

                  <div className="text-center mt-5">
                    <div className="text-xl font-black tracking-tight">
                      Chun Rattnakvisal
                    </div>
                    <div className="text-sm text-gray-300/80 mt-1">
                      Full-stack developer — PHP & React
                    </div>

                    {/* mini badges */}
                    <div className="flex flex-wrap justify-center gap-2 mt-4">
                      <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10">
                        Laravel
                      </span>
                      <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10">
                        MySQL
                      </span>
                      <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10">
                        Tailwind
                      </span>
                    </div>

                    <div className="flex gap-3 justify-center mt-5">
                      <a
                        href="https://github.com/Rattnakvisal"
                        aria-label="GitHub"
                        className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition
                             hover:ring-2 hover:ring-lime-400/60"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/chun-rattnakvisal-3a24a0361/"
                        aria-label="LinkedIn"
                        className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition
                             hover:ring-2 hover:ring-cyan-400/60"
                      >
                        <Linkedin className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-white rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Project Preview Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="preview-title"
          onClick={() => setSelectedProject(null)}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" />

          <div
            className="relative z-50 max-w-4xl w-full mx-auto bg-white text-black rounded-2xl overflow-hidden shadow-2xl transform transition-all modal-enter"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: 1100 }}
          >
            <div className="flex justify-end p-4">
              <button
                ref={closeBtnRef}
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-full hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-lime-400"
                aria-label="Close preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <h3 id="preview-title" className="text-2xl font-black mb-4">
                {selectedProject.title}
              </h3>
              <div className="w-full mb-4 bg-gray-100 rounded-md overflow-hidden" style={{ maxHeight: '60vh' }}>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>

              <p className="text-gray-700 mb-4">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 border rounded text-gray-800"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-lime-400 text-black font-bold rounded-md"
                >
                  Open Project
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 border-2 border-black text-black font-bold rounded-md"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Projects Section */}
      <section
        id="projects-section"
        className="py-32 bg-white text-black relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-lime-400/5" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-lime-400/10 to-transparent rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-20" data-animate-id="projects-title">
            <div
              className={`inline-block border-4 border-black px-6 py-3 font-black text-lg tracking-wider mb-6 transition-all duration-1000 ${
                visibleElements.has("projects-title")
                  ? "opacity-100 rotate-[2deg]"
                  : "opacity-0 rotate-[12deg]"
              }`}
            >
              SELECTED WORK
            </div>
            <h2
              className={`text-6xl md:text-7xl font-black leading-none tracking-tighter transition-all duration-1000 delay-200 ${
                visibleElements.has("projects-title")
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
            >
              FEATURED
              <br />
              PROJECTS
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                data-animate-id={`project-${idx}`}
                className={`group relative bg-black text-white p-8 hover:scale-[1.02] transition-all duration-700 overflow-hidden ${
                  visibleElements.has(`project-${idx}`)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{
                  transitionDelay: `${idx * 150}ms`,
                  boxShadow: `8px 8px 0 ${project.color}40`,
                }}
              >
                {/* Hover effect background */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ backgroundColor: project.color }}
                />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl font-black tracking-tight">
                      {project.title}
                    </h3>
                    <ExternalLink
                      className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300"
                      style={{ color: project.color }}
                    />
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-bold px-3 py-1 border-2 tracking-wider"
                        style={{
                          borderColor: project.color,
                          color: project.color,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={() => window.open(project.link, "_blank")}
                      className="px-4 py-2 bg-white text-black font-bold rounded-md hover:opacity-90 transition"
                    >
                      Visit
                    </button>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2 border-2 border-white text-white font-bold rounded-md hover:bg-white/10 transition"
                    >
                      Preview
                    </button>
                  </div>
                </div>

                {/* Geometric accent */}
                <div
                  className="absolute -bottom-10 -right-10 w-32 h-32 rotate-45 opacity-20 group-hover:scale-150 group-hover:rotate-90 transition-all duration-700"
                  style={{ backgroundColor: project.color }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills-section" className="py-32 bg-black relative">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 50px, #fff 50px, #fff 51px)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-20 text-center" data-animate-id="skills-title">
            <h2
              className={`text-6xl md:text-7xl font-black leading-none tracking-tighter mb-4 transition-all duration-1000 ${
                visibleElements.has("skills-title")
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
            >
              TECH STACK
            </h2>
            <div
              className={`h-1 w-32 bg-lime-400 mx-auto transition-all duration-1000 delay-300 ${
                visibleElements.has("skills-title")
                  ? "opacity-100 w-32"
                  : "opacity-0 w-0"
              }`}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, idx) => {
              const Icon = skillGroup.icon;
              return (
                <div
                  key={idx}
                  data-animate-id={`skill-${idx}`}
                  className={`bg-white/5 border-2 border-white/10 p-8 hover:border-lime-400 hover:bg-lime-400/5 transition-all duration-700 group ${
                    visibleElements.has(`skill-${idx}`)
                      ? "opacity-100 translate-x-0"
                      : idx % 2 === 0
                        ? "opacity-0 -translate-x-20"
                        : "opacity-0 translate-x-20"
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <Icon className="w-10 h-10 mb-6 text-lime-400 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                  <h3 className="text-2xl font-black mb-6 tracking-tight">
                    {skillGroup.category}
                  </h3>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-lime-400 rounded-full" />
                        <span className="text-gray-400 font-medium">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact-section"
        className="py-32 bg-lime-400 text-black relative overflow-hidden"
      >
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 35px, #000 35px, #000 37px)",
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2
            data-animate-id="contact-title"
            className={`text-7xl md:text-8xl font-black leading-none tracking-tighter mb-8 transition-all duration-1000 ${
              visibleElements.has("contact-title")
                ? "opacity-100 scale-100"
                : "opacity-0 scale-90"
            }`}
          >
            LET'S BUILD
            <br />
            SOMETHING
            <br />
            AMAZING
          </h2>

          <p
            data-animate-id="contact-subtitle"
            className={`text-xl md:text-2xl mb-12 font-medium transition-all duration-1000 delay-300 ${
              visibleElements.has("contact-subtitle")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Open to freelance projects, collaborations, and full-time
            opportunities
          </p>

          <div
            data-animate-id="contact-buttons"
            className={`flex flex-wrap gap-6 justify-center mb-12 transition-all duration-1000 delay-500 ${
              visibleElements.has("contact-buttons")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <a
              href="mailto:your.rattnakvisalchun@gmail.com"
              className="bg-black text-white px-8 py-4 font-black text-sm tracking-wider hover:bg-black/80 transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-xl"
            >
              <Mail className="w-5 h-5" />
              EMAIL ME
            </a>
            <a
              href="https://github.com/Rattnakvisal"
              className="border-4 border-black text-black px-8 py-4 font-black text-sm tracking-wider hover:bg-black hover:text-lime-400 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/chun-rattnakvisal-3a24a0361/"
              className="border-4 border-black text-black px-8 py-4 font-black text-sm tracking-wider hover:bg-black hover:text-lime-400 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              LINKEDIN
            </a>
          </div>

          <div className="text-sm font-bold tracking-wider">
            © 2026 ALL RIGHTS RESERVED
          </div>
        </div>
      </section>

      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Work+Sans:wght@300;400;500;700;900&display=swap");

        * {
          font-family: "Work Sans", sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }

        h1,
        h2,
        h3,
        button,
        .font-black {
          font-family: "Bebas Neue", sans-serif;
          font-weight: 900;
          letter-spacing: -0.02em;
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
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

        /* Smooth scroll for all transitions */
        * {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Hide scrollbar but keep functionality */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #000;
        }

        ::-webkit-scrollbar-thumb {
          background: #a3e635;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #84cc16;
        }

        /* Modal open animation */
        .modal-enter {
          animation: modalPop 260ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes modalPop {
          from {
            transform: translateY(12px) scale(0.985);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
