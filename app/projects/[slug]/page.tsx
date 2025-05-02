import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getProject } from "@/lib/contentful"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug)

  if (!project) {
    return {
      title: "Project Not Found - LifeX Future & Health Labs",
    }
  }

  return {
    title: `${project.fields.title} - LifeX Future & Health Labs`,
    description: project.fields.shortDescription,
  }
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug)

  if (!project) {
    notFound()
  }

  // Get team members for this project
  const teamMembers = project.fields.teamMembers || []

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const { file, title } = node.data.target.fields
        const { url } = file
        return (
          <div className="my-8">
            <Image
              src={url || "/placeholder.svg"}
              alt={title || "Project image"}
              width={800}
              height={450}
              className="rounded-lg shadow-md"
            />
          </div>
        )
      },
      [INLINES.HYPERLINK]: (node: any, children: any) => {
        return (
          <a href={node.data.uri} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        )
      },
    },
  }

  return (
    <div className="pt-24">
      <div className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container">
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
            {project.fields.startDate && (
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>
                  Started:{" "}
                  {new Date(project.fields.startDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                  })}
                </span>
              </div>
            )}
            {project.fields.endDate && (
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>
                  Completed:{" "}
                  {new Date(project.fields.endDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                  })}
                </span>
              </div>
            )}
            {project.fields.category && (
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
                <span>{project.fields.category}</span>
              </div>
            )}
            {project.fields.status && (
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Status: {project.fields.status}</span>
              </div>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{project.fields.title}</h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">{project.fields.shortDescription}</p>

          {project.fields.featuredImage && (
            <div className="rounded-lg overflow-hidden shadow-lg mb-8">
              <Image
                src={project.fields.featuredImage.fields.file.url || "/placeholder.svg"}
                alt={project.fields.title}
                width={1200}
                height={600}
                className="w-full"
              />
            </div>
          )}
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {project.fields.description ? (
                documentToReactComponents(project.fields.description, options)
              ) : (
                <p>Project description coming soon.</p>
              )}
            </div>

            {project.fields.keyFeatures && project.fields.keyFeatures.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.fields.keyFeatures.map((feature: any, index: number) => (
                    <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{feature.fields.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{feature.fields.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.fields.publications && project.fields.publications.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Related Publications</h2>
                <div className="space-y-6">
                  {project.fields.publications.map((publication: any, index: number) => (
                    <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold mb-2">{publication.fields.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 italic mb-3">{publication.fields.authors}</p>
                      <p className="text-primary font-medium mb-3">{publication.fields.journal}</p>
                      {publication.fields.abstract && (
                        <p className="text-gray-700 dark:text-gray-300 mb-3">{publication.fields.abstract}</p>
                      )}
                      {publication.fields.doi && (
                        <a
                          href={`https://doi.org/${publication.fields.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary font-medium inline-flex items-center"
                        >
                          View Publication
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
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            {teamMembers.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Project Team</h3>
                <div className="space-y-6">
                  {teamMembers.map((member: any) => (
                    <Link
                      key={member.sys.id}
                      href={`/people/${member.fields.slug}`}
                      className="flex items-center gap-4 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded-lg transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={
                            member.fields.photo?.fields.file.url ||
                            "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" ||
                            "/placeholder.svg"
                          }
                          alt={member.fields.name}
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{member.fields.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{member.fields.role}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {project.fields.technologies && project.fields.technologies.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.fields.technologies.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.fields.resources && project.fields.resources.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Resources</h3>
                <div className="space-y-4">
                  {project.fields.resources.map((resource: any, index: number) => (
                    <a
                      key={index}
                      href={resource.fields.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium">{resource.fields.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{resource.fields.description}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
