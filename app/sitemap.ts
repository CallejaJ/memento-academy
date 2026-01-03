import { MetadataRoute } from 'next'
import { languages, fallbackLng } from './i18n/settings'
import { getAllCourses } from '@/lib/courses-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://memento-academy.com' 

  const staticRoutes = [
    '',
    '/courses',
    '/mission',
    '/community',
    // Add other static routes here
  ]

  const sitemapEntries: MetadataRoute.Sitemap = []

  languages.forEach(lng => {
    // 1. Static Routes per language
    staticRoutes.forEach(route => {
      sitemapEntries.push({
        url: `${baseUrl}/${lng}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
      })
    })

    // 2. Dynamic Course Routes per language
    const courses = getAllCourses(lng)
    courses.forEach(course => {
       sitemapEntries.push({
        url: `${baseUrl}/${lng}${course.href}`, 
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      })
    })
  })

  return sitemapEntries
}
