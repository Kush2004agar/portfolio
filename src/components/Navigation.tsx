import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["home", "whoami", "systems", "skills", "experience", "research", "education", "about", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "whoami", label: "Who Am I" },
    { id: "systems", label: "Systems" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "research", label: "Research" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const NavLinks = () => (
    <nav className="hidden md:flex items-center gap-6">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={`text-sm font-medium transition-colors hover:text-primary ${
            activeSection === item.id ? "text-primary" : "text-muted-foreground"
          }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <button
          onClick={() => scrollToSection("home")}
          className="text-xl font-bold text-gradient-brand cursor-pointer"
        >
          Kushagar
        </button>

        <NavLinks />

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    // Close sheet after clicking
                    const sheetCloseButton = document.querySelector('[data-radix-sheet-close]') as HTMLButtonElement;
                    if (sheetCloseButton) sheetCloseButton.click();
                  }}
                  className={`text-left text-lg font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navigation;
