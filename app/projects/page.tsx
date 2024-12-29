import ProjectCard from '../components/ProjectCard'

const projectsData = [
  {
    title: "MajiTech KasiPack Development",
    description: "Led end-to-end product development through 3 iterations, from proof of concept to MVP, enabling rapid market entry and early user feedback.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Product Development", "User Research", "E-commerce"],
    demoLink: "#",
    githubLink: "#",
  },
  // You can add more projects here as needed
]

export default function Projects() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

