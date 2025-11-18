import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'nayak99denabandhu@gmail.com',
      href: 'mailto:nayak99denabandhu@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91-7978506572',
      href: 'tel:+917978506572',
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Gurugram, India',
      href: null,
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/deenabandhu-nayak',
      href: 'https://www.linkedin.com/in/deenabandhu-nayakb30a92209/',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
        <p className="text-center text-slate-300 mb-12 text-lg max-w-2xl mx-auto">
          I'm actively looking for new opportunities. Feel free to reach out if you'd like to discuss
          how my expertise in Java development and AWS cloud services can benefit your team.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
            >
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 bg-blue-500 rounded-lg group-hover:bg-blue-600 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-slate-300 mb-1">{item.label}</p>
                    <p className="font-semibold text-lg group-hover:text-blue-400 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500 rounded-lg">{item.icon}</div>
                  <div>
                    <p className="text-sm text-slate-300 mb-1">{item.label}</p>
                    <p className="font-semibold text-lg">{item.value}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            I bring 4 years of hands-on experience in building scalable microservices and cloud solutions.
            Let's discuss how I can contribute to your team's success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:nayak99denabandhu@gmail.com"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-slate-100 transition-colors duration-200 shadow-lg"
            >
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/deenabandhu-nayakb30a92209/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-700 transition-colors duration-200 shadow-lg"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-12 text-center text-slate-400 text-sm">
          <p>© 2024 Deenabandhu Nayak. All rights reserved.</p>
          <p className="mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
