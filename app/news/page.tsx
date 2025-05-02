import Link from "next/link"
import Image from "next/image"
import { getNews } from "@/lib/contentful"

export const metadata = {
  title: "News & Publications - LifeX Future & Health Labs",
  description: "Stay updated with the latest news, research breakthroughs, and publications from LifeX Labs.",
}

export default async function NewsPage() {
  const newsArticles = await getNews(100)

  return (
    <div className="pt-24">
      <div className="container py-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1>News & Publications</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Stay updated with our latest research breakthroughs and industry developments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article: any) => (
            <div key={article.sys.id} className="card overflow-hidden">
              <div className="h-48 overflow-hidden">
                <Image
                  src={
                    article.fields.featuredImage?.fields.file.url ||
                    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  }
                  alt={article.fields.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
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
                <Link
                  href={`/news/${article.fields.slug}`}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
