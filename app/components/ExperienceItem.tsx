interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, company, location, period, description, achievements }) => {
  return (
    <div className="border-l-4 border-blue-500 pl-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <h3 className="text-xl text-gray-600">{company} - {location}</h3>
      <p className="text-gray-500 mb-2">{period}</p>
      <p className="mb-2">{description}</p>
      <ul className="list-disc pl-5">
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  )
}

export default ExperienceItem

