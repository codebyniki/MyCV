import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Download, FileText, Award, Briefcase } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import React from "react";

export const ResumeDownloadSection = (): JSX.Element => {
    const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/Lebenslauf_Stanic_Nikola.pdf";
        link.download = "Resume.pdf";
        link.click();
    };

    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({behavior: "smooth"});
        }
    };

    const highlights = [
        {
            icon: <Award className="w-6 h-6" />,
            title: "Education",
            description: "HTL St. Pölten - Software Engineering",
        },
        {
            icon: <Briefcase className="w-6 h-6" />,
            title: "Experience",
            description: "2+ years in Frontend Development",
        },
        {
            icon: <FileText className="w-6 h-6" />,
            title: "Projects",
            description: "10+ successful web applications",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
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
        <section
            ref={ref}
            id="resume"
            className="flex items-center relative w-full min-h-screen py-12 md:py-20 px-4 md:px-8 xl:px-24 2xl:px-32 scroll-mt-[120px]"
        >
            <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={containerVariants}
                className="max-w-[1440px] mx-auto"
            >
                {/* Background Elements */}
                <div className="absolute top-32 right-20 w-16 h-16 bg-[#3827ff] rounded-full blur-[80px] opacity-40" />
                <div className="absolute bottom-32 left-20 w-20 h-20 bg-[#0077ff] rounded-full blur-[100px] opacity-40" />

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left Side - Content */}
                    <motion.div variants={itemVariants} className="w-full lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold mb-6 text-[#2A324B]">
                            Download My{" "}
                            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#0077ff] to-[#3827ff]">
                Resume
              </span>
                        </h2>
                        <p className="font-light text-sm md:text-base xl:text-lg 2xl:text-xl text-[#2a324b] mb-8 font-poppins leading-relaxed">
                            Get a comprehensive overview of my experience, skills, and achievements in frontend development.
                        </p>

                        <motion.div variants={itemVariants}>
                            <Button
                                className="relative h-[60px] md:h-[70px] w-full max-w-[300px] rounded-[20px] p-[3px] bg-gradient-to-r from-[#0077ff] to-[#3827ff] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(0,119,255,0.6),0_0_30px_rgba(56,39,255,0.5)]"
                                onClick={handleDownload}
                            >
                                <div className="flex h-full w-full items-center justify-center rounded-[17px] bg-white dark:bg-black gap-3">
                                    <Download className="w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r from-[#0077ff] to-[#3827ff]" />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077ff] to-[#3827ff] font-semibold text-lg md:text-xl transition-colors duration-300">
                    Download Resume
                  </span>
                                </div>
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Highlights */}
                    <motion.div variants={itemVariants} className="w-full lg:w-1/2">
                        <div className="grid gap-6">
                            {highlights.map((highlight, index) => (
                                <motion.div
                                    key={highlight.title}
                                    variants={itemVariants}
                                    custom={index}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.03 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                        className="relative group rounded-[20px] overflow-hidden"
                                    >
                                        {/* Glow background that appears only on hover */}
                                        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#0077ff] to-[#3827ff] blur-2xl opacity-30 scale-105" />
                                        </div>

                                        {/* Card Content */}
                                        <div className="relative z-10">
                                            <Card className="border-0 bg-white backdrop-blur-md transition-all duration-300 group-hover:shadow-xl rounded-[20px]">
                                                <CardContent className="p-6 flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#0077ff] to-[#3827ff] flex items-center justify-center text-white">
                                                        {highlight.icon}
                                                    </div>
                                                    <div>
                                                        <h3 className="text-lg font-semibold text-[#2a324b] font-poppins mb-1">
                                                            {highlight.title}
                                                        </h3>
                                                        <p className="text-sm text-[#2a324b]/70 font-poppins">
                                                            {highlight.description}
                                                        </p>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};