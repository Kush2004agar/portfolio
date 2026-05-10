import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  ExternalLink, 
  Github, 
  Eye, 
  Brain,
  Database,
  Cpu,
  AudioLines,
  Shield
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  category: string;
  githubUrl: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
}

const ProjectShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "rag-hybrid",
      title: "Advanced Hybrid RAG System",
      subtitle: "Hierarchical Retrieval-Augmented Generation for Technical Document Intelligence",
      description:
        "Designed a metadata-aware retrieval pipeline using hierarchical chunk-tree representations, query routing (tree/vector/lexical/hybrid), cross-encoder reranking, and context compression. The system ingests PDFs into structured node graphs, retrieves via ChromaDB vector store, and generates answers through Google Gemini with caching and fallback strategies.",
      technologies: ["Python", "FastAPI", "ChromaDB", "LLMs", "Docker", "Gemini API"],
      category: "AI/ML",
      githubUrl: "https://github.com/Kush2004agar/RAG-vector-hybrid-model",
      highlights: [
        "Hierarchical chunk-tree ingestion with parent/child node summaries",
        "Query routing to select optimal retrieval strategy per query",
        "Cross-encoder reranking with sentence-transformers on candidate pools",
        "Context filtering, compression, and deduplication before LLM generation",
        "Retrieval caching for repeated queries, configurable via environment",
        "Evaluation tooling with Precision@K, Recall@K, MRR, and nDCG"
      ],
      metrics: [
        { label: "Retrieval Strategies", value: "4 modes" },
        { label: "Reranking Passes", value: "Up to 3×" },
        { label: "Scales To", value: "1000+ PDFs" }
      ]
    },
    {
      id: "flood-forecasting",
      title: "Flood Risk Intelligence & River Discharge Forecasting",
      subtitle: "Deep Learning Pipeline for Hydrological Time-Series Prediction",
      description:
        "Built a multivariate time-series forecasting pipeline for River Aire discharge prediction. Implemented hybrid BiGRU + Attention architectures for temporal sequence learning, with comprehensive evaluation using standard regression metrics for flood monitoring scenarios.",
      technologies: ["PyTorch", "Deep Learning", "Time-Series", "NumPy", "Matplotlib"],
      category: "AI/ML",
      githubUrl: "https://github.com/Kush2004agar/River-Aire-discharge-modelling",
      highlights: [
        "Multivariate forecasting with discharge, precipitation, and weather features",
        "Hybrid BiGRU + Attention architecture for temporal sequence modeling",
        "Feature engineering with lag variables and rolling statistics",
        "Published as research paper at ICACCT'26 conference",
        "Evaluated with MAE, RMSE, MAPE, and R² metrics"
      ],
      metrics: [
        { label: "Architecture", value: "BiGRU+Attn" },
        { label: "Publication", value: "ICACCT'26" },
        { label: "Features", value: "Multivariate" }
      ]
    },
    {
      id: "diffusion-lora",
      title: "Diffusion Model LoRA Pipeline",
      subtitle: "Parameter-Efficient Fine-Tuning for Stable Diffusion Image Generation",
      description:
        "Engineered a complete LoRA fine-tuning pipeline for Stable Diffusion, targeting synthetic biometric image generation from 6,000 source images. Integrated data augmentation, validation tracking, latent caching for faster training, EMA weight averaging, and FID evaluation support.",
      technologies: ["PyTorch", "Stable Diffusion", "LoRA", "TensorBoard", "CUDA"],
      category: "AI/ML",
      githubUrl: "https://github.com/Kush2004agar/palm-lora-training",
      highlights: [
        "Parameter-efficient LoRA fine-tuning on Stable Diffusion base models",
        "Data augmentation pipeline with caption generation for training images",
        "Latent caching for accelerated training iterations",
        "EMA tracking for UNet LoRA weights with robust checkpointing",
        "FID evaluation support via torch-fidelity",
        "Diverse generation flow producing 54,000 synthetic images from 6,000 source"
      ],
      metrics: [
        { label: "Source Images", value: "6,000" },
        { label: "Generated", value: "54,000" },
        { label: "Training", value: "~28-80h RTX 3050 4GB (optimized settings)" }
      ]
    },
    {
      id: "grammar-scoring",
      title: "Grammar Scoring Engine",
      subtitle: "Automated Grammar Assessment for Spoken English Audio",
      description:
        "Built an explainable grammar scoring system that transcribes spoken English via Whisper ASR, extracts 23 linguistic features using spaCy and LanguageTool, and predicts grammar scores (1-5) with Ridge Regression. Designed with ethical safeguards including bias-awareness documentation and human-oversight recommendations.",
      technologies: ["Python", "Whisper", "spaCy", "LanguageTool", "scikit-learn"],
      category: "NLP",
      githubUrl: "https://github.com/Kush2004agar/Grammar-scoring-engine",
      highlights: [
        "End-to-end pipeline: audio → transcription → cleaning → feature extraction → scoring",
        "23 grammar features including error counts, clause complexity, and agreement analysis",
        "Disfluency-aware text cleaning preserving actual grammar errors",
        "Comprehensive error analysis with band-wise performance breakdown",
        "Ethical framework with bias documentation and fairness guidelines",
        "10-phase development methodology with reproducible notebooks"
      ],
      metrics: [
        { label: "Features", value: "23" },
        { label: "MAE", value: "0.59 pts" },
        { label: "Training Set", value: "409 samples" }
      ]
    },
    {
      id: "fraud-detection",
      title: "Fraud Detection ML System",
      subtitle: "Real-Time Anomaly Detection for Financial Transaction Analysis",
      description:
        "Developed a classification pipeline for detecting fraudulent financial transactions using ensemble methods. Applied SMOTE for class imbalance correction, engineered domain-specific features, and optimized hyperparameters across Random Forest and XGBoost models to achieve high detection rates with minimal false positives.",
      technologies: ["Python", "scikit-learn", "XGBoost", "SMOTE", "Pandas"],
      category: "AI/ML",
      githubUrl: "https://github.com/Kush2004agar/fraud-detection",
      highlights: [
        "Ensemble methods combining Random Forest and XGBoost classifiers",
        "SMOTE oversampling to handle extreme class imbalance (0.1% fraud rate)",
        "Feature engineering for transaction pattern analysis",
        "Hyperparameter optimization for precision-recall trade-off",
        "Real-time inference pipeline with sub-100ms latency"
      ],
      metrics: [
        { label: "Accuracy", value: "95%" },
        { label: "Latency", value: "<100ms" },
        { label: "False Positive", value: "~2%" }
      ]
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "AI/ML": return <Brain className="w-4 h-4" />;
      case "NLP": return <AudioLines className="w-4 h-4" />;
      default: return <Cpu className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI/ML": return "bg-gradient-to-r from-purple-500 to-pink-500";
      case "NLP": return "bg-gradient-to-r from-emerald-500 to-teal-500";
      default: return "bg-gradient-to-r from-blue-500 to-cyan-500";
    }
  };

  return (
    <section id="systems" className="container py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Systems & Infrastructure</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Production-grade AI systems spanning retrieval infrastructure, deep learning pipelines, and intelligent backend services.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.id} variant="interactive" className="overflow-hidden">
            <div className={`h-2 ${getCategoryColor(project.category)}`} />
            
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <div className={`${getCategoryColor(project.category)} text-white px-2.5 py-0.5 rounded-full text-xs font-medium flex items-center gap-1`}>
                  {getCategoryIcon(project.category)}
                  {project.category}
                </div>
              </div>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{project.subtitle}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {project.technologies.slice(0, 4).map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 4 && (
                  <Badge variant="outline" className="text-xs">
                    +{project.technologies.length - 4} more
                  </Badge>
                )}
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground line-clamp-3">
                {project.description}
              </p>

              {project.metrics && (
                <div className="flex flex-wrap gap-3">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="text-sm font-semibold">{m.value}</div>
                      <div className="text-xs text-muted-foreground">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => setSelectedProject(project)}
                >
                  <Eye className="w-4 h-4 mr-1" />
                  View Details
                </Button>
                
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  {getCategoryIcon(selectedProject.category)}
                  {selectedProject.title}
                </DialogTitle>
                <p className="text-sm text-muted-foreground">{selectedProject.subtitle}</p>
              </DialogHeader>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Overview</h3>
                  <p className="text-muted-foreground">{selectedProject.description}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Technical Highlights</h3>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">&#8226;</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedProject.metrics && (
                  <div>
                    <h3 className="font-semibold mb-2">Key Metrics</h3>
                    <div className="grid grid-cols-3 gap-4">
                      {selectedProject.metrics.map((m) => (
                        <div key={m.label} className="text-center p-3 bg-muted rounded-lg">
                          <div className="text-lg font-bold">{m.value}</div>
                          <div className="text-xs text-muted-foreground">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-2">
                  <Button asChild>
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectShowcase;
