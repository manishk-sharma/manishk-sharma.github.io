import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";

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
        (result) => {
          console.log(result.text);
          setSuccess(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center mb-4">
          Let's <span className="text-blue-500">Connect</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">
          I'm always interested in new opportunities and collaborations. Let's discuss how we can work together!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">

          {/* Left Column */}
          <div className="space-y-6">

            {/* Get In Touch Card */}
            <div className="card-bg p-8 rounded-3xl border border-white/5">
              <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>

              <div className="space-y-6">
                {/* Email Item */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 shrink-0">
                    <ion-icon name="mail-outline" style={{ fontSize: '24px' }}></ion-icon>
                  </div>
                  <div>
                    <p className="text-gray-400 text-base mb-1">Email</p>
                    <a href="mailto:manish1182003@gmail.com" className="text-lg font-semibold hover:text-blue-500 transition-colors">
                      manish1182003@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <ion-icon name="call-outline" style={{ fontSize: '24px' }}></ion-icon>
                  </div>
                  <div>
                    <p className="text-gray-400 text-base mb-1">Phone</p>
                    <a href="tel:+91 XXXXXXXXXX" className="text-lg font-semibold hover:text-blue-500 transition-colors">
                      +91 XXXXXXXXXX
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400 shrink-0">
                    <ion-icon name="location-outline" style={{ fontSize: '24px' }}></ion-icon>
                  </div>
                  <div>
                    <p className="text-gray-400 text-base mb-1">Location</p>
                    <p className="text-lg font-semibold">Rohini, New Delhi</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Follow Me Card */}
            <div className="card-bg p-8 rounded-3xl border border-white/5">
              <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
              <div className="flex gap-4">
                <div className="flex flex-row justify-center items-center gap-4">
                  <a href="https://linkedin.com/in/sharmanish11" target="_blank" className="social-bubble">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                  <a href="https://github.com/mani1183" target="_blank" className="social-bubble">
                    <ion-icon name="logo-github"></ion-icon>
                  </a>
                  <a href="https://www.instagram.com/_.manisharma/" target="_blank" className="social-bubble">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                  <a href="https://x.com/Manish_118" target="_blank" className="social-bubble">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="space-y-6">

            {/* Ready to collaborate Card */}
            <div className="card-bg p-8 rounded-3xl border border-white/5 text-center">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-violet-500 to-blue-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                <ion-icon name="mail-open-outline" style={{ fontSize: '32px', color: 'white' }}></ion-icon>
              </div>

              <h3 className="text-2xl font-bold mb-4">Ready to collaborate?</h3>
              <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                Whether you have a project in mind or just want to chat about technology,
                I'd love to hear from you. Let's build something amazing together!
              </p>

              <div className="space-y-3">
                <a href="mailto:manish1182003@gmail.com" className="w-full btn-primary py-3 rounded-xl flex items-center justify-center gap-2 group text-lg font-medium">
                  <ion-icon name="mail-outline"></ion-icon>
                  Send me an email
                </a>
                <a href="tel:+91XXXXXXXXXX" className="w-full py-3 rounded-xl flex items-center justify-center gap-2 border border-white/10 text-white hover:bg-white/5 transition-colors text-lg font-medium">
                  <ion-icon name="call-outline"></ion-icon>
                  Give me a call
                </a>
              </div>
            </div>

            {/* Resume Card */}
            <div className="card-bg p-8 rounded-3xl border border-white/5 text-center">
              <h3 className="text-xl font-bold mb-2">Want to know more?</h3>
              <p className="text-gray-400 text-base mb-6">
                Download my resume to see my complete work history and projects.
              </p>
              <a href="https://drive.google.com/file/d/1vT6zLIO6hPicoaU38VU3oxBbqu1bbL1M/view?usp=sharing"
                target="_blank" download className="w-full py-3 rounded-xl flex items-center justify-center gap-2 border border-white/10 text-white hover:bg-white/5 transition-colors bg-blue-700 hover:bg-blue-800">
                <ion-icon name="download-outline"></ion-icon>
                Download Resume
              </a>
            </div>

          </div>

        </div>

        {/* Existing Form Section */}
        <div id="get-in-touch" className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold">Send a Message Directly</h3>
          </div>

          <div className="card-bg p-8 rounded-3xl shadow-xl border border-white/5">
            <form ref={form} id="contact-form" className="space-y-6" onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Your Name</label>
                  <input
                    name="name"
                    className="input"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Your Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input"
                    placeholder="abc@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Your Message</label>
                <textarea
                  name="message"
                  className="input min-h-[150px]"
                  placeholder="Hi, I'd like to discuss a project..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full text-white font-bold py-4 text-lg"
              >
                Send Message
              </button>
            </form>
            <p
              id="form-success"
              className={`${success ? "block" : "hidden"
                } text-green-400 text-center mt-4 font-semibold`}
            >
              Thank you! Your message has been sent successfully!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
