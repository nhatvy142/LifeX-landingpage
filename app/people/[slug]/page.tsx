import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getPerson, getProjects } from "@/lib/contentful"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const person = await getPerson(params.slug)

  if (!person) {
    return {
      title: "Person Not Found - LifeX Future & Health Labs",
    }
  }

  return {
    title: `${person.fields.name} - LifeX Future & Health Labs`,
    description: person.fields.shortBio,
  }
}

export default async function PersonPage({ params }: { params: { slug: string } }) {
  const person = await getPerson(params.slug)

  if (!person) {
    notFound()
  }

  // Get projects this person is involved in
  const allProjects = await getProjects()
  const personProjects = allProjects.filter((project: any) => {
    const teamMembers = project.fields.teamMembers || []
    return teamMembers.some((member: any) => member.sys.id === person.sys.id)
  })

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const { file, title } = node.data.target.fields
        const { url } = file
        return (
          <div className="my-8">
            <Image
              src={url || "/placeholder.svg"}
              alt={title || "Image"}
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
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg flex-shrink-0">
              <Image
                src={
                  person.fields.photo?.fields.file.url ||
                  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" ||
                  "/placeholder.svg"
                }
                alt={person.fields.name}
                width={192}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{person.fields.name}</h1>
              <p className="text-xl text-primary font-medium mb-4">{person.fields.role}</p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{person.fields.shortBio}</p>
              <div className="flex space-x-4">
                {person.fields.email && (
                  <a
                    href={`mailto:${person.fields.email}`}
                    className="text-gray-500 hover:text-primary dark:text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                )}
                {person.fields.linkedin && (
                  <a
                    href={person.fields.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary dark:text-gray-400"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                )}
                {person.fields.twitter && (
                  <a
                    href={person.fields.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary dark:text-gray-400"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                )}
                {person.fields.googleScholar && (
                  <a
                    href={person.fields.googleScholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary dark:text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </a>
                )}
                {person.fields.github && (
                  <a
                    href={person.fields.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary dark:text-gray-400"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Biography</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {person.fields.biography ? (
                documentToReactComponents(person.fields.biography, options)
              ) : (
                <p>Biography coming soon.</p>
              )}
            </div>

            {person.fields.publications && person.fields.publications.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Selected Publications</h2>
                <div className="space-y-6">
                  {person.fields.publications.map((publication: any, index: number) => (
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
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                {person.fields.email && (
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary mr-3 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">Email</p>
                      <a href={`mailto:${person.fields.email}`} className="text-primary hover:underline">
                        {person.fields.email}
                      </a>
                    </div>
                  </div>
                )}
                {person.fields.phone && (
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary mr-3 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href={`tel:${person.fields.phone}`} className="text-primary hover:underline">
                        {person.fields.phone}
                      </a>
                    </div>
                  </div>
                )}
                {person.fields.office && (
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary mr-3 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">Office</p>
                      <p>{person.fields.office}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {personProjects.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Projects</h3>
                <div className="space-y-4">
                  {personProjects.map((project: any) => (
                    <Link
                      key={project.sys.id}
                      href={`/projects/${project.fields.slug}`}
                      className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    >
                      <h4 className="font-medium text-lg mb-1">{project.fields.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{project.fields.shortDescription}</p>
                    </Link>
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
