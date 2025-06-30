import { Button } from "../../../../components/ui/button.tsx";
import { Card } from "../../../../components/ui/card.tsx";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const ProjectsGallerySection = (): JSX.Element => {
  const projects = [
    { id: 1, image: "/STANITEC.png", alt: "Stanitec", url: "https://stanitec.at" },
    { id: 2, image: "/RKZ.png", alt: "Rkz", url: "https://rkz-design.gmbh" },
    { id: 3, image: "/TobyStrix.png", alt: "Toby Strix", url: "https://tobystrix.com" },
    { id: 4, image: "", alt: "Project placeholder", url: "" },
  ];

  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  return (
      <section
          ref={ref}
          className="scroll-mt-[120px] w-full min-h-screen py-12 md:py-20 px-4 md:px-8 xl:px-24 2xl:px-32"
          id="projects"
      >
        <div className="min-h-[800px] flex items-start justify-center">
          <AnimatePresence>
            {inView && (
                <motion.div
                    key="projects-section"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center max-w-[1440px] mx-auto w-full"
                >
                {/* Heading */}
                <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold mb-6 text-[#2A324B]">
                  My{" "}
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#0077ff] to-[#3827ff]">
                    Projects
                  </span>
                </h2>
                <p className="font-light text-sm md:text-base xl:text-lg 2xl:text-xl text-[#2a324b] text-center mb-8 max-w-md font-poppins">
                  Selected work — from concept to deployed product.
                </p>

                {/* Project grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-6 w-full mb-8">
                  {projects.map((project) => (
                      <Card
                          key={project.id}
                          className="overflow-hidden rounded-[15px] shadow-md hover:shadow-lg transition-shadow cursor-pointer p-0"
                      >
                        {project.image ? (
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                              <img
                                  className="w-full h-[300px] md:h-[360px] xl:h-[400px] object-cover hover:scale-105 transition-transform duration-300"
                                  alt={project.alt}
                                  src={project.image}
                              />
                            </a>
                        ) : (
                            <div className="w-full h-[300px] md:h-[360px] xl:h-[400px] flex items-center justify-center">
                      <span className="text-gray-400 text-sm md:text-base">
                        Coming Soon
                      </span>
                            </div>
                        )}
                      </Card>
                  ))}
                </div>

                {/* Show more button */}
                  <Button
                      asChild
                      variant="link"
                      className="bg-gradient-to-r from-[#0077ff] to-[#3827ff] bg-clip-text text-transparent font-semibold text-sm md:text-base hover:opacity-80 transition-opacity"
                  >
                    <a
                        href="https://github.com/nikiorihatza"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      SHOW MORE
                    </a>
                  </Button>
                </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
  );
};
