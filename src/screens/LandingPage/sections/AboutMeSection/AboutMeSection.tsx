import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
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
      url: "https://github.com/codebyniki",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-4 h-4 group-hover:text-white text-[#2a324b]" />,
      url: "https://www.instagram.com/nikola.stnc",
    },
  ];

  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
      <section
          ref={ref}
          id="about"
          className="scroll-mt-[80px] py-12 md:py-20 px-4 md:px-8 xl:px-24 2xl:px-32 w-full min-h-[calc(100vh-80px)] flex items-center"
      >
        <div className="relative w-full max-w-[1440px] mx-auto">
          {/* Blurred background elements */}
          <div className="absolute top-12 right-2 w-16 h-16 md:w-20 md:h-20 bg-[#3827ff] rounded-[40px] blur-[61.55px] z-0 will-change-transform" />
          <div className="absolute bottom-2 right-96 w-16 h-16 md:w-20 md:h-20 bg-[#0077ff] rounded-[40px] blur-[61.55px] z-0 will-change-transform" />

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left column */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <motion.h2
                  className="text-3xl md:text-5xl xl:text-6xl font-bold mb-10 text-[#2A324B] text-center lg:text-left"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6 }}
              >
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077ff] to-[#3827ff]">
                me
              </span>
              </motion.h2>

              <motion.p
                  className="text-[#2a324b] text-sm md:text-base xl:text-lg font-light font-poppins mb-6 text-center lg:text-left leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
              >
                Hi, I&apos;m Nikola—a frontend developer with a knack for turning ideas into fast, intuitive web apps.
                <br />
                <br />
                I recently graduated from{" "}
                <span className="font-medium">
                HTL St. Pölten (Informatik - Software Engineering)
              </span>
                , where I honed my skills in clean architecture and collaborative coding. Now I craft performant UIs with
                Flutter, React, and TypeScript.
              </motion.p>

              {/* Stats */}
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.4 }}
              >
                <Card className="w-full mb-6 rounded-[20px] bg-white/90 backdrop-blur-sm hover:bg-white transition duration-300">
                  <CardContent className="p-4 md:p-6 flex flex-col sm:flex-row items-stretch gap-4 sm:gap-0">
                    {stats.map((stat, index) => (
                        <React.Fragment key={stat.label}>
                          <div className="flex-1 flex flex-col items-center sm:items-start min-w-[80px]">
                            <div className="text-2xl md:text-3xl xl:text-4xl font-medium bg-gradient-to-b from-[#0077ff] to-[#3827ff] text-transparent bg-clip-text font-poppins">
                              {inView ? (
                                  <CountUp
                                      end={stat.value}
                                      duration={2.5}
                                      useEasing
                                      easingFn={(t, b, c, d) => {
                                        t /= d;
                                        return -c * t*(t-2) + b;
                                      }}
                                      suffix="+"
                                  />
                              ) : "0+"}

                            </div>
                            <div className="text-[#2a324ba6] text-sm md:text-base font-medium mt-1 text-center sm:text-left font-poppins">
                              {stat.label}
                            </div>
                          </div>
                          {index < stats.length - 1 && (
                              <Separator orientation="vertical" className="hidden sm:block h-auto w-px bg-gray-200 mx-4" />
                          )}
                        </React.Fragment>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Social links */}
              <motion.div
                  className="flex space-x-4 mb-4 justify-center lg:justify-start"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.5 }}
              >
                {socialLinks.map((link, index) => (
                    <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.name}
                        className="w-10 h-10 rounded-[20px] flex items-center justify-center border border-gray-200 bg-white cursor-pointer transition-all duration-500 hover:scale-110 hover:border-transparent hover:bg-gradient-to-r hover:from-[#0077ff] hover:to-[#3827ff] group"
                        whileTap={{ scale: 0.95 }}
                    >
                      {link.icon}
                    </motion.a>
                ))}
              </motion.div>

              <motion.div
                  className="font-poppins font-medium text-[#2a324b] text-sm md:text-base xl:text-lg text-center lg:text-left"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.6 }}
              >
                Let&apos;s build something cool together!
              </motion.div>
            </div>

            {/* Right column - Image */}
            <motion.div
                className="w-full lg:w-1/2 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.3 }}
            >
              <div className="relative w-full aspect-[3/2] max-w-[600px]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0077ff] to-[#3827ff] rounded-lg blur-xl opacity-20 scale-105 will-change-transform" />
                <img
                    className="relative w-full h-auto object-cover rounded-lg max-h-[400px] md:max-h-[500px] xl:max-h-[600px] 2xl:max-h-[700px] shadow-2xl"
                    alt="Profile"
                    src="/portfolio-img.jpg"
                    decoding="async"
                    loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
};
