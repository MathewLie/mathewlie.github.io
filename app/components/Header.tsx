import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-between items-center">
          <li>
            <Link href="/" className="text-xl font-bold">
              Matthew Li
            </Link>
          </li>
          <li className="flex space-x-4">
            <Link href="/experience" className="hover:text-gray-300">Experience</Link>
            <Link href="/projects" className="hover:text-gray-300">Projects</Link>
            <Link href="/leadership" className="hover:text-gray-300">Leadership</Link>
            <Link href="/resume" className="hover:text-gray-300">Resume</Link>
            <Link href="/contact" className="hover:text-gray-300">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

