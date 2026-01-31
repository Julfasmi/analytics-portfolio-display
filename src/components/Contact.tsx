import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send } from "lucide-react";

/* ================== SMALL COMPONENTS ================== */
interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, text }) => (
  <div className="flex items-center gap-3 text-ds-slate">
    <div className="text-ds-teal">{icon}</div>
    <span>{text}</span>
  </div>
);

interface SocialLinkProps {
  name: string;
  url: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ name, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md text-ds-slate hover:text-ds-teal hover:border-ds-teal transition-all duration-300"
  >
    {name}
  </a>
);

/* ================== MAIN COMPONENT ================== */
const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          console.error(error);
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-ds-navy/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-ds-navy dark:text-ds-lightest">
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row gap-12 mt-12">
          {/* LEFT */}
          <div className="md:w-1/2 space-y-8">
            <p className="text-ds-slate text-lg">
              I'm currently open to new opportunities and collaborations.
              Whether you have a question or just want to say hi, feel free to
              reach out.
            </p>

            <div className="space-y-4">
              <ContactItem icon={<Mail size={20} />} text="julfasmi.19@gmail.com" />
              <ContactItem icon={<Phone size={20} />} text="+62 821-3803-6144" />
              <ContactItem icon={<MapPin size={20} />} text="Depok City, West Java" />
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">More</h3>
              <div className="flex gap-4 flex-wrap">
                <SocialLink name="LinkedIn" url="https://www.linkedin.com/in/julfasmi/" />
                <SocialLink name="GitHub" url="https://github.com/Julfasmi" />
                <SocialLink name="WhatsApp" url="https://wa.me/6282138036144" />
                <SocialLink name="Medium" url="https://medium.com/@julfasmi" />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="md:w-1/2">
            <div className="bg-white dark:bg-ds-navy rounded-lg shadow-lg p-6">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your name"
                  className="contact-input"
                  required
                />

                <input
                  type="email"
                  name="reply_to"
                  placeholder="your.email@example.com"
                  className="contact-input"
                  required
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="contact-input"
                  required
                />

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your message..."
                  className="contact-input"
                  required
                />

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-ds-teal text-ds-navy font-medium px-6 py-3 rounded-md hover:bg-opacity-90 transition-all"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
