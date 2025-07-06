import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import {
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  Linkedin,
  Github,
} from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const ContactFormSection = (): JSX.Element => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });

  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
        .sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current!,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
            () => {
              setStatus("success");
              setFormData({ name: "", email: "", message: "" });
            },
            (error) => {
              console.error("EmailJS error:", error);
              setStatus("error");
            }
        );
  };

  const socialIcons = [
    {
      name: "Phone",
      icon: <PhoneIcon className="w-4 h-4 group-hover:text-white text-[#2a324b]" />,
      url: "tel:+436506915284",
    },
    {
      name: "Email",
      icon: <MailIcon className="w-4 h-4 group-hover:text-white text-[#2a324b]" />,
      url: "mailto:nikola.stanic.official@gmail.com",
    },
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
      icon: <InstagramIcon className="w-4 h-4 group-hover:text-white text-[#2a324b]" />,
      url: "https://www.instagram.com/nikola.stnc",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
      <section ref={ref} id="contact" className="flex flex-col lg:flex-row w-full justify-between items-center py-12 md:py-16 xl:py-24 px-4 md:px-8 lg:px-24 xl:px-48 gap-8">
        <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="max-w-7xl xl:max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row gap-8 items-center"
        >
          <div className="absolute top-20 left-10 w-20 h-20 bg-[#3827ff] rounded-full blur-[100px] opacity-20" />
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#0077ff] rounded-full blur-[120px] opacity-20" />

          {/* Left Column */}
          <motion.div variants={itemVariants} className="flex flex-col justify-between lg:w-1/2 text-center lg:text-left">
            <div>
              <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold mb-4 text-[#2A324B]">
                LET'S GET IN
                <br />
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#0077ff] to-[#3827ff]">
                TOUCH
              </span>
              </h2>
              <motion.p variants={itemVariants} className="text-sm md:text-base xl:text-lg text-[#2A324B] mb-6 md:mb-8 font-light">
                I appreciate your interest in connecting with me. Whether you have questions, opportunities, or just want to network, I am always open to hearing from you.
              </motion.p>
            </div>
            <motion.div variants={itemVariants} className="flex space-x-4 justify-center lg:justify-start">
              {socialIcons.map((item, index) => (
                  <a
                      key={index}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.name}
                  >
                    <motion.div
                        className="w-10 h-10 rounded-[20px] flex items-center justify-center border border-gray-200 bg-white cursor-pointer transition-all duration-500 ease-in-out hover:scale-110 hover:border-transparent hover:bg-gradient-to-r hover:from-[#0077ff] hover:to-[#3827ff] group"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="transition-colors duration-500 ease-in-out">
                        {item.icon}
                      </div>
                    </motion.div>
                  </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column (Form) */}
          <motion.div variants={formVariants}>
            <Card className="w-full lg:w-[669px] rounded-[35px] bg-gradient-to-b from-[#0077FF] to-[#3827FF] text-white p-6 md:p-10 xl:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <CardContent className="p-0">
                <motion.div variants={itemVariants} className="text-center mb-6">
                  <h3 className="font-bold text-3xl md:text-5xl xl:text-6xl font-['Montserrat',Helvetica]">CONTACT FORM</h3>
                </motion.div>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 md:space-y-6 xl:space-y-8">
                  <div className="space-y-2">
                    <label className="font-bold">FULL NAME / COMPANY NAME</label>
                    <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Example: Max Mustermann (GmbH)"
                        className="h-[60px] md:h-[79px] xl:h-[90px] rounded-[20px] bg-white text-[#a0a0a0]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-bold">EMAIL</label>
                    <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Example: max.mustermann@email.com"
                        className="h-[60px] md:h-[79px] xl:h-[90px] rounded-[20px] bg-white text-[#a0a0a0]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-bold">YOUR MESSAGE</label>
                    <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Type your message here...."
                        className="h-[200px] md:h-[297px] xl:h-[350px] rounded-[20px] bg-white text-[#a0a0a0] resize-none"
                    />
                  </div>

                  <div>
                    <Button type="submit" className="w-full h-[60px] md:h-[75px] xl:h-[90px] rounded-[20px] border-2 border-white bg-transparent hover:bg-white hover:text-blue-600 transition-all duration-500 font-bold text-lg md:text-xl xl:text-2xl hover:scale-[1.02] hover:shadow-xl">
                      {status === "sending" ? "Sending..." : "SEND MESSAGE"}
                    </Button>
                    {status === "success" && <p className="mt-2 text-green-200">Message sent successfully!</p>}
                    {status === "error" && <p className="mt-2 text-red-200">Oops! Something went wrong. Try again.</p>}
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>
  );
};
