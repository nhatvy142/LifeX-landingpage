import { createClient } from "contentful"

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
})

export async function getNews(limit = 10) {
  try {
    const response = await client.getEntries({
      content_type: "newsArticle",
      order: "-fields.date",
      limit,
    })
    return response.items
  } catch (error) {
    console.error("Error fetching news:", error)
    return []
  }
}

export async function getNewsArticle(slug: string) {
  try {
    const response = await client.getEntries({
      content_type: "newsArticle",
      "fields.slug": slug,
      limit: 1,
    })
    return response.items[0]
  } catch (error) {
    console.error(`Error fetching news article with slug ${slug}:`, error)
    return null
  }
}

export async function getPeople(limit = 100) {
  try {
    const response = await client.getEntries({
      content_type: "person",
      order: "fields.name",
      limit,
    })
    return response.items
  } catch (error) {
    console.error("Error fetching people:", error)
    return []
  }
}

export async function getPerson(slug: string) {
  try {
    const response = await client.getEntries({
      content_type: "person",
      "fields.slug": slug,
      limit: 1,
    })
    return response.items[0]
  } catch (error) {
    console.error(`Error fetching person with slug ${slug}:`, error)
    return null
  }
}

export async function getProjects(limit = 100) {
  try {
    const response = await client.getEntries({
      content_type: "project",
      order: "-fields.startDate",
      limit,
    })
    return response.items
  } catch (error) {
    console.error("Error fetching projects:", error)
    return []
  }
}

export async function getProject(slug: string) {
  try {
    const response = await client.getEntries({
      content_type: "project",
      "fields.slug": slug,
      limit: 1,
    })
    return response.items[0]
  } catch (error) {
    console.error(`Error fetching project with slug ${slug}:`, error)
    return null
  }
}
