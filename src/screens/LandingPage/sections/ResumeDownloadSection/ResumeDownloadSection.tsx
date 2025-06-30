import {useEffect, useRef, useState} from "react";
import {DownloadIcon, MessageSquareIcon} from "lucide-react";
import {Button} from "../../../../components/ui/button.tsx";
import {Card} from "../../../../components/ui/card.tsx";
import {Separator} from "../../../../components/ui/separator.tsx";

export const ResumeDownloadSection = (): JSX.Element => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hasBeenInView, setHasBeenInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
                if (entry.isIntersecting) {
                    setHasBeenInView(true);
                }
            },
            {threshold: 0.3}
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const animationClass = isVisible
        ? "opacity-100 translate-y-0"
        : hasBeenInView
            ? "opacity-0 translate-y-10"
            : "opacity-0 translate-y-10";

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

    return (
        <section
            ref={sectionRef}
            id="resume"
            className={`w-full min-h-screen py-8 md:py-16 xl:py-24 relative px-4 md:px-8 lg:px-24 xl:px-48 flex items-center justify-center transition-all duration-700 ease-in-out ${animationClass}`}
        >
            <div className="relative w-full max-w-7xl xl:max-w-[1440px] mx-auto">
                {/* Background effects */}
                <div
                    className="absolute w-[300px] md:w-[634px] h-[600px] md:h-[1309px] top-[-100px] md:top-[-198px] left-[100px] md:left-[392px] rotate-[-103deg] pointer-events-none overflow-hidden">
                    <div
                        className="absolute w-16 h-16 md:w-20 md:h-20 top-[11px] left-[11px] bg-[#3827ff] rounded-[40px] rotate-[70deg] blur-[61.55px]"/>
                    <div
                        className="absolute w-[100px] h-[100px] md:w-[218px] md:h-[218px] top-[500px] md:top-[1060px] left-[150px] md:left-[386px] bg-[#0077ff] rounded-[109px] rotate-[70deg] blur-[230.75px]"/>
                </div>

                <h1 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-center text-[#2A324B] mb-12">
                    Looking to{" "}
                    <span
                        className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#0077ff] to-[#3827ff]">
            hire
          </span>
                    ?
                </h1>

                <Card
                    className="w-full max-w-[522px] xl:max-w-[600px] min-h-[300px] md:h-[420px] xl:h-[480px] mx-auto rounded-[20px] bg-[linear-gradient(180deg,rgba(0,119,255,1)_0%,rgba(56,39,255,1)_100%)] border-none shadow-lg flex flex-col justify-center items-center text-center px-4 md:px-8">
                    <div
                        className="w-full max-w-[469px] [font-family:'Montserrat',Helvetica] font-normal text-white text-sm md:text-lg xl:text-xl">
                        <span>Feel free to </span>
                        <span className="font-medium">download</span>
                        <span> my resume below to get a closer look at my work history and skill set.</span>
                    </div>

                    <Separator className="w-[200px] md:w-[242px] xl:w-[280px] h-px my-6 bg-white"/>

                    <div
                        className="w-full max-w-[469px] [font-family:'Montserrat',Helvetica] font-normal text-white text-sm md:text-lg xl:text-xl">
                        <span>If you have any questions, collaborations in mind, or just want to connect, don&apos;t hesitate to </span>
                        <span className="font-medium">send</span>
                        <span> me a message!</span>
                    </div>

                    <div
                        className="mt-6 md:mt-8 xl:mt-10 w-full flex flex-col md:flex-row justify-center gap-3 md:gap-4 xl:gap-6">
                      {/* Download CV Button */}
                      <Button
                          onClick={handleDownload}
                          className="group w-full md:w-[216px] xl:w-[240px] h-[60px] md:h-[70px] xl:h-[80px] rounded-[18px] border-2 border-white bg-white text-[#2A324B] hover:bg-gradient-to-r hover:from-[#0077ff] hover:to-[#3827ff] hover:text-white transition-all duration-300 ease-in-out flex items-center justify-center"
                      >
                        <DownloadIcon
                            className="w-7 h-7 md:w-8 md:h-8 xl:w-9 xl:h-9 transition-colors duration-300 group-hover:text-white"
                            strokeWidth={2.2}
                        />
                        <span className="ml-3 text-base md:text-lg xl:text-xl font-semibold transition-colors duration-300 group-hover:text-white">
                          Download CV
                        </span>
                      </Button>

                      {/* Contact Me Button */}
                      <Button
                          onClick={scrollToContact}
                          className="group w-full md:w-[216px] xl:w-[240px] h-[60px] md:h-[70px] xl:h-[80px] rounded-[18px] border-2 border-white bg-transparent text-white hover:bg-gradient-to-r hover:from-[#0077ff] hover:to-[#3827ff] transition-all duration-300 ease-in-out flex items-center justify-center"
                      >
                        <MessageSquareIcon
                            className="w-7 h-7 md:w-8 md:h-8 xl:w-9 xl:h-9 transition-transform duration-300 group-hover:scale-110"
                            strokeWidth={2.2}
                        />
                        <span className="ml-3 text-base md:text-lg xl:text-xl font-semibold transition-opacity duration-300">
                          Contact Me
                        </span>
                      </Button>
                    </div>
                </Card>
            </div>
        </section>
    );
};
