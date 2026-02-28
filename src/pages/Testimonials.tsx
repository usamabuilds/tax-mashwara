import GlassCard from '../components/GlassCard'
import Section from '../components/Section'

const videoSlots = ['Video 1', 'Video 2', 'Video 3', 'Video 4']
const quoteSlots = ['Client quote 1', 'Client quote 2', 'Client quote 3']

function Testimonials() {
  return (
    <>
      <Section>
        <GlassCard className="testimonials-hero-card">
          <h1>Client testimonials</h1>
          <p>Real feedback from Pakistan-based clients. Video links and final stories will be added soon.</p>
        </GlassCard>
      </Section>

      <Section>
        <div className="testimonials-video-grid">
          {videoSlots.map((item) => (
            <GlassCard key={item} className="testimonials-video-card">
              <h2>{item}</h2>
              {/* TODO: Add testimonial video URL */}
              <p>TODO: Embed client video testimonial.</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section>
        <div className="testimonials-quote-grid">
          {quoteSlots.map((item) => (
            <GlassCard key={item} className="testimonials-quote-card">
              <h3>{item}</h3>
              <p>TODO: Add text testimonial with client context (industry and service).</p>
            </GlassCard>
          ))}
        </div>
      </Section>
    </>
  )
}

export default Testimonials
