import { useEffect, useState } from 'react'
import { loadAnalyticsIfConsented } from '../lib/analytics'

const CONSENT_KEY = 'tm_consent'

type ConsentValue = 'accepted' | 'declined'

function ConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const value = window.localStorage.getItem(CONSENT_KEY)
    if (value !== 'accepted' && value !== 'declined') {
      setVisible(true)
      return
    }

    if (value === 'accepted') {
      loadAnalyticsIfConsented()
    }
  }, [])

  const setConsent = (value: ConsentValue) => {
    window.localStorage.setItem(CONSENT_KEY, value)
    setVisible(false)

    if (value === 'accepted') {
      loadAnalyticsIfConsented()
    }
  }

  if (!visible) {
    return null
  }

  return (
    <div className="consent-banner glass-card" role="dialog" aria-live="polite" aria-label="Analytics consent">
      <p>We use analytics to improve experience.</p>
      <div className="consent-banner__actions">
        <button type="button" className="consent-btn consent-btn--accept" onClick={() => setConsent('accepted')}>
          Accept
        </button>
        <button type="button" className="consent-btn" onClick={() => setConsent('declined')}>
          Decline
        </button>
      </div>
    </div>
  )
}

export default ConsentBanner
