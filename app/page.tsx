"use client"

import Link from "next/link"
import Image from "next/image"
import { getNews, getPeople, getProjects } from "@/lib/contentful"
import { Button } from "@/components/ui/button"

export default async function Home() {
  // Add error handling for data fetching
  let newsArticles = []
  let teamMembers = []
  let projects = []

  try {
    const [newsData, peopleData, projectsData] = await Promise.all([getNews(3), getPeople(4), getProjects(3)])

    newsArticles = newsData || []
    teamMembers = peopleData || []
    projects = projectsData || []
  } catch (error) {
    console.error("Error fetching data:", error)
    // Continue with empty arrays as fallback
  }

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center pt-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Pioneering the Future of Health
              </h1>
              <p className="text-xl text-primary font-medium">
                Where AI, Wearable Technology, and Human Potential Converge
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                At LifeX Labs, we're developing cutting-edge AI-driven wearables and edge computing solutions to enhance
                cognitive performance and extend human longevity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact">
                  <Button className="btn-primary">Schedule a Meeting</Button>
                </Link>
                <Link href="#research">
                  <Button variant="outline" className="btn-outline">
                    Explore Research
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Advanced wearable technology device developed by LifeX Labs"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2>About LifeX Labs</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Pioneering research at the intersection of technology and human health
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Researcher working with advanced wearable technology in the LifeX lab"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h3>Redefining Health Through Technology</h3>
              <p>
                The LifeX Labs for Cognitive Performance and Longevity is at the forefront of developing innovative
                technologies to improve cognitive health and extend human potential.
              </p>
              <p>
                Building on a decade of groundbreaking research, our interdisciplinary team focuses on real-time
                biosignal tracking, automated data pipelines, and drug-free cognitive interventions that are
                revolutionizing how we approach health and wellness.
              </p>
              <p>
                Our mission is to create scalable, human-centric solutions that enhance cognitive performance and
                promote longevity through the seamless integration of AI, wearable technology, and advanced computing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2>Key Research Areas</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Exploring the frontiers of cognitive enhancement and health monitoring
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Earable Computing</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Developing non-invasive, ear-based wearables with advanced sensors like EEG and PPG for real-time
                cognitive and physiological monitoring with unprecedented accuracy.
              </p>
            </div>
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Human-Centric Data Collection</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Utilizing automated pipelines for cost-efficient, high-integrity data acquisition to accelerate clinical
                trials and research outcomes with minimal participant burden.
              </p>
            </div>
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Drug-Free Cognitive Control</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Employing audio, cognitive behavioral therapy, vibration, and light-based stimulation to optimize sleep,
                focus, and mental health without pharmaceutical interventions.
              </p>
            </div>
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Edge Computing for Healthcare</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Designing low-power algorithms for on-device privacy and real-time applications like fall detection,
                seizure monitoring, and cognitive performance tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* People Section */}
      <section id="people" className="bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2>Our People</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Meet the innovative minds behind our groundbreaking research and development
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.length > 0
              ? teamMembers.map((member: any) => (
                  <Link
                    key={member.sys.id}
                    href={`/people/${member.fields.slug}`}
                    className="card text-center p-6 transition-transform hover:scale-105"
                  >
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white dark:border-gray-800 shadow-md">
                      <Image
                        src={
                          member.fields.photo?.fields.file.url ||
                          "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" ||
                          "/placeholder.svg" ||
                          "/placeholder.svg" ||
                          "/placeholder.svg"
                        }
                        alt={member.fields.name}
                        width={128}
                        height={128}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{member.fields.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.fields.role}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{member.fields.shortBio}</p>
                    <div className="flex justify-center space-x-3">
                      {member.fields.linkedin && (
                        <a
                          href={member.fields.linkedin}
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
                      {member.fields.twitter && (
                        <a
                          href={member.fields.twitter}
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
                      {member.fields.googleScholar && (
                        <a
                          href={member.fields.googleScholar}
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
                    <div className="mt-4">
                      <span className="inline-block text-primary text-sm font-medium hover:underline">
                        View Full Profile
                      </span>
                    </div>
                  </Link>
                ))
              : // Fallback content when no team members are available
                Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="card text-center p-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white dark:border-gray-800 shadow-md bg-gray-200 dark:bg-gray-700"></div>
                    <h3 className="text-xl font-bold mb-1">Team Member</h3>
                    <p className="text-primary font-medium mb-3">Researcher</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Contributing to groundbreaking research in health technology and cognitive science.
                    </p>
                  </div>
                ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/people">
              <Button variant="outline">View All Team Members</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2>Latest News & Publications</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Stay updated with our research breakthroughs and industry developments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.length > 0
              ? newsArticles.map((article: any) => (
                  <Link
                    key={article.sys.id}
                    href={`/news/${article.fields.slug}`}
                    className="card overflow-hidden transition-transform hover:scale-105"
                  >
                    <div className="h-48 overflow-hidden">
                      <Image
                        src={
                          article.fields.featuredImage?.fields.file.url ||
                          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" ||
                          "/placeholder.svg" ||
                          "/placeholder.svg" ||
                          "/placeholder.svg"
                        }
                        alt={article.fields.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover transition-transform hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        {new Date(article.fields.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      <h3 className="text-xl font-bold mb-3">{article.fields.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{article.fields.excerpt}</p>
                      <span className="text-primary font-medium inline-flex items-center">
                        Read More
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
                      </span>
                    </div>
                  </Link>
                ))
              : // Fallback content when no news articles are available
                Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="card overflow-hidden">
                    <div className="h-48 overflow-hidden bg-gray-200 dark:bg-gray-700"></div>
                    <div className="p-6">
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        {new Date().toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      <h3 className="text-xl font-bold mb-3">Latest Research Development</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Exciting new developments in our research on cognitive enhancement and health monitoring
                        technologies.
                      </p>
                      <span className="text-primary font-medium inline-flex items-center">Coming Soon</span>
                    </div>
                  </div>
                ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/news">
              <Button variant="outline">View All News</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2>Featured Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Explore our innovative research initiatives</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.length > 0
              ? projects.map((project: any) => (
                  <Link
                    key={project.sys.id}
                    href={`/projects/${project.fields.slug}`}
                    className="card overflow-hidden transition-transform hover:scale-105"
                  >
                    <div className="h-48 overflow-hidden">
                      <Image
                        src={
                          project.fields.featuredImage?.fields.file.url ||
                          "https://images.unsplash.com/photo-1581093451887-5920828efeea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" ||
                          "/placeholder.svg" ||
                          "/placeholder.svg" ||
                          "/placeholder.svg"
                        }
                        alt={project.fields.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover transition-transform hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-primary font-medium mb-2">{project.fields.category}</p>
                      <h3 className="text-xl font-bold mb-3">{project.fields.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{project.fields.shortDescription}</p>
                      <span className="text-primary font-medium inline-flex items-center">
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
                      </span>
                    </div>
                  </Link>
                ))
              : // Fallback content when no projects are available
                Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="card overflow-hidden">
                    <div className="h-48 overflow-hidden bg-gray-200 dark:bg-gray-700"></div>
                    <div className="p-6">
                      <p className="text-sm text-primary font-medium mb-2">Research</p>
                      <h3 className="text-xl font-bold mb-3">Innovative Project</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Cutting-edge research project focused on improving cognitive health and human potential.
                      </p>
                      <span className="text-primary font-medium inline-flex items-center">Coming Soon</span>
                    </div>
                  </div>
                ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/projects">
              <Button variant="outline">View All Projects</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section id="collaboration">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2>Research Collaboration Opportunities</h2>
              <p>
                We invite industry partners, research institutions, investors, and portfolio companies to co-develop and
                validate wearable technologies with us. Together, we can accelerate innovation and bring cutting-edge
                solutions to market.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Access to Cutting-Edge Research</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Collaborate with leading researchers in AI, wearable technology, and cognitive science.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Clinical Validation</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Leverage our expertise in designing and conducting rigorous clinical studies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Technology Transfer</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Opportunities for licensing and commercializing innovative technologies.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Link href="#contact">
                  <Button className="btn-primary">Discuss Collaboration</Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Research team collaborating on a project"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2>Get in Touch</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We'd love to hear from you and explore potential collaborations
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Interested in learning more about our research, collaboration opportunities, or scheduling a meeting?
                  We'd love to hear from you.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mt-1 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      LifeX Labs
                      <br />
                      123 Innovation Drive, Suite 300
                      <br />
                      Hanover, NH 03755
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mt-1 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary"
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
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      <a href="mailto:contact@lifexlabs.org" className="hover:text-primary">
                        contact@lifexlabs.org
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mt-1 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary"
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
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      <a href="tel:+16031234567" className="hover:text-primary">
                        (603) 123-4567
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Stay updated with our latest research and events.
                </p>
                <form className="space-y-4">
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full btn-primary">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold mb-4">Schedule a Meeting</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name *"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email *"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="sr-only">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    placeholder="Organization"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="sr-only">
                    Area of Interest
                  </label>
                  <select
                    id="interest"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Area of Interest *
                    </option>
                    <option value="research">Research Collaboration</option>
                    <option value="industry">Industry Partnership</option>
                    <option value="investment">Investment Opportunities</option>
                    <option value="student">Student Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your Message *"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  ></textarea>
                </div>
                <div className="flex items-start">
                  <input type="checkbox" id="consent" className="mt-1 mr-2" required />
                  <label htmlFor="consent" className="text-sm text-gray-600 dark:text-gray-400">
                    I consent to LifeX Labs collecting and storing my data for the purpose of responding to my inquiry.
                  </label>
                </div>
                <Button type="submit" className="w-full btn-primary">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
