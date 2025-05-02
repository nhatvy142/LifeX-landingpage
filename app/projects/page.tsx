import Link from "next/link"
import Image from "next/image"
import { getProjects } from "@/lib/contentful"

export const metadata = {
  title: "Projects - LifeX Future & Health Labs",
  description: "Explore our innovative research projects at LifeX Labs.",
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  // Group projects by category
  const projectsByCategory: Record<string, any[]> = {}
  projects.forEach((project: any) => {
    const category = project.fields.category || "Other"
    if (!projectsByCategory[category]) {
      projectsByCategory[category] = []
    }
    projectsByCategory[category].push(project)
  })

  return (
    <div className="pt-24">
      <div className="container py-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1>Research Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Explore our innovative research initiatives and technological breakthroughs
          </p>
        </div>

        {Object.entries(projectsByCategory).map(([category, categoryProjects]) => (
          <div key={category} className="mb-16">
            <h2 className="text-2xl font-bold mb-8">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryProjects.map((project: any) => (
                <Link
                  href={`/projects/${project.fields.slug}`}
                  key={project.sys.id}
                  className="card overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <Image
                      src={
                        project.fields.featuredImage?.fields.file.url ||
                        "https://images.unsplash.com/photo-1581093451887-5920828efeea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" ||
                        "/placeholder.svg"
                      }
                      alt={project.fields.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-sm text-primary font-medium">{project.fields.category}</p>
                      {project.fields.status && (
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            project.fields.status === "Active"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                              : project.fields.status === "Completed"
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                          }`}
                        >
                          {project.fields.status}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{project.fields.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.fields.shortDescription}</p>
                    <div className="text-primary font-medium inline-flex items-center">
                      View Project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
