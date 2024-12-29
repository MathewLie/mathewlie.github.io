import ExperienceItem from '../components/ExperienceItem'

const experienceData = [
  {
    title: "Product Lead",
    company: "MajiTech",
    location: "Denver, CO",
    period: "May 2024 - Present",
    description: "Led end-to-end product development for the Majitech KasiPack, spearheaded user research, launched e-commerce website, and crafted marketing strategies.",
    achievements: [
      "Led end-to-end product development for the Majitech KasiPack through 3 iterations, from proof of concept to Minimum Viable Product (MVP), enabling rapid market entry and early user feedback for product refinement",
      "Spearheaded user research initiative, directing 20+ user interviews to distinguish customer from end-user needs and informing product strategy, feature prioritization, and product requirements to improve product-market fit",
      "Launched MajiTech's first e-commerce website, designing UI/UX elements and product copy as well as establishing a new revenue stream to expand the company's market reach beyond physical sales channels",
      "Constructed the marketing content strategy for social media and defined requirements for marketing collateral, resulting in growth from 0 to 250 followers across all platforms within the first month",
      "Crafted VIP member customer journeys, resulting in a 92% conversion rate with 22 out of 24 sign-ups"
    ]
  },
  {
    title: "Product Manager Intern",
    company: "UpLift",
    location: "Tampa, FL",
    period: "Sept 2024 - Present",
    description: "Authored PRD for Uplift-U, conducted market research, and defined product specs for virtual appointment scheduling system.",
    achievements: [
      "Authored Product Requirements Document (PRD) for Uplift-U, defining the integration strategy for TAO Connect",
      "Conducted market research & competitor research in collaboration with product managers to define key product features for campus telehealth services, providing resources for over 350,000 students across 6 universities",
      "Defined product spec and scope for a virtual streamlined appointment scheduling system, reducing the steps in the customer journey from 9 to 4 and projecting a 50% reduction in manual scheduling time"
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "C Spire",
    location: "Ridgeland, MS",
    period: "June - Aug 2024, June - July 2023",
    description: "Created logging services, implemented microservices, developed REST APIs, and directed VPN product design.",
    achievements: [
      "Created logging services with Apache Kafka to track & reprocess 2.5 million monthly customer communications",
      "Implemented Java-based microservice with Kafka Producers to queue emails & SMS messages as AVRO records, establishing a log for tracking details of all sent messages and decreasing developer debugging time by 60%",
      "Established Scala-based microservice to leverage Kafka Consumers for message integration into an Oracle Database, coordinating 2 database engineers and optimizing communication flow with over 1 million customers",
      "Developed 6 REST APIs in Scala, reducing average call times by 59% compared to the legacy SOAP APIs",
      "Directed team to design a VPN product targeting 100,000+ customers in C Spire's Home Internet & Fiber Business"
    ]
  },
]

export default function Experience() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Work Experience</h1>
      <div className="space-y-12">
        {experienceData.map((experience, index) => (
          <ExperienceItem key={index} {...experience} />
        ))}
      </div>
    </div>
  )
}

