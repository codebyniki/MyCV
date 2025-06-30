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
            className={`w-full min-h-screen py-8 md:py-16 xl:py-24 relative px-4 sm:px-6 lg:px-8 flex items-center justify-center transition-all duration-700 ease-in-out ${animationClass}`}
        >
            <div className="relative w-full max-w-screen-xl mx-auto">
                {/* Static Background effects */}
                <div className="absolute top-[-100px] left-[50px] w-[150px] h-[150px] bg-[#3827ff] rounded-full blur-[100px] z-0" />
                <div className="absolute bottom-[-100px] right-[100px] w-[200px] h-[200px] bg-[#0077ff] rounded-full blur-[160px] z-0" />

                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold text-center text-[#2A324B] mb-10 sm:mb-12 z-10 relative">
                    Looking to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077ff] to-[#3827ff]">hire</span>?
                </h1>

                <Card className="w-full max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto rounded-2xl bg-gradient-to-b from-[#0077ff] to-[#3827ff] shadow-lg flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 z-10 relative">
                    <div className="font-poppins text-white text-sm sm:text-base md:text-lg">
                        Feel free to <span className="font-medium">download</span> my resume below to get a closer look at my work history and skill set.
                    </div>

                    <Separator className="w-3/4 h-px my-6 bg-white" />

                    <div className="font-poppins text-white text-sm sm:text-base md:text-lg">
                        If you have any questions, collaborations in mind, or just want to connect, don't hesitate to <span className="font-medium">send</span> me a message!
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 w-full">
                        <Button
                            onClick={handleDownload}
                            className="group w-full sm:w-auto px-6 h-14 rounded-xl border-2 border-white bg-white text-[#2A324B] hover:bg-gradient-to-r hover:from-[#0077ff] hover:to-[#3827ff] hover:text-white transition-all duration-300 flex items-center justify-center"
                        >
                            <DownloadIcon
                                className="w-7 h-7 sm:w-8 sm:h-8 transition-colors duration-300 group-hover:text-white"
                                strokeWidth={2.2}
                            />
                            <span className="ml-3 font-semibold text-base sm:text-lg">
                                Download CV
                            </span>
                        </Button>

                        <Button
                            onClick={scrollToContact}
                            className="group w-full sm:w-auto px-6 h-14 rounded-xl border-2 border-white bg-transparent text-white hover:bg-gradient-to-r hover:from-[#0077ff] hover:to-[#3827ff] transition-all duration-300 flex items-center justify-center"
                        >
                            <MessageSquareIcon
                                className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110"
                                strokeWidth={2.2}
                            />
                            <span className="ml-3 font-semibold text-base sm:text-lg">
                                Contact Me
                            </span>
                        </Button>
                    </div>
                </Card>
            </div>
        </section>
    );
};
