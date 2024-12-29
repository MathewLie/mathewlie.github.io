import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  demoLink: string
  githubLink: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, tags, demoLink, githubLink }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image src={image} alt={title} width={300} height={200} className="w-full object-cover" />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="bg-gray-200 px-2 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <Link href={demoLink} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            Live Demo
          </Link>
          <Link href={githubLink} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

