import { motion } from "framer-motion";
import {
    Mail,
    Send,
    User,
    MessageSquare,
    ArrowLeft,
} from "lucide-react";

function ContactUsSection() {
    return (
        <section
            id="contact"
            className="relative min-h-screen w-full overflow-hidden bg-[#FAFAFA] px-4 pt-3 pb-10 sm:pt-4 sm:pb-12 md:pt-5 md:pb-14 lg:px-10"
        >
            {/* Background Decorative Elements */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, 20, 0],
                        y: [0, -15, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -left-24 top-16 h-52 w-52 rounded-full bg-[#0C89E8]/10 blur-3xl"
                />

                <motion.div
                    animate={{
                        x: [0, -20, 0],
                        y: [0, 15, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -right-24 bottom-8 h-56 w-56 rounded-full bg-blue-300/10 blur-3xl"
                />
            </div>

            <div className="relative mx-auto max-w-5xl">
                {/* Header Section styled according to the image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-8 max-w-xl text-center"
                >
                    {/* Back to Home Link */}
                    <a
                        href="https://sortted.com/"
                        className="mb-4 inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-gray-700 transition-colors"
                    >
                        <ArrowLeft size={14} />
                        Back to home
                    </a>

                    {/* Logo */}
                    <div className="mb-4 flex items-center justify-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#2563EB] font-bold text-white text-sm">
                            S
                        </div>
                        <span className="text-xl font-bold tracking-tight text-gray-900">
                            Sortted
                        </span>
                    </div>

                    {/* Dynamic Header Titles */}
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                        Create your account
                    </h2>

                    <p className="mt-1 text-sm text-gray-500 sm:text-[15px]">
                        Start optimizing your content with AI-powered insights
                    </p>
                </motion.div>

                {/* Contact Form Card */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                    className="mx-auto max-w-md"
                >
                    <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-200/50 sm:p-8">
                        {/* Top Glow */}
                        <div className="absolute left-1/2 top-0 h-0.5 w-24 -translate-x-1/2 rounded-full bg-[#0C89E8] shadow-[0_0_18px_rgba(12,137,232,0.6)]" />

                        <form className="space-y-4">
                            {/* Name */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.4 }}
                            >
                                <label
                                    htmlFor="name"
                                    className="mb-1.5 block text-xs font-semibold text-gray-700"
                                >
                                    Name
                                </label>
                                <div className="relative">
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Enter your name"
                                        className="h-11 w-full rounded-xl border border-gray-200 bg-white pl-10 pr-3 text-sm text-gray-900 transition-all placeholder:text-gray-400 focus:border-[#0C89E8] focus:outline-none focus:ring-2 focus:ring-[#0C89E8]/20"
                                    />
                                    <User
                                        size={16}
                                        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                                    />
                                </div>
                            </motion.div>

                            {/* Email */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.15, duration: 0.4 }}
                            >
                                <label
                                    htmlFor="email"
                                    className="mb-1.5 block text-xs font-semibold text-gray-700"
                                >
                                    Email Address
                                </label>
                                <div className="relative">
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        className="h-11 w-full rounded-xl border border-gray-200 bg-white pl-10 pr-3 text-sm text-gray-900 transition-all placeholder:text-gray-400 focus:border-[#0C89E8] focus:outline-none focus:ring-2 focus:ring-[#0C89E8]/20"
                                    />
                                    <Mail
                                        size={16}
                                        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                                    />
                                </div>
                            </motion.div>

                            {/* Subject */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.4 }}
                            >
                                <label
                                    htmlFor="subject"
                                    className="mb-1.5 block text-xs font-semibold text-gray-700"
                                >
                                    Subject
                                </label>
                                <div className="relative">
                                    <input
                                        id="subject"
                                        type="text"
                                        placeholder="What would you like to discuss?"
                                        className="h-11 w-full rounded-xl border border-gray-200 bg-white pl-10 pr-3 text-sm text-gray-900 transition-all placeholder:text-gray-400 focus:border-[#0C89E8] focus:outline-none focus:ring-2 focus:ring-[#0C89E8]/20"
                                    />
                                    <MessageSquare
                                        size={16}
                                        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                                    />
                                </div>
                            </motion.div>

                            {/* Message */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.25, duration: 0.4 }}
                            >
                                <label
                                    htmlFor="message"
                                    className="mb-1.5 block text-xs font-semibold text-gray-700"
                                >
                                    Message
                                </label>
                                <div className="relative">
                                    <textarea
                                        id="message"
                                        rows="4"
                                        placeholder="Tell us a little more about your project or question..."
                                        className="w-full resize-none rounded-xl border border-gray-200 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 transition-all placeholder:text-gray-400 focus:border-[#0C89E8] focus:outline-none focus:ring-2 focus:ring-[#0C89E8]/20"
                                    />
                                    <MessageSquare
                                        size={16}
                                        className="pointer-events-none absolute left-3.5 top-3.5 text-gray-400"
                                    />
                                </div>
                            </motion.div>

                            {/* Submit Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.4 }}
                                className="pt-2"
                            >
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-6 text-sm font-medium text-white shadow-md transition-all hover:bg-[#1D4ED8]"
                                >
                                    <Send size={16} />
                                    <span>Send Message</span>
                                </motion.button>
                            </motion.div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default ContactUsSection;