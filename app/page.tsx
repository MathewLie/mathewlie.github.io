import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Matthew Li</h1>
        <h2 className="text-2xl text-gray-600 mb-6">Product Manager & Software Engineer</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Computer Science student at the University of Florida with a focus on Artificial Intelligence. 
          Passionate about creating innovative products and leveraging technology to solve complex problems.
        </p>
        <Link href="/contact" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 inline-block mb-12">
          Get in Touch
        </Link>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['Java', 'C++', 'Python', 'Scala', 'SQL', 'Product Management', 'UX Design', 'Machine Learning', 'Agile Methodologies', 'Data Analysis'].map((skill) => (
            <span key={skill} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}

