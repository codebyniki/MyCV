import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const ProjectsGallerySection = (): JSX.Element => {
  const projects = [
    {
      id: 1,
      image: "/STANITEC.png",
      alt: "Stanitec",
      url: "https://stanitec.at",
      title: "Stanitec"
    },
    {
      id: 2,
      image: "/RKZ.png",
      alt: "RKZ Design",
      url: "https://rkz-design.gmbh",
      title: "RKZ Design"
    },
    {
      id: 3,
      image: "/TobyStrix.png",
      alt: "Toby Strix",
      url: "https://tobystrix.com",
      title: "Toby Strix"
    },
    {
      id: 4,
      image: "",
      alt: "Project placeholder",
      url: "",
      title: "Coming Soon"
    },
  ];

  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
      <motion.section
          ref={ref}
          id="projects"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="scroll-mt-[120px] w-full min-h-[calc(100vh-80px)] py-12 md:py-20 px-4 md:px-8 xl:px-24 2xl:px-32 relative flex items-start justify-center"
          style={{ overflowAnchor: "none" }}
      >
        <div className="flex flex-col items-center max-w-[1440px] mx-auto w-full">
          {/* Background Elements */}
          <div className="absolute top-40 left-20 w-16 h-16 bg-[#3827ff] rounded-full blur-[100px] opacity-30" />
          <div className="absolute bottom-40 right-20 w-20 h-20 bg-[#0077ff] rounded-full blur-[120px] opacity-30" />

          {/* Heading */}
          <motion.div variants={titleVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold mb-6 text-[#2A324B]">
              My{" "}
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#0077ff] to-[#3827ff]">
              Projects
            </span>
            </h2>
            <p className="font-light text-sm md:text-base xl:text-lg 2xl:text-xl text-[#2a324b] text-center max-w-md font-poppins">
              Selected work — from concept to deployed product.
            </p>
          </motion.div>

          {/* Project grid */}
          <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-6 w-full mb-8"
          >
            {projects.map((project, index) => (
                <motion.div key={project.id} variants={itemVariants} custom={index}>
                  <Card className="overflow-hidden rounded-[15px] shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer p-0 group bg-white/80 backdrop-blur-sm hover:bg-white">
                    {project.image ? (
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          <div className="relative overflow-hidden">
                            <img
                                className="w-full h-[300px] md:h-[360px] xl:h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                                alt={project.alt}
                                src={project.image}
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-4 left-4 text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {project.title}
                            </div>
                          </div>
                        </a>
                    ) : (
                        <div className="w-full h-[300px] md:h-[360px] xl:h-[400px] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                          <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#0077ff] to-[#3827ff] rounded-full flex items-center justify-center">
                              <span className="text-white text-2xl">+</span>
                            </div>
                            <span className="text-gray-400 text-sm md:text-base font-medium">
                        {project.title}
                      </span>
                          </div>
                        </div>
                    )}
                  </Card>
                </motion.div>
            ))}
          </motion.div>

          {/* Show more button */}
          <motion.div variants={itemVariants}>
            <Button
                asChild
                variant="link"
                className="bg-gradient-to-r from-[#0077ff] to-[#3827ff] bg-clip-text text-transparent font-semibold text-sm md:text-base hover:opacity-80 transition-all duration-300 hover:scale-105"
            >
              <a
                  href="https://github.com/codebyniki"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                SHOW MORE
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.section>
  );
};
