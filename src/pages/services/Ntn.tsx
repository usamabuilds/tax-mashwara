import ServiceDetailTemplate from '../../components/ServiceDetailTemplate'

function Ntn() {
  return (
    <ServiceDetailTemplate
      slug="ntn"
      title="NTN Registration"
      summary="Quick and compliant NTN registration support for salaried individuals, freelancers, and new taxpayers in Pakistan."
      whoItsFor={[
        'Salaried individuals filing first return',
        'Freelancers receiving local or foreign payments',
        'Small business owners needing tax identity',
      ]}
      deliverables={[
        'NTN application preparation and submission guidance',
        'Profile setup support for FBR portal access',
        'Basic compliance next-steps after registration',
      ]}
      processSteps={[
        'Share profile and contact details on WhatsApp',
        'Provide required identification and income context',
        'Receive NTN completion update and next-step guidance',
      ]}
      relatedSlugs={['income-tax', 'tax-notices', 'business-registration']}
    />
  )
}

export default Ntn
