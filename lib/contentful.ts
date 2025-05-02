import { createClient } from "contentful"

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
})

export async function getNews(limit = 10) {
  const response = await client.getEntries({
    content_type: "newsArticle",
    order: "-fields.date",
    limit,
  })

  return response.items
}

export async function getNewsArticle(slug: string) {
  const response = await client.getEntries({
    content_type: "newsArticle",
    "fields.slug": slug,
    limit: 1,
  })

  return response.items[0]
}

export async function getPeople(limit = 100) {
  const response = await client.getEntries({
    content_type: "person",
    order: "fields.name",
    limit,
  })

  return response.items
}

export async function getPerson(slug: string) {
  const response = await client.getEntries({
    content_type: "person",
    "fields.slug": slug,
    limit: 1,
  })

  return response.items[0]
}

export async function getProjects(limit = 100) {
  const response = await client.getEntries({
    content_type: "project",
    order: "-fields.startDate",
    limit,
  })

  return response.items
}

export async function getProject(slug: string) {
  const response = await client.getEntries({
    content_type: "project",
    "fields.slug": slug,
    limit: 1,
  })

  return response.items[0]
}
