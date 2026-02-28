import { track } from './analytics'

const MARKS = [25, 50, 75, 100] as const

export function initScrollDepthTracking(pathname: string) {
  if (typeof window === 'undefined') {
    return () => {}
  }

  const fired = new Set<number>()

  const emitDepth = () => {
    const scrollTop = window.scrollY
    const viewport = window.innerHeight
    const bodyHeight = document.documentElement.scrollHeight
    const trackableHeight = Math.max(bodyHeight - viewport, 1)
    const depth = Math.min(100, Math.round((scrollTop / trackableHeight) * 100))

    for (const mark of MARKS) {
      if (depth >= mark && !fired.has(mark)) {
        fired.add(mark)
        track(`scroll_depth_${mark}`, { path: pathname })
      }
    }
  }

  emitDepth()
  window.addEventListener('scroll', emitDepth, { passive: true })

  return () => {
    window.removeEventListener('scroll', emitDepth)
  }
}
