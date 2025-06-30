import {useEffect, useState} from "react";
import {Button} from "../../../../components/ui/button.tsx";
import {motion, AnimatePresence} from "framer-motion";
import {Typewriter} from "react-simple-typewriter";
import {Card} from "../../../../components/ui/card.tsx";
import {useInView} from "react-intersection-observer";

export const HeroSection = (): JSX.Element => {
    const [typedCommand, setTypedCommand] = useState("");
    const command = "npm run dev";
    const [terminalLines, setTerminalLines] = useState<string[]>(["> Hello, Nikola here!"]);
    const {ref, inView} = useInView({threshold: 0.2, triggerOnce: false});

    const handleRunClick = () => {
        const newLines = [
            "> Running App.tsx...",
            "Hello, Nikola here!",
            "🚀 App compiled successfully",
        ];
        setTerminalLines((prev) => [...prev, ...newLines]);
    };

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const yOffset = -100; // Adjust for fixed header height
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: "smooth"});
        }
    };

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index <= command.length) {
                setTypedCommand(command.slice(0, index));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <section ref={ref} className="min-h-screen scroll-mt-24" id="home">
            <AnimatePresence>
                {inView && (
                    <motion.div
                        key="hero-content"
                        initial={{opacity: 0, y: 40}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -40}}
                        transition={{duration: 0.8, ease: "easeOut"}}
                        className="w-full py-8 md:py-16 px-4 md:px-8 xl:px-24 2xl:px-32 relative mb-16"
                    >
                        <div
                            className="flex flex-col lg:flex-row gap-12 relative w-full max-w-[1440px] mx-auto min-h-[90vh]">

                            {/* LEFT SIDE */}
                            <motion.div
                                className="w-full lg:w-1/2 relative order-1 lg:order-1 flex items-center"
                                initial={{opacity: 0, x: -60}}
                                animate={{opacity: 1, x: 0}}
                                exit={{opacity: 0, x: -60}}
                                transition={{duration: 0.8}}
                            >
                                <div className="w-full space-y-6 md:space-y-8 text-center lg:text-left">
                                    <div
                                        className="w-16 h-16 md:w-20 md:h-20 absolute top-8 left-8 bg-[#3827ff] rounded-full blur-[80px] z-[-1]"/>
                                    <div
                                        className="w-16 h-16 md:w-20 md:h-20 absolute bottom-8 right-8 bg-[#0077ff] rounded-full blur-[80px] z-[-1]"/>

                                    <div className="space-y-2">
                                        <h1 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight">
                                            Hey, I'm{" "}
                                            <span
                                                className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#0077ff] to-[#3827ff] after:content-[''] after:inline-block after:w-[1px] after:h-[1.1em] after:ml-1 after:align-middle after:bg-[#3827ff] after:animate-blink">
                        Nikola
                      </span>
                                        </h1>
                                        <h2 className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-[#2a324b] font-poppins font-medium">
                                            A Frontend Developer
                                        </h2>
                                    </div>

                                    <p className="font-poppins text-sm md:text-base xl:text-lg 2xl:text-xl font-light text-[#2a324b] max-w-[540px] mx-auto lg:mx-0">
                                        From pixel-perfect designs to scalable frontend architectures, I bridge
                                        creativity and functionality to solve real problems with code.
                                    </p>

                                    <Button
                                        onClick={() => scrollToSection("projects")}
                                        className="relative h-[60px] md:h-[70px] w-full max-w-[294px] rounded-[20px] p-[3px] bg-gradient-to-r from-[#0077ff] to-[#3827ff] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(0,119,255,0.6),0_0_30px_rgba(56,39,255,0.5)]">
                                        <div
                                            className="flex h-full w-full items-center justify-center rounded-[17px] bg-white dark:bg-black">
                      <span
                          className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077ff] to-[#3827ff] font-semibold text-lg md:text-xl transition-colors duration-300">
                        View My Work
                      </span>
                                        </div>
                                    </Button>
                                </div>
                            </motion.div>

                            {/* RIGHT SIDE */}
                            <motion.div
                                className="w-full lg:w-1/2 order-2 lg:order-2 flex flex-col items-center gap-6"
                                initial={{opacity: 0, x: 60}}
                                animate={{opacity: 1, x: 0}}
                                exit={{opacity: 0, x: 60}}
                                transition={{duration: 0.8}}
                            >
                                {/* Terminal */}
                                <motion.div
                                    className="w-full max-w-md rounded-lg shadow-xl border border-[#2a324b1a] bg-gradient-to-br from-[#1e1e2e] to-[#2a324b] overflow-hidden"
                                    initial={{opacity: 0, y: 80}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{delay: 0.3, duration: 1}}
                                >
                                    <div
                                        className="flex items-center justify-between bg-[#15151d] px-4 py-2 text-white text-sm font-mono">
                                        <span className="text-[#9fa8da]">nikola-portfolio</span>
                                        <div className="flex gap-2">
                                            <span className="w-3 h-3 rounded-full bg-red-500"/>
                                            <span className="w-3 h-3 rounded-full bg-yellow-400"/>
                                            <span className="w-3 h-3 rounded-full bg-green-500"/>
                                        </div>
                                    </div>
                                    <div
                                        className="p-4 font-mono text-green-400 bg-[#1e1e2e] min-h-[160px] text-sm leading-relaxed">
                                        <p className="text-white"><span
                                            className="text-blue-400">~/portfolio</span> ➜ {typedCommand}</p>
                                        {typedCommand === command && (
                                            <p className="text-white mt-2 animate-pulse">✓ Server running at
                                                http://localhost:5173</p>
                                        )}
                                    </div>
                                </motion.div>

                                {/* Finder */}
                                <motion.div
                                    className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden"
                                    initial={{opacity: 0, y: 80}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{delay: 0.5, duration: 1}}
                                >
                                    <div className="bg-gray-100 px-4 py-2 flex items-center justify-between border-b">
                                        <span className="font-semibold text-sm text-[#2a324b]">Finder</span>
                                        <div className="flex space-x-2">
                                            <span className="w-3 h-3 bg-red-500 rounded-full"/>
                                            <span className="w-3 h-3 bg-yellow-500 rounded-full"/>
                                            <span className="w-3 h-3 bg-green-500 rounded-full"/>
                                        </div>
                                    </div>
                                    <div className="p-4 text-sm text-[#2a324b] font-poppins">
                                        <p>📁 Portfolio</p>
                                        <ul className="mt-2 list-disc ml-6 space-y-1">
                                            <li>🧠 AboutMe.md</li>
                                            <li>📸 Projects.png</li>
                                            <li>📄 Resume.pdf</li>
                                            <li>📬 Contact.txt</li>
                                        </ul>
                                    </div>
                                </motion.div>

                                {/* VS Code Sim */}
                                <motion.div
                                    className="w-full max-w-[480px] bg-[#1e1e2e] rounded-xl shadow-2xl border border-gray-700 overflow-hidden"
                                    initial={{opacity: 0, y: 80}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{delay: 0.7, duration: 1}}
                                >
                                    <Card
                                        className="w-full max-w-lg h-[520px] bg-[#1e1e1e] rounded-[20px] shadow-2xl overflow-hidden flex flex-col text-white border border-[#2d2d2d]">
                                        <div
                                            className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between text-xs font-mono">
                                            <button
                                                onClick={handleRunClick}
                                                className="text-xs bg-[#007acc] px-2 py-1 rounded hover:bg-[#1591db] transition"
                                            >
                                                Run
                                            </button>
                                            <span>App.tsx</span>

                                            <div className="flex space-x-2 items-center">
                                                <span className="w-3 h-3 bg-red-500 rounded-full"/>
                                                <span className="w-3 h-3 bg-yellow-400 rounded-full"/>
                                                <span className="w-3 h-3 bg-green-500 rounded-full"/>
                                            </div>
                                        </div>

                                        <div className="flex bg-[#252526] px-4 text-sm">
                                            <div className="py-2 px-3 border-b-2 border-blue-400">App.tsx</div>
                                            <div className="py-2 px-3 opacity-50">styles.css</div>
                                        </div>

                                        <div
                                            className="flex-1 p-4 bg-[#1e1e1e] font-mono text-sm overflow-auto leading-relaxed">
                                            <code className="text-[#9CDCFE]">
                                                <span className="text-[#C586C0]">function</span>{" "}
                                                <span className="text-[#DCDCAA]">greet</span>() {"{"}
                                                <br/>
                                                &nbsp;&nbsp;<span className="text-[#CE9178]">return</span>{" "}
                                                <span className="text-[#CE9178]">"</span>
                                                <Typewriter
                                                    words={[
                                                        "Hello, Nikola here!",
                                                        "Welcome to my portfolio!",
                                                        "Let's build something awesome.",
                                                    ]}
                                                    loop
                                                    cursor
                                                    cursorStyle="_"
                                                    typeSpeed={40}
                                                    deleteSpeed={20}
                                                    delaySpeed={2000}
                                                />
                                                <span className="text-[#CE9178]">"</span>;
                                                <br/>
                                                {"}"}
                                                <br/>
                                                <br/>
                                                <span className="text-[#569CD6]">console</span>.
                                                <span className="text-[#DCDCAA]">log</span>(greet());
                                            </code>
                                        </div>

                                        <div
                                            className="bg-[#1a1a1a] text-xs font-mono p-3 border-t border-[#333] h-[90px] overflow-y-auto">
                                            {terminalLines.map((line, idx) => (
                                                <div key={idx}>
                                                    <span className="text-green-400">&gt; </span>
                                                    <span className="text-white">{line}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </Card>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
