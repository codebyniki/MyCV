import { InstagramIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const ContactFormSection = (): JSX.Element => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });

  const socialIcons = [
    { icon: <PhoneIcon className="w-[15px] h-[15px]" />, alt: "Phone" },
    { icon: <MailIcon className="w-[18px] h-[15px]" />, alt: "Email" },
    { icon: <InstagramIcon className="w-[15px] h-[15px]" />, alt: "Instagram" },
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

  const formVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
      <section
          ref={ref}
          id="contact"
          className="flex flex-col lg:flex-row w-full justify-between items-center py-12 md:py-16 xl:py-24 px-4 md:px-8 lg:px-24 xl:px-48 gap-8"
      >
        <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="max-w-7xl xl:max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row gap-8 items-center"
        >
          {/* Background Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-[#3827ff] rounded-full blur-[100px] opacity-20" />
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#0077ff] rounded-full blur-[120px] opacity-20" />

          {/* Left Side */}
          <motion.div variants={itemVariants} className="flex flex-col justify-between lg:w-1/2 text-center lg:text-left">
            <div>
              <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold mb-4 text-[#2A324B]">
                LET'S GET IN
                <br />
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#0077ff] to-[#3827ff]">
                TOUCH
              </span>
              </h2>
              <motion.p
                  variants={itemVariants}
                  className="text-sm md:text-base xl:text-lg text-[#2A324B] mb-6 md:mb-8 font-poppins font-light"
              >
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
              </motion.p>

              <motion.p
                  variants={itemVariants}
                  className="text-sm md:text-base xl:text-lg text-[#2A324B] mb-6 md:mb-8 font-poppins font-light"
              >
                Please use the{" "}
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#0077ff] to-[#3827ff]">
                contact
              </span>{" "}
                form or reach out{" "}
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#0077ff] to-[#3827ff]">
                directly
              </span>{" "}
                via email or phone. I look forward to engaging with you.
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="flex space-x-4 justify-center lg:justify-start">
              {socialIcons.map((item, index) => (
                  <motion.div
                      key={`social-${index}`}
                      className="w-10 h-10 rounded-[20px] flex items-center justify-center border border-gray-200 bg-white cursor-pointer transition-all duration-500 ease-in-out hover:scale-110 hover:border-transparent hover:bg-gradient-to-r hover:from-[#0077ff] hover:to-[#3827ff] group"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="text-gray-700 transition-colors duration-500 ease-in-out group-hover:text-white">
                      {item.icon}
                    </div>
                  </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <motion.div variants={formVariants}>
            <Card className="w-full lg:w-[669px] rounded-[35px] bg-gradient-to-b from-[#0077FF] to-[#3827FF] text-white p-6 md:p-10 xl:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <CardContent className="p-0 space-y-6 md:space-y-8 xl:space-y-10">
                <motion.div variants={itemVariants} className="text-center">
                  <h3 className="font-bold text-3xl md:text-5xl xl:text-6xl font-['Montserrat',Helvetica]">
                    CONTACT FORM
                  </h3>
                </motion.div>

                <motion.div variants={containerVariants} className="space-y-4 md:space-y-6 xl:space-y-8">
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label className="font-bold text-sm md:text-base xl:text-lg font-['Poppins',Helvetica]">
                      FULL NAME / COMPANY NAME
                    </label>
                    <Input
                        className="h-[60px] md:h-[79px] xl:h-[90px] rounded-[20px] bg-white text-[#a0a0a0] px-4 md:px-5 py-4 md:py-[27px] text-sm md:text-base xl:text-lg transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
                        placeholder="Example: Max Mustermann (GmbH)"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <label className="font-bold text-sm md:text-base xl:text-lg font-['Poppins',Helvetica]">
                      EMAIL
                    </label>
                    <Input
                        className="h-[60px] md:h-[79px] xl:h-[90px] rounded-[20px] bg-white text-[#a0a0a0] px-4 md:px-5 py-4 md:py-[27px] text-sm md:text-base xl:text-lg transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
                        placeholder="Example: max.mustermann@email.com"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <label className="font-bold text-sm md:text-base xl:text-lg font-['Poppins',Helvetica]">
                      YOUR MESSAGE
                    </label>
                    <Textarea
                        className="h-[200px] md:h-[297px] xl:h-[350px] rounded-[20px] bg-white text-[#a0a0a0] px-4 md:px-5 py-3 md:py-[15px] text-sm md:text-base xl:text-lg resize-none transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
                        placeholder="Type your message here...."
                    />
                  </motion.div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Button className="w-full h-[60px] md:h-[75px] xl:h-[90px] rounded-[20px] border-2 border-white bg-transparent hover:bg-white hover:text-blue-600 transition-all duration-500 font-bold text-lg md:text-xl xl:text-2xl font-['Poppins',Helvetica] hover:scale-[1.02] hover:shadow-xl">
                    SEND MESSAGE
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>
  );
};