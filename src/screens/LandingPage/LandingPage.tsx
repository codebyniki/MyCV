import { useEffect, useState } from "react";
import { HeartIcon } from "lucide-react";
import { AboutMeSection } from "../LandingPage/sections/AboutMeSection";
import { ContactFormSection } from "../LandingPage/sections/ContactFormSection";
import { HeroSection } from "../LandingPage/sections/HeroSection";
import { ProjectsGallerySection } from "../LandingPage/sections/ProjectsGallerySection";
import { ResumeDownloadSection } from "../LandingPage/sections/ResumeDownloadSection";
import { SkillsOverviewSection } from "../LandingPage/sections/SkillsOverviewSection";
import { ImprintPage } from "../ImprintPage/ImprintPage.tsx";
import { Separator } from "../../components/ui/separator";
import { ScrollToTopButton } from "../../components/ScrollToTopButton";
import { motion, AnimatePresence } from "framer-motion";

export const LandingPage = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [showImprint, setShowImprint] = useState(false);

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
      const yOffset = -100;
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
          const distanceFromTop = Math.abs(rect.top - 100);
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

  if (showImprint) {
    return <ImprintPage onBack={() => setShowImprint(false)} />;
  }

  return (
      <div className="bg-white scroll-smooth overflow-x-hidden relative">
        {/* Animated background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <motion.div
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#0077ff]/10 to-[#3827ff]/10 rounded-full blur-3xl"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
          />
          <motion.div
              className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-r from-[#3827ff]/10 to-[#0077ff]/10 rounded-full blur-3xl"
              animate={{
                x: [0, -80, 0],
                y: [0, 60, 0],
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 5,
              }}
          />
        </div>

        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-lg"
                    : "bg-transparent"
            }`}
        >
          <nav className="flex justify-between items-center px-4 md:px-8 lg:px-[94px] py-4 md:py-6 max-w-[1440px] mx-auto">
            <div className="hidden md:flex items-center gap-8 mx-auto">
              {sections.map((item, index) => (
                  <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`[font-family:'Montserrat',Helvetica] font-semibold text-base transition-all duration-300 ${
                          activeSection === item.id
                              ? "text-[#3827FF] scale-110"
                              : "text-[#2a324b] hover:text-blue-600"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.button>
              ))}
            </div>
            <motion.button
                onClick={() => scrollToSection("contact")}
                className="hidden md:inline-flex w-[148px] h-[35px] rounded-[5px] bg-gradient-to-r from-[#0077ff] to-[#3827ff] text-white text-sm font-semibold items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
            >
              Hire me
            </motion.button>

            <div className="md:hidden ml-auto">
              <motion.button
                  className="flex flex-col items-end gap-1 p-2 group"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle menu"
                  whileTap={{ scale: 0.95 }}
              >
                <motion.div
                    className="w-4 h-[3px] rounded-full bg-gradient-to-r from-[#0077ff] to-[#3827ff] transition-all duration-300"
                    animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 6 : 0 }}
                />
                <motion.div
                    className="w-6 h-[3px] rounded-full bg-gradient-to-r from-[#0077ff] to-[#3827ff] transition-all duration-300"
                    animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -6 : 0 }}
                />
              </motion.button>
            </div>
          </nav>

          <AnimatePresence>
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 w-full max-w-[95%] px-4 py-5 z-40 rounded-b-2xl bg-white/90 backdrop-blur-xl shadow-2xl"
                >
                  <div className="flex flex-col space-y-5 text-center">
                    {sections.map((item, index) => (
                        <motion.button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`text-base font-semibold transition-all duration-300 ${
                                activeSection === item.id ? "text-[#3827FF]" : "text-[#2a324b]"
                            } hover:text-[#0077ff]`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                          {item.label}
                        </motion.button>
                    ))}
                    <motion.button
                        onClick={() => scrollToSection("contact")}
                        className="mt-4 block w-full text-center rounded-md bg-gradient-to-r from-[#0077ff] to-[#3827ff] text-white text-sm font-semibold py-3 shadow-md transition-all duration-300 hover:opacity-90 hover:scale-105"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                      Hire me
                    </motion.button>
                  </div>
                </motion.div>
            )}
          </AnimatePresence>
        </motion.header>

        <main className="flex flex-col w-full pt-[100px] relative">
          <HeroSection />
          <AboutMeSection />
          <ProjectsGallerySection />
          <SkillsOverviewSection />
          <ResumeDownloadSection />
          <ContactFormSection />
        </main>

        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full px-4 md:px-8 lg:px-[94px] pb-[31px] max-w-[1440px] mx-auto"
        >
          <Separator className="w-full h-[5px]" />
          <div className="mt-[30px] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-sm md:text-xl text-center md:text-left">
              © 2025 – Built with{" "}
              <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block"
              >
                <HeartIcon className="inline w-4 h-4 md:w-6 md:h-6 text-[#3827FF] mr-1" />
              </motion.span>{" "}
              by Nikola Stanic
            </p>
            <div className="flex gap-6 text-sm text-[#2a324b]/70">
              <button
                  onClick={() => setShowImprint(true)}
                  className="hover:text-[#0077ff] transition-colors duration-300 font-poppins"
              >
                Imprint
              </button>
              <button
                  onClick={() => setShowImprint(true)}
                  className="hover:text-[#0077ff] transition-colors duration-300 font-poppins"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </motion.footer>

        <ScrollToTopButton />
      </div>
  );
};