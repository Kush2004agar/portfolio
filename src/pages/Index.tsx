import React, { Suspense } from "react";
import HeroPortrait from "@/components/HeroPortrait";
import Navigation from "@/components/Navigation";
import ThemeToggle from "@/components/ThemeToggle";
const SkillsSection = React.lazy(() => import("@/components/SkillsSection"));
const ProjectShowcase = React.lazy(() => import("@/components/ProjectShowcase"));
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, Phone, MapPin, Award, Briefcase, BookOpen, GraduationCap } from "lucide-react";

const Index = () => {
  const person = {
    name: "Kushagar Singh Ahuja",
    title: "Software Development Engineer (Full-Stack / ML)",
    email: "ahujakushagar5@gmail.com",
    phone: "+91 9816124878",
    github: "https://github.com/Kush2004agar",
    linkedin: "https://www.linkedin.com/in/kushagar-singh-ahuja-4aa007251/?trk=public-profile-join-page",
    location: "Chennai, Tamil Nadu",
  };

  const profileImage = "/lovable-uploads/5bbfc40e-978f-4aa8-aaf7-5b0b522d0148.png";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    email: `mailto:${person.email}`,
    telephone: person.phone,
    sameAs: [person.github, person.linkedin],
    jobTitle: "AI Systems Engineer — Retrieval Infrastructure, LLM Pipelines, Intelligent Systems",
    image: profileImage,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
  };

  const achievements = [
    {
      title: "Nokia AI Intern",
      description: "Enterprise LLM & RAG Systems",
      icon: <Award className="w-5 h-5" />,
      color: "text-green-600"
    },
    {
      title: "Published Researcher",
      description: "ICACCT'26 — Flood Risk Intelligence",
      icon: <Award className="w-5 h-5" />,
      color: "text-blue-600"
    },
    {
      title: "5+ AI/ML Systems",
      description: "RAG, Forecasting, Diffusion, NLP",
      icon: <Award className="w-5 h-5" />,
      color: "text-purple-600"
    }
  ];

  return (
    <>
      <Navigation />
      <ThemeToggle />
      
      <header id="home" className="border-b bg-paper pt-16">
        <div className="container py-10 md:py-16">
          <div className="flex items-start justify-between gap-10">
            <div className="max-w-2xl space-y-4">
              <p className="text-sm tracking-widest text-muted-foreground uppercase">Portfolio</p>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
                AI SYSTEMS <span className="text-gradient-brand">ENGINEER</span>
              </h1>
              <p className="text-muted-foreground text-lg mt-2">
                Building Retrieval Infrastructure, LLM Pipelines, and Intelligent Systems
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {["RAG", "ML Infrastructure", "Backend Systems", "AI Research"].map((tag) => (
                  <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full border border-border text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Achievements */}
              <div className="flex flex-wrap gap-4 pt-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className={achievement.color}>{achievement.icon}</div>
                    <div>
                      <div className="font-semibold">{achievement.title}</div>
                      <div className="text-muted-foreground">{achievement.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <a href="/KUSHAGAR SINGH AHUJA.pdf" download="Kushagar_Singh_Ahuja_Resume.pdf">
                  <Button variant="hero">
                    <Download className="w-4 h-4 mr-2" /> Download Resume
                  </Button>
                </a>
                <a href={person.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    <Github className="w-4 h-4 mr-2" /> GitHub
                  </Button>
                </a>
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                  </Button>
                </a>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href={`mailto:${person.email}`} className="hover:text-primary transition-colors">
                    {person.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href={`tel:${person.phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">
                    {person.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <HeroPortrait
                src={profileImage}
                alt="Portrait photo of Kushagar Singh Ahuja with background removed"
                className="w-[280px] h-[340px] rounded-lg shadow-elevated object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      <section id="whoami" className="border-b bg-muted/30">
        <div className="container py-8 md:py-10">
          <h2 className="text-xl md:text-2xl font-bold mb-3">Who Am I</h2>
          <p className="text-muted-foreground leading-relaxed max-w-4xl text-sm md:text-base">
            Applied AI/ML engineer focused on GenAI systems, RAG pipelines, backend AI integration, and inference optimization.
            Experienced in building and experimenting with retrieval systems, diffusion model fine-tuning, and scalable AI workflows using modern ML
            infrastructure tools.
          </p>
        </div>
      </section>

      <main>
        <Suspense fallback={<div className="container py-12 text-muted-foreground">Loading projects…</div>}>
          <ProjectShowcase />
        </Suspense>

        <Suspense fallback={<div className="container py-12 text-muted-foreground">Loading skills…</div>}>
          <SkillsSection />
        </Suspense>

        {/* Experience Section */}
        <section id="experience" className="container py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional experience building enterprise-scale AI systems and infrastructure.
            </p>
          </div>
          <Card className="transition-shadow hover:shadow-elevated">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="space-y-3 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <div>
                      <h3 className="text-xl font-semibold">Nokia</h3>
                      <p className="text-sm text-muted-foreground">AI / ML Engineer Intern</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">Feb 2025 — Present</span>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">&#8226;</span>
                      Working on enterprise-scale LLM and RAG systems for technical document intelligence
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">&#8226;</span>
                      Developing retrieval pipelines using semantic search, reranking, and metadata-aware indexing
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">&#8226;</span>
                      Contributing to backend optimization, retrieval evaluation, and scalable AI infrastructure
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["RAG", "LLMs", "Semantic Search", "Reranking", "Python", "FastAPI"].map((tech) => (
                      <span key={tech} className="text-xs font-medium px-2 py-0.5 rounded-full border border-border text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Research Section */}
        <section id="research" className="container py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Research</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Peer-reviewed publications in applied AI and computational modeling.
            </p>
          </div>
          <Card className="transition-shadow hover:shadow-elevated">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-blue-500" />
                  </div>
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-lg font-semibold leading-snug">
                    A Real-Time AI-Assisted Latent Data Assimilation Framework for Flood Risk Intelligence and Hydrological Monitoring
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    ICACCT'26 — Francis Xavier Engineering College (2026)
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1.5 pt-1">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">&#8226;</span>
                      Deep learning-based hydrological forecasting using LSTM, BiGRU, and Attention architectures
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">&#8226;</span>
                      Multivariate sequence prediction with discharge, precipitation, and weather feature fusion
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">&#8226;</span>
                      Evaluated with standard regression metrics (MAE, RMSE, MAPE, R²) across multiple temporal windows
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {["Deep Learning", "Time-Series", "PyTorch", "Hydrology", "Attention Mechanism"].map((tag) => (
                      <span key={tag} className="text-xs font-medium px-2 py-0.5 rounded-full border border-border text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="education" className="container py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Education</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Formal academics and continuous learning that shape my engineering foundation.
            </p>
          </div>
          <Card className="transition-shadow hover:shadow-elevated">
            <CardContent className="p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Formal Education</h3>
                  <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                    <li>
                      B.Tech (CSE): <span className="font-medium">SRM IST - Ramapuram</span> — <span className="font-medium">Expected 2026</span>
                    </li>
                    <li>
                      Class 12: <span className="font-medium">Career Point Gurukul, Mohali (Chandigarh)</span> — <span className="font-medium">2022</span>
                    </li>
                    <li>
                      Class 10: <span className="font-medium">DAV Centenary Public School, Mandi (H.P.)</span> — <span className="font-medium">2020</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Certifications</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <GraduationCap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Oracle Cloud Infrastructure</span> — Foundational Certification (2025)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <GraduationCap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Building AI-Powered Search with MongoDB Vector Search</span> — MongoDB University (2024)
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="about" className="container py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              AI Systems Engineer focused on retrieval infrastructure, ML pipelines, and intelligent backend services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="transition-shadow hover:shadow-elevated">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Background</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    Currently an AI/ML Engineer Intern at Nokia, working on enterprise-scale retrieval and LLM systems. 
                    Pursuing B.Tech in Computer Science at SRM IST Ramapuram with a focus on applied AI research.
                  </p>
                  <div className="flex items-center gap-3 pt-1">
                    <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <span>{person.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-elevated">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Engineering Focus</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    I build retrieval-augmented generation systems, deep learning pipelines for time-series forecasting,
                    and production ML infrastructure. My work spans from designing chunking strategies and reranking
                    passes to training diffusion models and deploying scoring engines.
                  </p>
                  <p>
                    Interested in pushing the boundaries of how AI systems retrieve, reason over, and generate
                    knowledge from large-scale technical corpora.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contact" className="container py-8 md:py-10" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="sr-only">
            Contact me
          </h2>
          <div className="rounded-2xl p-[1px] bg-gradient-to-r from-purple-500/40 via-blue-500/40 to-cyan-500/40 shadow-elevated">
            <div className="rounded-2xl bg-background/95 backdrop-blur px-4 sm:px-6 py-5">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Communication Command Center</p>
                  <p className="text-base sm:text-lg font-semibold">Let&apos;s build something real.</p>
                </div>
                <span className="inline-flex items-center gap-2 text-xs text-muted-foreground border rounded-full px-3 py-1">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  Available for AI/ML collaborations
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 overflow-hidden">
                <a
                  href={`mailto:${person.email}`}
                  className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm text-primary hover:bg-muted transition-colors"
                >
                  <Mail className="w-4 h-4" aria-hidden />
                  {person.email}
                </a>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm text-primary hover:bg-muted transition-colors"
                >
                  <Linkedin className="w-4 h-4" aria-hidden />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {person.name}. All rights reserved.
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
};

export default Index;
