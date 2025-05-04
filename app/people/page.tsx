// Add proper error handling for when Contentful client is not initialized
// Make sure the component can render even if data fetching fails

import { getPeople } from "@/lib/contentful"
import PeoplePageClient from "./PeoplePageClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "People | LifeX",
  description: "Meet the team behind LifeX research",
}

export default async function PeoplePage() {
  try {
    const peopleData = await getPeople()

    // If we couldn't get people data, provide a fallback
    if (!peopleData || peopleData.length === 0) {
      return (
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">Our Team</h1>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <p className="text-yellow-700">
              We're currently experiencing issues loading our team data. Please check back later.
            </p>
            <p className="text-yellow-700 mt-2">
              If you're the site administrator, please verify your Contentful environment variables are correctly set.
            </p>
          </div>
        </div>
      )
    }

    return <PeoplePageClient people={peopleData} />
  } catch (error) {
    console.error("Error in PeoplePage:", error)

    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Our Team</h1>
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <p className="text-red-700">An error occurred while loading the team data. Please try again later.</p>
        </div>
      </div>
    )
  }
}
