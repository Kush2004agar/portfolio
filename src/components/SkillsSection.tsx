import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Database, 
  Code, 
  Globe, 
  Server,
  Wrench
} from "lucide-react";

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  color: string;
  skills: string[];
}

const SkillsSection: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      name: "AI / ML",
      icon: <Brain className="w-5 h-5" />,
      color: "text-purple-500",
      skills: [
        "PyTorch", "RAG Systems", "LLMs", "Vector Search",
        "Diffusion Models", "scikit-learn", "Deep Learning",
        "Time-Series Forecasting", "NLP", "Whisper ASR"
      ]
    },
    {
      name: "Backend",
      icon: <Server className="w-5 h-5" />,
      color: "text-blue-500",
      skills: [
        "Python", "FastAPI", "Docker", "Linux",
        "SQL", "REST APIs", "Flask"
      ]
    },
    {
      name: "Data Systems",
      icon: <Database className="w-5 h-5" />,
      color: "text-green-500",
      skills: [
        "ChromaDB", "Semantic Retrieval", "Metadata Indexing",
        "MongoDB", "PostgreSQL", "Pandas", "NumPy"
      ]
    },
    {
      name: "Frontend",
      icon: <Globe className="w-5 h-5" />,
      color: "text-cyan-500",
      skills: [
        "Next.js", "React", "TailwindCSS", "TypeScript", "JavaScript"
      ]
    },
    {
      name: "Infrastructure & Tools",
      icon: <Wrench className="w-5 h-5" />,
      color: "text-orange-500",
      skills: [
        "Git", "Docker", "API Systems", "GPU Workflows",
        "TensorBoard", "Jupyter", "VS Code", "CI/CD"
      ]
    }
  ];

  return (
    <section id="skills" className="container py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Core competencies across AI/ML systems, backend engineering, data infrastructure, and modern frontend development.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Card key={category.name} variant="interactive">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <span className={category.color}>{category.icon}</span>
                {category.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
