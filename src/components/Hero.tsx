import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-xl">
            DN
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
            Deenabandhu Nayak
          </h1>
          <p className="text-2xl md:text-3xl text-blue-600 font-semibold mb-6">
            Java Developer | AWS Cloud Specialist
          </p>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            4 years of professional experience building scalable microservices with Spring Boot
            and AWS cloud infrastructure. Specialized in BFSI domain solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="mailto:nayak99denabandhu@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md"
          >
            <Mail size={20} />
            Email Me
          </a>
          <a
            href="tel:+917978506572"
            className="flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors duration-200 shadow-md"
          >
            <Phone size={20} />
            Call
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-slate-600">
          <a
            href="https://www.linkedin.com/in/deenabandhu-nayak-b30a92209/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-600 transition-colors"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <span className="flex items-center gap-2">
            <Phone size={20} />
            +91-7978506572
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={20} />
            Gurugram, India
          </span>
        </div>
      </div>
    </section>
  );
}
