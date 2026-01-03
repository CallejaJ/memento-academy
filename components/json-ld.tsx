import { languages } from "@/app/i18n/settings"

export const JsonLd = ({ lng, url }: { lng: string, url: string }) => {
  const baseUrl = 'https://memento-academy.com'

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Memento Academy",
    "url": baseUrl,
    "logo": `${baseUrl}/memento-academy-logo.png`,
    "sameAs": [
      "https://twitter.com/memento_academy",
      "https://github.com/Memento-Academy"
    ],
    "description": lng === 'es' 
      ? "La forma más sencilla de entrar en Web3 y Blockchain." 
      : "The simplest onboarding to Web3 and Blockchain."
  }

  // Generate breadcrumbs based on URL path
  const pathSegments = url.split('/').filter(Boolean).slice(1) // remove empty and lng
  
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": lng === 'es' ? "Inicio" : "Home",
        "item": `${baseUrl}/${lng}`
      },
      ...pathSegments.map((segment, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
        "item": `${baseUrl}/${lng}/${pathSegments.slice(0, index + 1).join('/')}`
      }))
    ]
  }

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
    </section>
  )
}
