import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getNewsArticle, getNews } from "@/lib/contentful"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = await getNewsArticle(params.slug)

  if (!article) {
    return {
      title: "Article Not Found - LifeX Future & Health Labs",
    }
  }

  return {
    title: `${article.fields.title} - LifeX Future & Health Labs`,
    description: article.fields.excerpt,
  }
}

export default async function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = await getNewsArticle(params.slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = await getNews(2)

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const { file, title } = node.data.target.fields
        const { url } = file
        return (
          <div className="my-8">
            <Image
              src={url || "/placeholder.svg"}
              alt={title || "Article image"}
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
                {new Date(article.fields.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            {article.fields.author && (
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span>{article.fields.author}</span>
              </div>
            )}
            {article.fields.category && (
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
                <span>{article.fields.category}</span>
              </div>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{article.fields.title}</h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">{article.fields.excerpt}</p>

          {article.fields.featuredImage && (
            <div className="rounded-lg overflow-hidden shadow-lg mb-8">
              <Image
                src={article.fields.featuredImage.fields.file.url || "/placeholder.svg"}
                alt={article.fields.title}
                width={1200}
                height={600}
                className="w-full"
              />
            </div>
          )}
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {documentToReactComponents(article.fields.content, options)}
          </div>

          {article.fields.tags && article.fields.tags.length > 0 && (
            <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {article.fields.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-semibold mb-4">Share this article</h3>
            <div className="flex space-x-4">
              <a
                href={`https://twitter.com/intent/tweet?text=${article.fields.title}&url=${encodeURIComponent(`https://lifexlabs.org/news/${article.fields.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary dark:text-gray-400"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://lifexlabs.org/news/${article.fields.slug}`)}&title=${article.fields.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary dark:text-gray-400"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://lifexlabs.org/news/${article.fields.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary dark:text-gray-400"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href={`mailto:?subject=${article.fields.title}&body=Check out this article: ${encodeURIComponent(`https://lifexlabs.org/news/${article.fields.slug}`)}`}
                className="text-gray-500 hover:text-primary dark:text-gray-400"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {relatedArticles.length > 0 && (
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-bold mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedArticles
                .filter((related: any) => related.sys.id !== article.sys.id)
                .slice(0, 2)
                .map((related: any) => (
                  <div key={related.sys.id} className="card overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <Image
                        src={
                          related.fields.featuredImage?.fields.file.url ||
                          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                        }
                        alt={related.fields.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        {new Date(related.fields.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      <h3 className="text-xl font-bold mb-3">{related.fields.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{related.fields.excerpt}</p>
                      <Link
                        href={`/news/${related.fields.slug}`}
                        className="text-primary font-medium inline-flex items-center"
                      >
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
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
