import LeadershipItem from '../components/LeadershipItem'

const leadershipData = [
  {
    title: "President & Dir. of Professional Development",
    organization: "Product Space",
    period: "July 2024 - Present",
    description: "Restructured the organization, created workshops, and oversaw client projects.",
    achievements: [
      "Restructured the organization by implementing communication architecture, enforcing document control, organizing weekly standups, redefining officer roles and responsibilities, and creating newly structured events",
      "Created 7 in-depth workshops on product strategy, product-market fit, user research, and UX design, while organizing 15 total events, including speaker sessions and designathons with industry leaders",
      "Oversaw 6 client projects to foster experiential learning opportunities and real-world skill application, facilitating collaboration between 20+ students and companies nationwide, strengthening industry partnerships"
    ]
  },
  {
    title: "Secretary & Project Manager",
    organization: "Computing Student Union",
    period: "May 2024 - Present",
    description: "Managed operations for board members, organized meetings, and oversaw development of organizational products.",
    achievements: [
      "Managed organizational operations for 24 board members across 4 teams to improve UF resources for computing students, overseeing development of CSU's products including the organizational website and research course",
      "Organized 4 General Body Meetings for 400+ members and collaborated with 10+ student organizations"
    ]
  }
]

export default function Leadership() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Leadership Experience</h1>
      <div className="space-y-12">
        {leadershipData.map((item, index) => (
          <LeadershipItem key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

