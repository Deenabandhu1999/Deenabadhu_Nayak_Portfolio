import { Code, Boxes, Cloud, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Programming',
      skills: ['C', 'Core Java', 'SQL', 'PostgreSQL'],
    },
    {
      icon: <Boxes className="w-6 h-6" />,
      title: 'Framework & Architecture',
      skills: [
        'Spring',
        'Spring Boot',
        'Hibernate',
        'MVC',
        'REST',
        'SOAP',
        'Microservices',
      ],
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'AWS Cloud Services',
      skills: [
        'VPC',
        'IAM',
        'EC2',
        'ECS',
        'Lambda',
        'API Gateway',
        'Route 53',
        'S3',
        'S3 Glacier',
        'SQS',
        'SNS',
        'CloudFront',
        'RDS',
        'Step Function',
        'DynamoDB',
        'AWS Aurora',
        'CloudWatch',
        'OpenSearch',
        'SSM',
        'Batch',
        'Secret Manager',
        'Cognito',
        'Corretto',
      ],
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Tools & Technologies',
      skills: [
        'Thymeleaf',
        'HTML',
        'CSS',
        'Bootstrap',
        'JSON',
        'XML',
        'SVN',
        'Git',
        'SonarQube',
        'Jenkins',
        'Postman',
        'SoapUI',
        'JMeter',
        'Eclipse IDE',
        'IntelliJ IDEA',
        'Spring Tool Suite (STS)',
        'Maven',
        'Docker',
        'AWS',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-4">
          Skills & Expertise
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold text-slate-800">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
