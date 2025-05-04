"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function PeoplePageClient({ people = [] }) {
  const [filter, setFilter] = useState("all")

  // Early return if people is not an array or is empty
  if (!Array.isArray(people) || people.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Our Team</h1>
        <p className="text-gray-600">No team members found.</p>
      </div>
    )
  }

  const categories = ["all", ...new Set(people.map((person) => person.fields?.category || "uncategorized"))]

  const filteredPeople = filter === "all" ? people : people.filter((person) => person.fields?.category === filter)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Team</h1>

      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full ${
                filter === category ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPeople.map((person) => {
          // Handle missing fields gracefully
          if (!person.fields) return null

          const { name, role, slug, image } = person.fields
          const imageUrl = image?.fields?.file?.url
            ? `https:${image.fields.file.url}`
            : "/placeholder.svg?height=400&width=400"

          return (
            <Link
              href={`/people/${slug || "#"}`}
              key={person.sys.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image src={imageUrl || "/placeholder.svg"} alt={name || "Team member"} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{name || "Unknown"}</h2>
                <p className="text-gray-600 dark:text-gray-300">{role || "Team Member"}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
