import { Briefcase, Award, Code, Users } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: '4 Years Experience',
      description: 'Professional Java development in BFSI domain',
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Microservices Expert',
      description: 'Spring Boot & AWS cloud architecture',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'AWS Certified',
      description: 'Developer-Associate & Oracle Java Certified',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Player',
      description: 'Strong collaboration with cross-functional teams',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-4">
          About Me
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="mb-16">
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto text-center mb-8">
            I have 4 years of professional experience as a Java developer, proficient in employing
            the Spring Boot framework within a microservices architecture, and utilizing AWS cloud
            services for backend infrastructure.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto text-center">
            I excel in implementing RESTful APIs, demonstrate strong problem-solving skills in
            dynamic environments, and have a proven track record of collaborating effectively with
            cross-functional teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-blue-100 text-blue-600 rounded-full">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
            <p className="text-sm text-slate-600 mb-2">Gender</p>
            <p className="text-xl font-semibold text-slate-800">Male</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
            <p className="text-sm text-slate-600 mb-2">Date of Birth</p>
            <p className="text-xl font-semibold text-slate-800">20/04/1999</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
            <p className="text-sm text-slate-600 mb-2">Languages</p>
            <p className="text-xl font-semibold text-slate-800">English, Hindi, Odia</p>
          </div>
        </div>
      </div>
    </section>
  );
}
