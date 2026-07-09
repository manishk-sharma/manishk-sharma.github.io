import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiDownload
} from "react-icons/fi";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          e.target.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50/30 dark:bg-slate-950/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-center text-slate-900 dark:text-white leading-[1.1]">
          Let's <span className="text-brand">Connect</span>
        </h2>
        <p className="text-center text-slate-500 dark:text-slate-400 mb-16 text-lg font-medium">
          I'm always interested in new opportunities and collaborations. Let's discuss how we can work together!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Get In Touch Card */}
            <div className="bg-white dark:bg-[#09090b] rounded-2xl p-8 border border-slate-200 dark:border-zinc-800/80 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-lg dark:hover:shadow-blue-500/10 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Get In Touch</h3>

              <div className="space-y-6">
                {/* Email Item */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-600 dark:text-violet-400 shrink-0">
                    <FiMail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold mb-1">Email</p>
                    <a href="mailto:manish1182003@gmail.com" className="text-lg font-bold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      manish1182003@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                    <FiPhone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold mb-1">Phone</p>
                    <a href="tel:+91 9990830656" className="text-lg font-bold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      +91 9990830656
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-600 dark:text-pink-400 shrink-0">
                    <FiMapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold mb-1">Location</p>
                    <p className="text-lg font-bold text-slate-800 dark:text-slate-200">MubarakPur Dabas, North West Delhi, New Delhi</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Follow Me Card */}
            <div className="bg-white dark:bg-[#09090b] rounded-2xl p-8 border border-slate-200 dark:border-zinc-800/80 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-lg dark:hover:shadow-blue-500/10 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Follow Me</h3>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/manishk-sharma" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center bg-slate-100 dark:bg-zinc-900 text-slate-600 dark:text-slate-400 hover:bg-[#0077B5]/10 hover:text-[#0077B5] transition-all duration-300 border border-slate-200 dark:border-zinc-800">
                  <FaLinkedin className="text-xl" />
                </a>
                <a href="https://github.com/manishk-sharma" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center bg-slate-100 dark:bg-zinc-900 text-slate-600 dark:text-slate-400 hover:bg-[#333]/10 hover:text-[#333] dark:hover:text-white transition-all duration-300 border border-slate-200 dark:border-zinc-800">
                  <FaGithub className="text-xl" />
                </a>
                <a href="https://www.instagram.com/_.manisharma/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center bg-slate-100 dark:bg-zinc-900 text-slate-600 dark:text-slate-400 hover:bg-pink-500/10 hover:text-pink-500 transition-all duration-300 border border-slate-200 dark:border-zinc-800">
                  <FaInstagram className="text-xl" />
                </a>
                <a href="https://x.com/manishk_sharma1" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center bg-slate-100 dark:bg-zinc-900 text-slate-600 dark:text-slate-400 hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-all duration-300 border border-slate-200 dark:border-zinc-800">
                  <FaXTwitter className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Ready to collaborate Card */}
            <div className="bg-white dark:bg-[#09090b] rounded-2xl p-8 border border-slate-200 dark:border-zinc-800/80 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-lg dark:hover:shadow-blue-500/10 transition-all duration-300 text-center">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                <FiMail className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Ready to collaborate?</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed text-base font-medium">
                Whether you have a project in mind or just want to chat about technology,
                I'd love to hear from you. Let's build something amazing together!
              </p>

              <div className="space-y-3">
                <a href="mailto:manish1182003@gmail.com" className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center justify-center gap-2 group transition-all shadow-md shadow-blue-600/10 hover:-translate-y-0.5">
                  <FiMail className="w-5 h-5" />
                  Send me an email
                </a>
                <a href="tel:+919990830656" className="w-full py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 font-semibold flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5">
                  <FiPhone className="w-5 h-5" />
                  Give me a call
                </a>
              </div>
            </div>

            {/* Resume Card */}
            <div className="bg-white dark:bg-[#09090b] rounded-2xl p-8 border border-slate-200 dark:border-zinc-800/80 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-lg dark:hover:shadow-blue-500/10 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Want to know more?</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-6">
                Download my resume to see my complete work history and projects.
              </p>
              <a href="https://drive.google.com/file/d/1bG7z3Y05bF86Q3UpskF-UdhKxW36nF4e/view?usp=sharing"
                target="_blank" rel="noopener noreferrer" className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-600/10 hover:-translate-y-0.5">
                <FiDownload className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Existing Form Section */}
        <div id="get-in-touch" className="max-w-3xl mx-auto mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Send a Message Directly</h3>
          </div>

          <div className="bg-white dark:bg-[#09090b] rounded-2xl p-8 border border-slate-200 dark:border-zinc-800/80 transition-all duration-300">
            <form ref={form} id="contact-form" className="space-y-6" onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-500 dark:text-slate-400 ml-1">Your Name</label>
                  <input
                    name="name"
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800/80 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-500 dark:text-slate-400 ml-1">Your Email</label>
                  <input
                    name="email"
                    type="email"
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800/80 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    placeholder="your@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-500 dark:text-slate-400 ml-1">Your Message</label>
                <textarea
                  name="message"
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800/80 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
                  rows="5"
                  placeholder="Hi, I'd like to discuss a project..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 text-lg rounded-xl shadow-lg shadow-blue-600/20 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                Send Message
              </button>
            </form>
            <p
              id="form-success"
              className={`${success ? "block" : "hidden"
                } text-green-500 text-center mt-4 font-semibold`}
            >
              Thank you! Your message has been sent successfully!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
