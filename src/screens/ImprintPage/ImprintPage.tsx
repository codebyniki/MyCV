import { motion } from "framer-motion";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

interface ImprintPageProps {
    onBack: () => void;
}

export const ImprintPage = ({ onBack }: ImprintPageProps): JSX.Element => {
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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <div className="min-h-screen bg-white pt-[100px] pb-16">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="max-w-4xl mx-auto px-4 md:px-8"
            >
                {/* Back Button */}
                <motion.div variants={itemVariants} className="mb-8">
                    <Button
                        onClick={onBack}
                        variant="ghost"
                        className="flex items-center gap-2 text-[#2a324b] hover:text-[#0077ff] transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Portfolio
                    </Button>
                </motion.div>

                {/* Header */}
                <motion.div variants={itemVariants} className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#2A324B] mb-4">
                        Legal{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077ff] to-[#3827ff]">
              Notice
            </span>
                    </h1>
                    <p className="text-lg text-[#2a324b]/70 font-poppins">
                        Imprint & Legal Information
                    </p>
                </motion.div>

                {/* Content Cards */}
                <div className="grid gap-8 md:gap-12">
                    {/* Contact Information */}
                    <motion.div variants={itemVariants}>
                        <Card className="p-8 hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                            <CardContent className="p-0">
                                <h2 className="text-2xl font-bold text-[#2a324b] mb-6 font-poppins">
                                    Contact Information
                                </h2>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0077ff] to-[#3827ff] flex items-center justify-center">
                                            <Mail className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-[#2a324b]">Email</p>
                                            <p className="text-[#2a324b]/70">nikola.stanic@example.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0077ff] to-[#3827ff] flex items-center justify-center">
                                            <Phone className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-[#2a324b]">Phone</p>
                                            <p className="text-[#2a324b]/70">+43 123 456 789</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0077ff] to-[#3827ff] flex items-center justify-center">
                                            <MapPin className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-[#2a324b]">Address</p>
                                            <p className="text-[#2a324b]/70">
                                                St. Pölten, Austria
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Legal Information */}
                    <motion.div variants={itemVariants}>
                        <Card className="p-8 hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                            <CardContent className="p-0">
                                <h2 className="text-2xl font-bold text-[#2a324b] mb-6 font-poppins">
                                    Legal Information
                                </h2>
                                <div className="space-y-6 text-[#2a324b]/80 font-poppins leading-relaxed">
                                    <div>
                                        <h3 className="font-semibold text-[#2a324b] mb-2">Responsible for Content</h3>
                                        <p>
                                            Nikola Stanic<br />
                                            Frontend Developer<br />
                                            St. Pölten, Austria
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-[#2a324b] mb-2">Disclaimer</h3>
                                        <p>
                                            The content of this website has been created with the utmost care. However,
                                            I cannot guarantee the accuracy, completeness, or timeliness of the content.
                                            As a service provider, I am responsible for my own content on these pages
                                            according to general law.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-[#2a324b] mb-2">Copyright</h3>
                                        <p>
                                            The content and works on these pages created by the site operator are subject
                                            to Austrian copyright law. Duplication, processing, distribution, and any form
                                            of commercialization of such material beyond the scope of copyright law requires
                                            written consent from the author or creator.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-[#2a324b] mb-2">External Links</h3>
                                        <p>
                                            This website contains links to external websites of third parties. I have no
                                            influence on the content of these websites, therefore I cannot assume any
                                            liability for this external content. The respective provider or operator of
                                            the pages is always responsible for the content of the linked pages.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Privacy Notice */}
                    <motion.div variants={itemVariants}>
                        <Card className="p-8 hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                            <CardContent className="p-0">
                                <h2 className="text-2xl font-bold text-[#2a324b] mb-6 font-poppins">
                                    Privacy Notice
                                </h2>
                                <div className="space-y-6 text-[#2a324b]/80 font-poppins leading-relaxed">
                                    <div>
                                        <h3 className="font-semibold text-[#2a324b] mb-2">Data Collection</h3>
                                        <p>
                                            This website does not collect personal data unless you voluntarily provide
                                            it through the contact form. Any data you provide will only be used to
                                            respond to your inquiry and will not be shared with third parties.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-[#2a324b] mb-2">Cookies</h3>
                                        <p>
                                            This website uses minimal technical cookies necessary for basic functionality.
                                            No tracking or analytics cookies are used.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-[#2a324b] mb-2">Your Rights</h3>
                                        <p>
                                            You have the right to request information about your personal data,
                                            correction, deletion, or restriction of processing. Please contact me
                                            using the information provided above.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div variants={itemVariants} className="text-center mt-12 pt-8 border-t border-gray-200">
                    <p className="text-[#2a324b]/60 font-poppins">
                        Last updated: January 2025
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
};