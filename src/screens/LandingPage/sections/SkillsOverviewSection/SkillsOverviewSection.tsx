import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card.tsx";

export const SkillsOverviewSection = (): JSX.Element => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        {
          threshold: 0.3,
        }
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

  const skillCategories = [
    {
      id: "backend",
      title: "BACKEND",
      items: [
        { name: "Java", icon: "/java.png" },
        { name: "Spring", icon: "/spring.png" },
      ],
    },
    {
      id: "mobile",
      title: "MOBILE",
      items: [
        { name: "Flutter", icon: "/flutter.png" },
        { name: "Dart", icon: "/dart.png" },
      ],
    },
    {
      id: "frontend",
      title: "FRONTEND",
      items: [
        { name: "React", icon: "/image-2.png" },
        { name: "TypeScript", icon: "/image-3.png" },
      ],
    },
    {
      id: "databases",
      title: "DATABASES",
      items: [
        { name: "PostgreSQL", icon: "/postgre.png" },
        { name: "MS SQL Server", icon: "/image-4.png" },
        { name: "MongoDB", icon: "/image-5.png" },
      ],
    },
    {
      id: "webFundamentals",
      title: "WEB FUNDAMENTALS",
      items: [
        { name: "HTML", icon: "/image-6.png" },
        { name: "CSS", icon: "/image-7.png" },
        { name: "JavaScript", icon: "/javascript-logo-svgrepo-com-1.png" },
      ],
    },
    {
      id: "toolsDesign",
      title: "TOOLS & DESIGN",
      items: [
        { name: "Git", icon: "/git-svgrepo-com-1.png" },
        { name: "Figma", icon: "/figma-svgrepo-com-1.png" },
        { name: "VS Code", icon: "/vs-code-svgrepo-com-1.png" },
      ],
    },
    {
      id: "cleanCode",
      title: "CLEAN CODE",
      icon: "/vecteezy_coding-3d-rendering-icon-illustration_28542587-1.png",
      fullWidth: true,
    },
  ];

  return (
      <section
          ref={sectionRef}
          className={`w-full min-h-screen py-8 md:py-12 scroll-mt-[120px] bg-gradient-to-b from-[#0077FF] to-[#3827FF] flex items-center transition-all duration-1000 ease-in-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          id="skills"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-[64px] text-white font-bold mb-2 leading-tight">
              <span className="font-semibold">My </span>
              <span className="font-bold">Skills</span>
            </h2>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl text-white font-light">
              Tools that ship products, not just code
            </p>
          </div>

          {/* Mobile Layout */}
          <div className="block md:hidden space-y-6">
            {skillCategories.map((category) => (
                <div key={category.id} className="space-y-4">
                  <Card className="rounded-[15px] shadow-md bg-white transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                    <CardContent className="p-0">
                      <div className="h-[80px] flex items-center justify-center">
                        <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#2a324b] text-sm text-center tracking-[2px]">
                          {category.title}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>

                  {category.items ? (
                      <div className={`grid ${category.items.length === 3 ? 'grid-cols-3' : 'grid-cols-2'} gap-3`}>
                        {category.items.map((item, index) => (
                            <Card key={`${category.id}-${index}`} className="rounded-[15px] shadow-md bg-white transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                              <CardContent className="p-0 h-[80px] flex flex-col items-center justify-center">
                                <img
                                    className="w-[40px] h-[40px] object-cover mb-1"
                                    alt={item.name}
                                    src={item.icon}
                                />
                                <p className="[font-family:'Poppins',Helvetica] font-normal text-[#2a324b] text-[9px] text-center">
                                  {item.name}
                                </p>
                              </CardContent>
                            </Card>
                        ))}
                      </div>
                  ) : (
                      <Card className="rounded-[15px] shadow-md h-[150px] bg-white transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <CardContent className="p-0 h-full flex flex-col items-center justify-center">
                          <img
                              className="w-[80px] h-[80px] object-cover"
                              alt="Clean Code"
                              src={category.icon}
                          />
                        </CardContent>
                      </Card>
                  )}
                </div>
            ))}
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-3 gap-4">
            {skillCategories.slice(0, 3).map((category, categoryIdx) => (
                <div key={category.id} className="space-y-4">
                  <Card className="rounded-[15px] shadow-md bg-white transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                    <CardContent className="p-0">
                      <div className="h-[101px] flex items-center justify-center">
                        <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#2a324b] text-xl text-center tracking-[10.00px]">
                          {category.title}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="grid grid-cols-2 gap-3">
                    {category.items?.map((item, itemIdx) => (
                        <Card
                            key={`${category.id}-${itemIdx}`}
                            className="rounded-[15px] shadow-md bg-white transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                        >
                          <CardContent className="p-0 h-[101px] flex flex-col items-center justify-center">
                            <img className="w-[60px] h-[60px] object-cover mb-1" alt={item.name} src={item.icon} />
                            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#2a324b] text-[11px] text-center">
                              {item.name}
                            </p>
                          </CardContent>
                        </Card>
                    ))}
                  </div>
                </div>
            ))}

            {/* Databases */}
            <div className="space-y-4">
              <Card className="rounded-[15px] shadow-md bg-white transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardContent className="p-0">
                  <div className="h-[101px] flex items-center justify-center">
                    <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#2a324b] text-xl text-center tracking-[10.00px]">
                      {skillCategories[3].title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
              <div className="grid grid-cols-3 gap-3">
                {skillCategories[3].items.map((item, index) => (
                    <Card key={`db-${index}`} className="rounded-[15px] shadow-md bg-white transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                      <CardContent className="p-0 h-[101px] flex flex-col items-center justify-center">
                        <img className="w-[60px] h-[60px] object-cover mb-1" alt={item.name} src={item.icon} />
                        <p className="[font-family:'Poppins',Helvetica] font-normal text-[#2a324b] text-[11px] text-center">
                          {item.name}
                        </p>
                      </CardContent>
                    </Card>
                ))}
              </div>
            </div>

            {/* Web Fundamentals */}
            <div className="space-y-4 col-span-2">
              <Card className="rounded-[15px] shadow-md bg-white transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardContent className="p-0">
                  <div className="h-[101px] flex items-center justify-center">
                    <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#2a324b] text-xl text-center tracking-[10.00px]">
                      {skillCategories[4].title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
              <div className="grid grid-cols-3 gap-3">
                {skillCategories[4].items.map((item, index) => (
                    <Card key={`web-${index}`} className="rounded-[15px] shadow-md bg-white transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                      <CardContent className="p-0 h-[101px] flex flex-col items-center justify-center">
                        <img className="w-[60px] h-[60px] object-cover mb-1" alt={item.name} src={item.icon} />
                        <p className="[font-family:'Poppins',Helvetica] font-normal text-[#2a324b] text-[11px] text-center">
                          {item.name}
                        </p>
                      </CardContent>
                    </Card>
                ))}
              </div>
            </div>

            {/* Tools & Design */}
            <div className="space-y-4">
              <Card className="rounded-[15px] shadow-md bg-white transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardContent className="p-0">
                  <div className="h-[101px] flex items-center justify-center">
                    <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#2a324b] text-xl text-center tracking-[10.00px]">
                      {skillCategories[5].title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
              <div className="grid grid-cols-3 gap-3">
                {skillCategories[5].items.map((item, index) => (
                    <Card key={`tools-${index}`} className="rounded-[15px] shadow-md bg-white transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                      <CardContent className="p-0 h-[101px] flex flex-col items-center justify-center">
                        <img className="w-[60px] h-[60px] object-cover mb-1" alt={item.name} src={item.icon} />
                        <p className="[font-family:'Poppins',Helvetica] font-normal text-[#2a324b] text-[11px] text-center">
                          {item.name}
                        </p>
                      </CardContent>
                    </Card>
                ))}
              </div>
            </div>

            {/* Clean Code */}
            <div className="col-span-2">
              <Card className="rounded-[15px] shadow-md h-[209px] bg-white transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardContent className="p-0 h-full flex flex-col items-center justify-center">
                  <img className="w-[150px] h-[150px] object-cover" alt="Clean Code" src={skillCategories[6].icon} />
                  <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#2a324b] text-xl text-center tracking-[10.00px] mt-2">
                    {skillCategories[6].title}
                  </h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
  );
};
