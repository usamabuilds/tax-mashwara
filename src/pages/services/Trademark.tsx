import ServiceDetailTemplate from '../../components/ServiceDetailTemplate'

function Trademark() {
  return (
    <ServiceDetailTemplate
      slug="trademark"
      title="Trademark Registration"
      summary="Protect your brand identity in Pakistan with guided trademark filing support and practical next-step advice."
      whoItsFor={[
        'Startups launching branded services',
        'Ecommerce businesses protecting brand assets',
        'Established firms expanding product lines',
      ]}
      deliverables={[
        'Trademark filing preparation guidance',
        'Class selection support based on business use',
        'Submission process updates and follow-up guidance',
      ]}
      processSteps={[
        'Share brand name and usage details',
        'Finalize filing information and class strategy',
        'Submit and track with status guidance',
      ]}
      relatedSlugs={['business-registration', 'company-registration', 'website-design']}
    />
  )
}

export default Trademark
