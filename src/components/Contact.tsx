
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-ds-navy/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-ds-navy dark:text-ds-lightest">Contact Me</h2>
        
        <div className="flex flex-col md:flex-row gap-12 mt-12">
          <div className="md:w-1/2 space-y-8">
            <p className="text-ds-slate text-lg">
              I'm currently open to new opportunities and collaborations. 
              Whether you have a question or just want to say hi, I'll do my 
              best to get back to you!
            </p>
            
            <div className="space-y-4">
              <ContactItem icon={<Mail size={20} />} text="julfasmi.19@gmail.com" />
              <ContactItem icon={<Phone size={20} />} text="+62 821-3803-6144" />
              <ContactItem icon={<MapPin size={20} />} text="Depok City, West Java" />
            </div>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-ds-navy dark:text-ds-lightest mb-4">More</h3>
              <div className="flex gap-4">
                <SocialLink name="LinkedIn" url="https://www.linkedin.com/in/julfasmi/" />
                <SocialLink name="GitHub" url="https://github.com/Julfasmi" />
                <SocialLink name="WhatsApp" url="https://wa.me/6282138036144" />
                <SocialLink name="Medium" url="https://medium.com/@julfasmi" />
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white dark:bg-ds-navy rounded-lg shadow-lg p-6">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-ds-navy dark:text-ds-lightest font-medium mb-2">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="contact-input" 
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-ds-navy dark:text-ds-lightest font-medium mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="contact-input" 
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-ds-navy dark:text-ds-lightest font-medium mb-2">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="contact-input" 
                    placeholder="How can I help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-ds-navy dark:text-ds-lightest font-medium mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="contact-input" 
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full flex items-center justify-center gap-2 bg-ds-teal text-ds-navy font-medium px-6 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300"
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

const ContactItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => {
  return (
    <div className="flex items-center gap-3 text-ds-slate">
      <div className="text-ds-teal">{icon}</div>
      <span>{text}</span>
    </div>
  );
};

const SocialLink = ({ name, url }: { name: string; url: string }) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md text-ds-slate hover:text-ds-teal hover:border-ds-teal transition-all duration-300"
    >
      {name}
    </a>
  );
};

export default Contact;
