import { track } from '../lib/analytics'

type WhatsAppButtonProps = {
  eventName?: string
}

function WhatsAppButton({ eventName = 'whatsapp_click_header' }: WhatsAppButtonProps) {
  return (
    <a
      href="https://wa.me/923000000000"
      target="_blank"
      rel="noreferrer"
      className="btn-primary"
      aria-label="Chat on WhatsApp"
      onClick={() => track(eventName)}
    >
      WhatsApp
    </a>
  )
}

export default WhatsAppButton
