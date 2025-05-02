"use client"

import Link from "next/link"
import Image from "next/image"
import { getPeople } from "@/lib/contentful"
import { useEffect, useState } from "react"

export default function PeoplePageClient() {
  const [people, setPeople] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPeople()
      setPeople(data)
      setLoading(false)
    }

    fetchData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  // Group people by their role type
  const currentTeam = people.filter((person: any) => person.fields.status === "current")
  const alumni = people.filter((person: any) => person.fields.status === "alumni")

  return (
    <div className="pt-24">
      <div className="container py-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1>Our People</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Meet the innovative minds behind our groundbreaking research and development
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Current Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentTeam.map((person: any) => (
              <Link
                href={`/people/${person.fields.slug}`}
                key={person.sys.id}
                className="card text-center p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white dark:border-gray-800 shadow-md">
                  <Image
                    src={
                      person.fields.photo?.fields.file.url ||
                      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                    }
                    alt={person.fields.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{person.fields.name}</h3>
                <p className="text-primary font-medium mb-3">{person.fields.role}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{person.fields.shortBio}</p>
                <div className="flex justify-center space-x-3">
                  {person.fields.linkedin && (
                    <a
                      href={person.fields.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary dark:text-gray-400"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M12 14.121l-2.317 2.317a4 4 0 11-5.657-5.657l5.657-5.657a4 4 0 015.657 5.657l-1.413 1.413"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {alumni.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-8">Alumni</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {alumni.map((person: any) => (
                <Link
                  href={`/people/${person.fields.slug}`}
                  key={person.sys.id}
                  className="card text-center p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white dark:border-gray-800 shadow-md">
                    <Image
                      src={
                        person.fields.photo?.fields.file.url ||
                        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                      }
                      alt={person.fields.name}
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{person.fields.name}</h3>
                  <p className="text-primary font-medium mb-3">{person.fields.role}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{person.fields.shortBio}</p>
                  <div className="flex justify-center space-x-3">
                    {person.fields.linkedin && (
                      <a
                        href={person.fields.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-primary dark:text-gray-400"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            d="M12 14.121l-2.317 2.317a4 4 0 11-5.657-5.657l5.657-5.657a4 4 0 015.657 5.657l-1.413 1.413"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
