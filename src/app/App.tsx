import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import ConsentBanner from '../components/ConsentBanner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { loadAnalyticsIfConsented, track } from '../lib/analytics'
import { initScrollDepthTracking } from '../lib/scrollDepth'

function App() {
  const location = useLocation()

  useEffect(() => {
    loadAnalyticsIfConsented()
    track('page_view', { path: location.pathname })

    const cleanup = initScrollDepthTracking(location.pathname)
    return cleanup
  }, [location.pathname])

  return (
    <div className="site-shell">
      <Header />
      <main className="page-main">
        <Outlet />
      </main>
      <Footer />
      <ConsentBanner />
    </div>
  )
}

export default App
