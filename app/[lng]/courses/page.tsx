import { Metadata } from "next"
import { MainNav } from "@/components/main-nav"
import { Badge } from "@/components/ui/badge"
import { NewsletterForm } from "@/components/newsletter/newsletter-form"
import { CoursesGrid } from "@/components/courses/courses-grid"
import { getAllCourses } from "@/lib/courses-data"
import { useTranslation } from "@/app/i18n"

export async function generateMetadata({ params }: { params: Promise<{ lng: string }> }): Promise<Metadata> {
  const { lng } = await params
  const title = lng === 'es' ? 'Cursos | Web3 y Blockchain' : 'Courses | Web3 & Blockchain'
  const description = lng === 'es'
    ? 'Explora nuestros cursos gratuitos y premium sobre Web3, blockchain, criptomonedas y CBDCs.'
    : 'Explore our free and premium courses on Web3, blockchain, cryptocurrencies, and CBDCs.'
  
  return {
    title,
    description,
    keywords: lng === 'es' 
      ? ["cursos web3", "educación blockchain", "aprender cripto", "curso defi", "masterclass nft"]
      : ["web3 courses", "blockchain education", "crypto learning", "defi course", "nft masterclass"]
  }
}

export default async function CoursesPage({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params
  const { t } = await useTranslation(lng, "common")
  
  // Use localized courses
  const allCourses = getAllCourses(lng)
  const freeCourses = allCourses.filter(c => !c.isPremium)
  const premiumCourses = allCourses.filter(c => c.isPremium)

  return (
    <div className="min-h-screen bg-slate-950">
      <MainNav lng={lng} />
      
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-teal-500/10 text-teal-400 border-teal-500/20">
              {t('courses_page.badge')}
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              {t('courses_page.title_start')} <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">{t('courses_page.title_end')}</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {t('courses_page.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-6 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">{t('courses_page.all_courses')}</h2>
              <Badge variant="outline" className="border-slate-700 bg-slate-800/50 text-cyan-400 px-3 py-1 whitespace-nowrap w-fit">
                {allCourses.length} {t('courses_page.available')}
              </Badge>
            </div>
            
            <CoursesGrid lng={lng} />

            <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-4">{t('courses_page.subscribe_title')}</h3>
              <p className="text-slate-300 mb-6 max-w-xl mx-auto">
                {t('courses_page.subscribe_desc')}
              </p>
              <NewsletterForm variant="modal" buttonText={t('courses_page.subscribe_btn')} />
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">{t('courses_page.path_title')}</h2>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-800"></div>
              
              <div className="space-y-8">
                <div className="relative flex items-center gap-6">
                  <div className="flex-1 text-right">
                    <h3 className="text-white font-semibold">{t('courses_page.path_1_title')}</h3>
                    <p className="text-slate-400 text-sm">{t('courses_page.path_1_desc')}</p>
                  </div>
                  <div className="w-4 h-4 bg-cyan-500 rounded-full z-10"></div>
                  <div className="flex-1"></div>
                </div>
                
                <div className="relative flex items-center gap-6">
                  <div className="flex-1"></div>
                  <div className="w-4 h-4 bg-teal-500 rounded-full z-10"></div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold">{t('courses_page.path_2_title')}</h3>
                    <p className="text-slate-400 text-sm">{t('courses_page.path_2_desc')}</p>
                  </div>
                </div>
                
                <div className="relative flex items-center gap-6">
                  <div className="flex-1 text-right">
                    <h3 className="text-white font-semibold">{t('courses_page.path_3_title')}</h3>
                    <p className="text-slate-400 text-sm">{t('courses_page.path_3_desc')}</p>
                  </div>
                  <div className="w-4 h-4 bg-purple-500 rounded-full z-10"></div>
                  <div className="flex-1"></div>
                </div>
                
                <div className="relative flex items-center gap-6">
                  <div className="flex-1"></div>
                  <div className="w-4 h-4 bg-indigo-500 rounded-full z-10"></div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold">{t('courses_page.path_4_title')}</h3>
                    <p className="text-slate-400 text-sm">{t('courses_page.path_4_desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
