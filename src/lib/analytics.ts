const CONSENT_KEY = 'tm_consent'

type ConsentValue = 'accepted' | 'declined'
type EventParams = Record<string, string | number | boolean>

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    clarity?: (...args: unknown[]) => void
    hj?: (...args: unknown[]) => void
    __tmAnalyticsLoaded?: boolean
  }
}

function getConsent(): ConsentValue | null {
  if (typeof window === 'undefined') {
    return null
  }

  const value = window.localStorage.getItem(CONSENT_KEY)
  return value === 'accepted' || value === 'declined' ? value : null
}

function appendScript(id: string, src: string) {
  if (document.getElementById(id)) {
    return
  }

  const script = document.createElement('script')
  script.id = id
  script.async = true
  script.src = src
  document.head.appendChild(script)
}

export function loadAnalyticsIfConsented() {
  if (typeof window === 'undefined') {
    return
  }

  if (getConsent() !== 'accepted' || window.__tmAnalyticsLoaded) {
    return
  }

  window.__tmAnalyticsLoaded = true

  // TODO: Replace with real GA4 Measurement ID (G-XXXXXXXXXX).
  const GA4_ID = 'G-TO_BE_ADDED'
  // TODO: Replace with real Microsoft Clarity Project ID.
  const CLARITY_ID = 'TO_BE_ADDED'
  // TODO: Replace with real Hotjar Site ID.
  const HOTJAR_ID = 'TO_BE_ADDED'

  if (GA4_ID !== 'G-TO_BE_ADDED') {
    appendScript('tm-ga4-js', `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`)
    window.dataLayer = window.dataLayer || []
    window.gtag = window.gtag || function gtag(...args: unknown[]) { window.dataLayer?.push(args) }
    window.gtag('js', new Date())
    window.gtag('config', GA4_ID)
  }

  if (CLARITY_ID !== 'TO_BE_ADDED') {
    // TODO: Add Clarity bootstrap script when project ID is available.
    void CLARITY_ID
  }

  if (HOTJAR_ID !== 'TO_BE_ADDED') {
    // TODO: Add Hotjar bootstrap script when site ID is available.
    void HOTJAR_ID
  }
}

export function track(eventName: string, params?: EventParams) {
  if (typeof window === 'undefined' || getConsent() !== 'accepted') {
    return
  }

  window.gtag?.('event', eventName, params ?? {})
}
