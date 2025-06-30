import { useEffect, useState } from "react";
import { HeartIcon } from "lucide-react";
import { AboutMeSection } from "./sections/AboutMeSection";
import { ContactFormSection } from "./sections/ContactFormSection";
import { HeroSection } from "./sections/HeroSection";
import { ProjectsGallerySection } from "./sections/ProjectsGallerySection";
import { ResumeDownloadSection } from "./sections/ResumeDownloadSection";
import { SkillsOverviewSection } from "./sections/SkillsOverviewSection";
import { Separator } from "../../components/ui/separator";
import { ScrollToTopButton } from "../../components/ScrollToTopButton.tsx";

export const LandingPage = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const sections = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "projects", label: "PROJECTS" },
    { id: "skills", label: "SKILLS" },
    { id: "resume", label: "RESUME" },
    { id: "contact", label: "CONTACT" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100; // Adjust for fixed header height
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      let closestSection = "";
      let minDistance = Infinity;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const distanceFromTop = Math.abs(rect.top - 100); // Adjust for nav offset

          if (distanceFromTop < minDistance && rect.top <= window.innerHeight) {
            minDistance = distanceFromTop;
            closestSection = section.id;
          }
        }
      }

      if (closestSection) {
        setActiveSection(closestSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <div className="bg-white scroll-smooth">
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? "backdrop-blur-md bg-white/70 border-b border-gray-200" : "bg-transparent"
            }`}
        >
          <nav className="flex justify-between items-center px-4 md:px-8 lg:px-[94px] py-4 md:py-6">
            <div className="hidden md:flex items-center gap-8 mx-auto">
              {sections.map((item) => (
                  <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`[font-family:'Montserrat',Helvetica] font-semibold text-base transition-colors ${
                          activeSection === item.id ? "text-[#3827FF]" : "text-[#2a324b]"
                      } hover:text-blue-600`}
                  >
                    {item.label}
                  </button>
              ))}
            </div>

            <button
                onClick={() => scrollToSection("contact")}
                className="hidden md:inline-flex w-[148px] h-[35px] rounded-[5px] bg-gradient-to-r from-[#0077ff] to-[#3827ff] text-white text-sm font-semibold items-center justify-center"
            >
              Hire me
            </button>

            {/* Mobile Burger Menu */}
            <div className="md:hidden ml-auto">
              <button
                  className="flex flex-col items-end gap-1 p-2 group"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle menu"
              >
                <div className="w-4 h-[3px] rounded-full bg-gradient-to-r from-[#0077ff] to-[#3827ff] transition-all duration-300" />
                <div className="w-6 h-[3px] rounded-full bg-gradient-to-r from-[#0077ff] to-[#3827ff] transition-all duration-300" />
              </button>
            </div>
          </nav>

          {isMobileMenuOpen && (
              <div className="absolute top-full left-0 w-full px-6 py-6 z-40 rounded-b-3xl bg-white/70 backdrop-blur-xl shadow-2xl animate-fade-down">
                <div className="flex flex-col space-y-5 text-center">
                  {sections.map((item) => (
                      <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={`text-base font-semibold transition-all ${
                              activeSection === item.id ? "text-[#3827FF]" : "text-[#2a324b]"
                          } hover:text-[#0077ff]`}
                      >
                        {item.label}
                      </button>
                  ))}

                  <button
                      onClick={() => scrollToSection("contact")}
                      className="mt-4 block w-full text-center rounded-md bg-gradient-to-r from-[#0077ff] to-[#3827ff] text-white text-sm font-semibold py-3 shadow-md transition-all hover:opacity-90"
                  >
                    Hire me
                  </button>
                </div>
              </div>
          )}
        </header>

        <main className="flex flex-col w-full pt-[100px]">
          <HeroSection />
          <AboutMeSection />
          <ProjectsGallerySection />
          <SkillsOverviewSection />
          <ResumeDownloadSection />
          <ContactFormSection />
        </main>

        <footer className="w-full px-4 md:px-8 lg:px-[94px] pb-[31px]">
          <Separator className="w-full h-[5px]" />
          <div className="mt-[30px] flex items-center justify-center md:justify-start">
            <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-sm md:text-xl text-center md:text-left">
              © 2025 – Built with{" "}
              <HeartIcon className="inline w-4 h-4 md:w-6 md:h-6 text-[#3827FF] mr-1" />
              by Nikola Stanic
            </p>
          </div>
        </footer>
        <ScrollToTopButton />
      </div>
  );
};
