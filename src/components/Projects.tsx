import { FolderGit2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    'ESL EKYC (NSDL) IS-REMEDIATION',
    'SOA-ONE-VIEW',
    'SOA-ONE-VIEW-AXIS',
    'CLIENTID_WELLNESS_API',
    'CRM-CONTAINER (1-5)',
    'BRMS-CONTAINER (1-3)',
    'HELPLINE_SURRENDER_SOLUTION',
    'VYMO_INTEGRATION',
    'DIALER-CALL-RECORD-SOLUTION',
    'DIALER-RENEWAL-INBOUND',
    'ECOM_CRM_INTEGRATION',
    'DIALER_UPLOAD_UTILITY',
    'DIALER_NETCORE_INTEGRATION',
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-4">
          Projects Portfolio
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-center text-slate-600 mb-12 text-lg">
          Axis Maxlife Insurance Pvt Ltd (Client Projects)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-blue-600"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                  <FolderGit2 size={20} />
                </div>
                <h3 className="text-lg font-semibold text-slate-800">
                  {project}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium">
                  Java
                </span>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium">
                  Spring Boot
                </span>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium">
                  AWS
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 text-center">
          <p className="text-slate-700 text-lg">
            All projects developed and delivered for Axis Maxlife Insurance, implementing
            enterprise-grade solutions in the BFSI domain using microservices architecture
            and AWS cloud infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
}
