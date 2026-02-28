import ServiceDetailTemplate from '../../components/ServiceDetailTemplate'

function CompanyRegistration() {
  return (
    <ServiceDetailTemplate
      slug="company-registration"
      title="Company Registration"
      summary="Private limited company setup support including incorporation essentials and practical tax onboarding guidance."
      whoItsFor={[
        'Founders forming private limited companies',
        'Growing businesses moving from sole setup',
        'Teams needing formal corporate structure',
      ]}
      deliverables={[
        'Incorporation process guidance',
        'Post-registration tax onboarding checklist',
        'Initial compliance timeline recommendations',
      ]}
      processSteps={[
        'Confirm company structure and ownership details',
        'Prepare registration records and submissions',
        'Complete company setup and share compliance roadmap',
      ]}
      relatedSlugs={['secp', 'business-registration', 'withholding-tax']}
    />
  )
}

export default CompanyRegistration
