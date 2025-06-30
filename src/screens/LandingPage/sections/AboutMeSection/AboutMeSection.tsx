import React, { useEffect } from "react";
import { Card, CardContent } from "../../../../components/ui/card.tsx";
import { Separator } from "../../../../components/ui/separator.tsx";
import { Linkedin, Github, Instagram } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const AboutMeSection = (): JSX.Element => {
  const stats = [
    { value: 2, label: "Experiences" },
    { value: 10, label: "Project done" },
    { value: 10, label: "Happy Clients" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-4 h-4 group-hover:text-white text-[#2a324b]" />,
      url: "https://www.linkedin.com/in/nikola-stanic-799139222/",
    },
    {
      name: "GitHub",
      icon: <Github className="w-4 h-4 group-hover:text-white text-[#2a324b]" />,
      url: "https://github.com/nikiorihatza",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-4 h-4 group-hover:text-white text-[#2a324b]" />,
      url: "https://www.instagram.com/nikola.stnc",
    },
  ];

  const { ref, inView, entry } = useInView({ triggerOnce: false, threshold: 0.51 });

  useEffect(() => {
    if (inView) {
      console.debug("[DEBUG] AboutMeSection is in view.");
    }
    if (entry) {
      console.debug("[DEBUG] IntersectionObserver Entry:", {
        id: entry.target.id,
        ratio: entry.intersectionRatio,
        boundingClientRect: entry.boundingClientRect,
        rootBounds: entry.rootBounds,
      });
    }
  }, [inView, entry]);

  return (
      <section
          ref={ref}
          id="about"
          className="relative flex items-center w-full min-h-screen scroll-mt-[100px] py-12 md:py-20 px-4 md:px-8 xl:px-24 2xl:px-32"
      >
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-[1440px] mx-auto"
            layout
        >
        {/* Background glow */}
          <div className="w-16 h-16 md:w-20 md:h-20 absolute top-12 right-2 bg-[#3827ff] rounded-[40px] blur-[61.55px] z-0" />
          <div className="w-16 h-16 md:w-20 md:h-20 absolute bottom-2 right-96 bg-[#0077ff] rounded-[40px] blur-[61.55px] z-0" />

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left column */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold mb-10 text-[#2A324B] text-center lg:text-left">
              About {" "}
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#0077ff] to-[#3827ff]">
                me
              </span>
              </h2>

              <div className="text-[#2a324b] text-sm md:text-base xl:text-lg 2xl:text-xl font-light font-poppins mb-6 md:mb-8 text-center lg:text-left leading-relaxed">
                <p>
                  Hi, I&apos;m Nikola—a frontend developer with a knack for turning ideas into fast, intuitive web apps.
                  <br />
                  <br />
                  I recently graduated from {" "}
                  <span className="font-medium">
                  HTL St. Pölten (Informatik - Software Engineering)
                </span>,
                  where I honed my skills in problem-solving, clean architecture, and collaborative coding. Now, I
                  channel that precision into crafting pixel-perfect UIs with Flutter, React, JavaScript, and CSS,
                  always aiming for performance and accessibility.
                </p>
              </div>

              {/* Stats card */}
              <Card className="w-full mb-6 md:mb-8 rounded-[20px] bg-white">
                <CardContent className="p-4 md:p-6 flex flex-col sm:flex-row items-stretch gap-4 sm:gap-0">
                  {stats.map((stat, index) => (
                      <React.Fragment key={stat.label}>
                        <div className="flex-1 flex flex-col items-center sm:items-start">
                          <div className="text-2xl md:text-3xl xl:text-4xl font-medium bg-gradient-to-b from-[#0077ff] to-[#3827ff] text-transparent bg-clip-text font-poppins">
                            {inView ? <CountUp end={stat.value} duration={2} suffix="+" /> : "0+"}
                          </div>
                          <div className="text-[#2a324ba6] text-sm md:text-base xl:text-lg font-medium mt-1 md:mt-2 text-center sm:text-left font-poppins">
                            {stat.label}
                          </div>
                        </div>
                        {index < stats.length - 1 && (
                            <Separator
                                orientation="vertical"
                                className="hidden sm:block h-auto w-px bg-gray-200 mx-4"
                            />
                        )}
                      </React.Fragment>
                  ))}
                </CardContent>
              </Card>

              {/* Social media links */}
              <div className="flex space-x-4 mb-4 justify-center lg:justify-start">
                {socialLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.name}
                        className="w-10 h-10 rounded-[20px] flex items-center justify-center border border-gray-200 bg-white cursor-pointer transition-all duration-500 ease-in-out hover:scale-110 hover:border-transparent hover:bg-gradient-to-r hover:from-[#0077ff] hover:to-[#3827ff] group"
                    >
                      {link.icon}
                    </a>
                ))}
              </div>

              {/* CTA */}
              <div className="font-poppins font-medium text-[#2a324b] text-sm md:text-base xl:text-lg text-center lg:text-left">
                Let&apos;s build something cool together!
              </div>
            </div>

            {/* Right column - Image */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <img
                  className="w-full h-auto object-cover rounded-lg max-h-[400px] md:max-h-[500px] xl:max-h-[600px] 2xl:max-h-[700px]"
                  alt="Profile"
                  src="/image-1.png"
              />
            </div>
          </div>
        </motion.div>
      </section>
  );
};
