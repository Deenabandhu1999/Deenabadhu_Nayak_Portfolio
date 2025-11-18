import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-4">
          Professional Experience
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

          <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-xl shadow-lg p-8 md:ml-20 border-l-4 border-blue-600">
            <div className="absolute -left-12 top-8 w-8 h-8 bg-blue-600 rounded-full border-4 border-white hidden md:block"></div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-2xl font-bold text-slate-800 mb-2 md:mb-0">
                Engineering Analyst
              </h3>
              <div className="flex items-center gap-2 text-slate-600">
                <Calendar size={18} />
                <span className="font-medium">December 2021 - Present</span>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-2 text-blue-600 font-semibold text-lg mb-2">
                <Briefcase size={20} />
                Qualtech Consultants PVT LTD
              </div>
              <p className="text-slate-600 italic">Java Developer, BFSI Domain</p>
              <div className="flex items-center gap-2 text-slate-600 mt-2">
                <MapPin size={18} />
                <span>Gurugram, India</span>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-slate-800 mb-3">
                Client: Axis Maxlife Insurance Pvt Ltd
              </h4>

              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-slate-700 mb-2">Key Responsibilities:</h5>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Developed and maintained microservices using Spring Boot framework within enterprise architecture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Utilized AWS cloud services extensively for backend infrastructure including EC2, Lambda, API Gateway, S3, RDS, and DynamoDB</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Implemented RESTful and SOAP APIs for seamless integration with external systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Demonstrated strong problem-solving skills in dynamic BFSI environment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Collaborated effectively with cross-functional teams to deliver scalable solutions</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-slate-700 mb-2">Achievement:</h5>
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                    <p className="text-slate-700 font-medium">
                      Awarded as "Out of the Box Thinker" in H1 quarters at Qualtech Consultants Pvt. Ltd
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
