import { Award, CheckCircle, FileText, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'AWS Certified Developer - Associate',
      issuer: 'Amazon Web Services',
      description: 'Professional certification demonstrating expertise in developing and maintaining AWS-based applications',
      year: 'Certified',
      certificateLink: 'https://drive.google.com/file/d/1bzMY0kiugAY_heWeZIApq6Kg1aNl7XvQ/view?usp=sharing',
    },
    {
      title: 'Oracle Certified Associate, Java SE 8 Programmer I',
      issuer: 'Oracle',
      code: '1Z0-808',
      description: 'Official Oracle certification validating Java programming fundamentals and SE 8 features',
      year: 'Certified',
      certificateLink: 'https://drive.google.com/file/d/1C_iIWiRrcq1lyXVB1A3XgpX4N3HGoZGm/view?usp=drivesdk',
    },
    {
      title: 'Out of the Box Thinker Award',
      issuer: 'Qualtech Consultants Pvt. Ltd',
      description: 'Recognition for innovative thinking and exceptional problem-solving in H1 quarters',
      year: 'H1 Quarters',
      highlight: true,
      certificateLink: 'https://drive.google.com/file/d/1KN4zl9Piyvb9JUlQ6ICElmfzEMcT8D8O/view?usp=sharing',
    },
  ];

  const hobbies = [
    'Photography',
    'Travelling',
    'Listen Music',
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-4">
          Certifications & Achievements
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`${
                cert.highlight
                  ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white'
                  : 'bg-white'
              } rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col`}
            >
              <div className="flex items-start gap-3 mb-4">
                <div
                  className={`p-3 ${
                    cert.highlight
                      ? 'bg-white/20 text-white'
                      : 'bg-blue-100 text-blue-600'
                  } rounded-lg`}
                >
                  <Award size={24} />
                </div>
                <div className="flex-1">
                  <h3
                    className={`text-lg font-bold mb-1 ${
                      cert.highlight ? 'text-white' : 'text-slate-800'
                    }`}
                  >
                    {cert.title}
                  </h3>
                  {cert.code && (
                    <p
                      className={`text-sm ${
                        cert.highlight ? 'text-blue-100' : 'text-blue-600'
                      } font-mono`}
                    >
                      {cert.code}
                    </p>
                  )}
                </div>
              </div>

              <p
                className={`text-sm mb-6 flex-1 ${
                  cert.highlight ? 'text-blue-50' : 'text-slate-600'
                }`}
              >
                {cert.description}
              </p>

              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <p
                    className={`font-semibold ${
                      cert.highlight ? 'text-white' : 'text-slate-700'
                    }`}
                  >
                    {cert.issuer}
                  </p>
                  <span
                    className={`px-3 py-1 ${
                      cert.highlight
                        ? 'bg-white/20 text-white'
                        : 'bg-blue-100 text-blue-700'
                    } rounded-full text-sm font-medium`}
                  >
                    {cert.year}
                  </span>
                </div>

                {cert.certificateLink && (
                  <a
                    href={cert.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      cert.highlight
                        ? 'bg-white text-blue-600 hover:bg-blue-50'
                        : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                    }`}
                  >
                    <FileText size={18} />
                    View Certificate
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Hobbies & Interests
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg border border-slate-200"
              >
                <CheckCircle size={20} className="text-blue-600" />
                <span className="text-slate-700 font-medium">{hobby}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
