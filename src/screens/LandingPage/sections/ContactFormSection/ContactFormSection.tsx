import { useEffect, useRef, useState } from "react";
import { InstagramIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button.tsx";
import { Card, CardContent } from "../../../../components/ui/card.tsx";
import { Input } from "../../../../components/ui/input.tsx";
import { Textarea } from "../../../../components/ui/textarea.tsx";

export const ContactFormSection = (): JSX.Element => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
          if (entry.isIntersecting) setHasBeenInView(true);
        },
        { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const animationClass = isVisible
      ? "opacity-100 translate-y-0"
      : hasBeenInView
          ? "opacity-0 translate-y-10"
          : "opacity-0 translate-y-10";

  const socialIcons = [
    { icon: <PhoneIcon className="w-[15px] h-[15px]" />, alt: "Phone" },
    { icon: <MailIcon className="w-[18px] h-[15px]" />, alt: "Email" },
    { icon: <InstagramIcon className="w-[15px] h-[15px]" />, alt: "Instagram" },
  ];

  return (
      <section
          ref={sectionRef}
          id="contact"
          className={`flex flex-col lg:flex-row w-full justify-between items-center py-12 md:py-16 xl:py-24 px-4 md:px-8 lg:px-24 xl:px-48 gap-8 transition-all duration-700 ease-in-out ${animationClass}`}
      >
        <div className="max-w-7xl xl:max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row gap-8 items-center">
          {/* Left Side */}
          <div className="flex flex-col justify-between lg:w-1/2 text-center lg:text-left">
            <div>
              <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold mb-4 text-[#2A324B]">
                LET'S GET IN
                <br />
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#0077ff] to-[#3827ff]">
                TOUCH
              </span>
              </h2>
              <p className="text-sm md:text-base xl:text-lg text-[#2A324B] mb-6 md:mb-8 font-poppins font-light">
                I appreciate your interest in connecting with me. Whether you have{" "}
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#0077ff] to-[#3827ff]">
                questions
              </span>
                ,{" "}
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#0077ff] to-[#3827ff]">
                opportunities
              </span>
                , or just want to{" "}
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#0077ff] to-[#3827ff]">
                network
              </span>
                , I am always open to hearing from you.
              </p>

              <p className="text-sm md:text-base xl:text-lg text-[#2A324B] mb-6 md:mb-8 font-poppins font-light">
                Please use the{" "}
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#0077ff] to-[#3827ff]">
                contact
              </span>{" "}
                form or reach out{" "}
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#0077ff] to-[#3827ff]">
                directly
              </span>{" "}
                via email or phone. I look forward to engaging with you.
              </p>
            </div>

            <div className="flex space-x-4 justify-center lg:justify-start">
              {socialIcons.map((item, index) => (
                  <div
                      key={`social-${index}`}
                      className="w-10 h-10 rounded-[20px] flex items-center justify-center border border-gray-200 bg-white cursor-pointer transition-all duration-500 ease-in-out hover:scale-110 hover:border-transparent hover:bg-gradient-to-r hover:from-[#0077ff] hover:to-[#3827ff] group"
                  >
                    <div className="text-gray-700 transition-colors duration-500 ease-in-out group-hover:text-white">
                      {item.icon}
                    </div>
                  </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <Card className="w-full lg:w-[669px] rounded-[35px] bg-gradient-to-b from-[#0077FF] to-[#3827FF] text-white p-6 md:p-10 xl:p-12">
            <CardContent className="p-0 space-y-6 md:space-y-8 xl:space-y-10">
              <div className="text-center">
                <h3 className="font-bold text-3xl md:text-5xl xl:text-6xl font-['Montserrat',Helvetica]">
                  CONTACT FORM
                </h3>
              </div>

              <div className="space-y-4 md:space-y-6 xl:space-y-8">
                <div className="space-y-2">
                  <label className="font-bold text-sm md:text-base xl:text-lg font-['Poppins',Helvetica]">
                    FULL NAME / COMPANY NAME
                  </label>
                  <Input
                      className="h-[60px] md:h-[79px] xl:h-[90px] rounded-[20px] bg-white text-[#a0a0a0] px-4 md:px-5 py-4 md:py-[27px] text-sm md:text-base xl:text-lg"
                      placeholder="Example: Max Mustermann (GmbH)"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-bold text-sm md:text-base xl:text-lg font-['Poppins',Helvetica]">
                    EMAIL
                  </label>
                  <Input
                      className="h-[60px] md:h-[79px] xl:h-[90px] rounded-[20px] bg-white text-[#a0a0a0] px-4 md:px-5 py-4 md:py-[27px] text-sm md:text-base xl:text-lg"
                      placeholder="Example: max.mustermann@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-bold text-sm md:text-base xl:text-lg font-['Poppins',Helvetica]">
                    YOUR MESSAGE
                  </label>
                  <Textarea
                      className="h-[200px] md:h-[297px] xl:h-[350px] rounded-[20px] bg-white text-[#a0a0a0] px-4 md:px-5 py-3 md:py-[15px] text-sm md:text-base xl:text-lg resize-none"
                      placeholder="Type your message here...."
                  />
                </div>
              </div>

              <Button className="w-full h-[60px] md:h-[75px] xl:h-[90px] rounded-[20px] border-2 border-white bg-transparent hover:bg-white hover:text-blue-600 transition-colors font-bold text-lg md:text-xl xl:text-2xl font-['Poppins',Helvetica]">
                SEND MESSAGE
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
  );
};
