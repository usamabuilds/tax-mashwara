import ServiceDetailTemplate from '../../components/ServiceDetailTemplate'

function BusinessRegistration() {
  return (
    <ServiceDetailTemplate
      slug="business-registration"
      title="Business Registration"
      summary="Launch your business with structured registration support and tax onboarding guidance tailored for Pakistan."
      whoItsFor={[
        'New founders starting small businesses',
        'Freelancers formalizing operations',
        'Partnerships requiring structured setup',
      ]}
      deliverables={[
        'Business registration pathway guidance',
        'Initial tax onboarding recommendations',
        'Compliance readiness checklist for launch',
      ]}
      processSteps={[
        'Define business model and structure',
        'Prepare registration and profile details',
        'Complete setup and receive next compliance steps',
      ]}
      relatedSlugs={['company-registration', 'ntn', 'sales-tax']}
    />
  )
}

export default BusinessRegistration
