import Link from 'next/link'

export default function Resume() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Resume</h1>
      <div className="bg-white shadow-md rounded-lg p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Matthew Li</h2>
        <p className="text-gray-600 mb-4">Product Manager & Software Engineer</p>
        <p className="mb-4">
          <a href="tel:601-278-5741" className="mr-4 text-blue-500 hover:underline">601-278-5741</a>
          <a href="mailto:matthewli73303@gmail.com" className="mr-4 text-blue-500 hover:underline">matthewli73303@gmail.com</a>
          <a href="https://www.linkedin.com/in/matthew-li733/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>
        </p>
        
        <section className="mb-6">
          <h3 className="text-2xl font-bold mb-2">Education</h3>
          <p className="font-semibold">University of Florida</p>
          <p>B.S. in Computer Science, Certificate in Artificial Intelligence</p>
          <p>Expected Graduation: May 2026</p>
          <p>GPA: 3.76/4.00</p>
          <p className="mt-2"><strong>Relevant Courses:</strong> Programming in Java/C++, Data Structures & Algorithms, UX Design, Machine Learning, Business Analytics with AI, Human-Computer Interaction, Operating Systems, Algorithm Abstraction, Databases, Statistics</p>
        </section>
        
        <section className="mb-6">
          <h3 className="text-2xl font-bold mb-2">Experience</h3>
          <div className="mb-4">
            <h4 className="text-xl font-semibold">Product Lead - MajiTech</h4>
            <p className="italic">Denver, CO | May 2024 – Present</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Led end-to-end product development for the Majitech KasiPack through 3 iterations, from proof of concept to Minimum Viable Product (MVP), enabling rapid market entry and early user feedback for product refinement</li>
              <li>Spearheaded user research initiative, directing 20+ user interviews to distinguish customer from end-user needs and informing product strategy, feature prioritization, and product requirements to improve product-market fit</li>
              <li>Launched MajiTech's first e-commerce website, designing UI/UX elements and product copy as well as establishing a new revenue stream to expand the company's market reach beyond physical sales channels</li>
              <li>Constructed the marketing content strategy for social media and defined requirements for marketing collateral, resulting in growth from 0 to 250 followers across all platforms within the first month</li>
              <li>Crafted VIP member customer journeys, resulting in a 92% conversion rate with 22 out of 24 sign-ups</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="text-xl font-semibold">Product Manager Intern - UpLift</h4>
            <p className="italic">Tampa, FL | Sept 2024 – Present</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Authored Product Requirements Document (PRD) for Uplift-U, defining the integration strategy for TAO Connect</li>
              <li>Conducted market research & competitor research in collaboration with product managers to define key product features for campus telehealth services, providing resources for over 350,000 students across 6 universities</li>
              <li>Defined product spec and scope for a virtual streamlined appointment scheduling system, reducing the steps in the customer journey from 9 to 4 and projecting a 50% reduction in manual scheduling time</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="text-xl font-semibold">Software Engineer Intern - C Spire</h4>
            <p className="italic">Ridgeland, MS | June – Aug 2024, June – July 2023</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Created logging services with Apache Kafka to track & reprocess 2.5 million monthly customer communications</li>
              <li>Implemented Java-based microservice with Kafka Producers to queue emails & SMS messages as AVRO records, establishing a log for tracking details of all sent messages and decreasing developer debugging time by 60%</li>
              <li>Established Scala-based microservice to leverage Kafka Consumers for message integration into an Oracle Database, coordinating 2 database engineers and optimizing communication flow with over 1 million customers</li>
              <li>Developed 6 REST APIs in Scala, reducing average call times by 59% compared to the legacy SOAP APIs</li>
              <li>Directed team to design a VPN product targeting 100,000+ customers in C Spire's Home Internet & Fiber Business</li>
            </ul>
          </div>
        </section>
        
        <section className="mb-6">
          <h3 className="text-2xl font-bold mb-2">Leadership & Projects</h3>
          <div className="mb-4">
            <h4 className="text-xl font-semibold">President & Dir. of Professional Development - Product Space</h4>
            <p className="italic">July 2024 – Present</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Restructured the organization by implementing communication architecture, enforcing document control, organizing weekly standups, redefining officer roles and responsibilities, and creating newly structured events</li>
              <li>Created 7 in-depth workshops on product strategy, product-market fit, user research, and UX design, while organizing 15 total events, including speaker sessions and designathons with industry leaders</li>
              <li>Oversaw 6 client projects to foster experiential learning opportunities and real-world skill application, facilitating collaboration between 20+ students and companies nationwide, strengthening industry partnerships</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="text-xl font-semibold">Secretary & Project Manager - Computing Student Union</h4>
            <p className="italic">May 2024 – Present</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Managed organizational operations for 24 board members across 4 teams to improve UF resources for computing students, overseeing development of CSU's products including the organizational website and research course</li>
              <li>Organized 4 General Body Meetings for 400+ members and collaborated with 10+ student organizations</li>
            </ul>
          </div>
        </section>
        
        <section className="mb-6">
          <h3 className="text-2xl font-bold mb-2">Technical Skills</h3>
          <p><strong>Languages:</strong> Java, C++, Python, Scala, SQL</p>
          <p><strong>Tools:</strong> Linear, Trello, JIRA, Figma, Miro, Linux, Kafka, Oracle, Git, Spring, Pandas, NumPy, Grafana</p>
        </section>
        
        <div className="text-center mt-8">
          <Link href="/Matthew-Li-Resume.pdf" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 inline-block" download>
            Download Full Resume (PDF)
          </Link>
        </div>
      </div>
    </div>
  )
}

