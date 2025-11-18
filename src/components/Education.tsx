import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'Master of Computer Application (MCA)',
      institution: 'Gandhi Institute of Engineering and Technology University',
      location: 'Rayagada, Odisha',
      year: '2022',
      field: 'Computer Science',
      score: 'CGPA: 9.4/10',
      highlight: true,
    },
    {
      degree: 'Bachelor of Science (BSC)',
      institution: 'Fakir Mohan University',
      location: 'Balasore, Odisha',
      year: '2019',
      field: 'PCM',
      score: '65.46%',
    },
    {
      degree: 'Senior School (12th)',
      institution: 'Emma +2 Science Residential College',
      location: 'Balasore, Odisha',
      year: '2016',
      field: 'PCM',
      score: '58.83% (CHSE)',
    },
    {
      degree: 'High School (10th)',
      institution: 'Khantapada High School',
      location: 'Balasore, Odisha',
      year: '2014',
      field: '',
      score: '83.5% (HSE)',
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-4">
          Education
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${
                edu.highlight
                  ? 'from-blue-50 to-blue-100 border-l-4 border-blue-600'
                  : 'from-slate-50 to-slate-100 border-l-4 border-slate-400'
              } rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className={`p-2 ${
                        edu.highlight
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-600 text-white'
                      } rounded-lg mt-1`}
                    >
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-slate-700 font-semibold mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-slate-600 text-sm">{edu.location}</p>
                    </div>
                  </div>

                  <div className="ml-0 md:ml-14 space-y-2">
                    {edu.field && (
                      <div className="flex items-center gap-2">
                        <span className="text-slate-600">Field:</span>
                        <span className="font-medium text-slate-800">
                          {edu.field}
                        </span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Award size={18} className="text-blue-600" />
                      <span className="font-semibold text-slate-800">
                        {edu.score}
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className={`mt-4 md:mt-0 md:ml-4 px-4 py-2 ${
                    edu.highlight
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-600 text-white'
                  } rounded-lg text-center`}
                >
                  <p className="text-sm font-medium">Passed</p>
                  <p className="text-lg font-bold">{edu.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-8 text-center">
          <p className="text-slate-700 text-lg">
            Dedicated to continuous learning and excellence in cloud computing technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
