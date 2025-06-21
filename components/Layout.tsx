import { ReactNode } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Head from 'next/head'
import { useRouter } from 'next/router'
import { defaultSEO, pageSEO } from '../seo'
import { Toaster } from "react-hot-toast"

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter()
  
  // Get current path segments
  const segments = router.pathname.split('/').filter(Boolean)
  
  // Dynamically get SEO data based on current route
  const getSEOData = () => {
    if (segments.length === 0) return pageSEO.home
    
    let seoData = pageSEO as any
    
    for (const segment of segments) {
      if (seoData[segment]) {
        seoData = seoData[segment]
      }
    }
    
    return seoData || pageSEO.home
  }
  
  const currentSEO = getSEOData()
  
  return (
    <>
      <Head>
        <title>{currentSEO.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta property="og:title" content={currentSEO.title} />
        <meta property="og:description" content={currentSEO.description} />
        <meta property="og:url" content={`${defaultSEO.openGraph.url}${router.pathname}`} />
        <meta property="og:type" content={defaultSEO.openGraph.type} />
        <meta property="og:locale" content={defaultSEO.openGraph.locale} />
        <meta property="og:site_name" content={defaultSEO.openGraph.site_name} />
      </Head>

      <div className="min-h-screen flex flex-col font-nunito max-w-6xl container mx-auto">
        <Navbar />

        <Toaster 
          position="top-center"
        />

        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </div>
    </>
  )
}

export default Layout