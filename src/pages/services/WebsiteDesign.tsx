import ServiceDetailTemplate from '../../components/ServiceDetailTemplate'

function WebsiteDesign() {
  return (
    <ServiceDetailTemplate
      slug="website-design"
      title="Website Design for Tax Firms"
      summary="Build a clean, trustworthy online presence for your tax or consulting practice with conversion-focused website design."
      whoItsFor={[
        'Tax consultants launching a new website',
        'Advisory firms improving lead generation',
        'Practices modernizing brand presentation',
      ]}
      deliverables={[
        'Modern page structure and content flow planning',
        'Service-focused website design guidance',
        'Lead-oriented CTA placement recommendations',
      ]}
      processSteps={[
        'Share business profile and target audience',
        'Review layout and content direction',
        'Finalize design deliverables and handoff guidance',
      ]}
      relatedSlugs={['trademark', 'business-registration', 'company-registration']}
    />
  )
}

export default WebsiteDesign
