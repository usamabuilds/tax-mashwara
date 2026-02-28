import ServiceDetailTemplate from '../../components/ServiceDetailTemplate'

function Secp() {
  return (
    <ServiceDetailTemplate
      slug="secp"
      title="SECP Compliance"
      summary="Ongoing SECP filing and compliance support to help companies maintain timely statutory obligations in Pakistan."
      whoItsFor={[
        'Private limited companies with recurring filings',
        'Directors managing annual compliance',
        'Teams needing practical governance support',
      ]}
      deliverables={[
        'SECP compliance calendar guidance',
        'Filing preparation support for recurring obligations',
        'Follow-up guidance for timely submissions',
      ]}
      processSteps={[
        'Assess current filing status and deadlines',
        'Prepare required corporate records',
        'Complete filings and align future compliance rhythm',
      ]}
      relatedSlugs={['company-registration', 'tax-notices', 'withholding-tax']}
    />
  )
}

export default Secp
