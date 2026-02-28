import ServiceDetailTemplate from '../../components/ServiceDetailTemplate'

function TaxNotices() {
  return (
    <ServiceDetailTemplate
      slug="tax-notices"
      title="Tax Notices Handling"
      summary="Respond to FBR tax notices with confidence through structured review, response drafting support, and guidance."
      whoItsFor={[
        'Individuals receiving first tax notice',
        'Businesses facing compliance queries',
        'Taxpayers needing response support under deadlines',
      ]}
      deliverables={[
        'Notice review and issue breakdown',
        'Response preparation support',
        'Guidance on follow-up and record readiness',
      ]}
      processSteps={[
        'Share notice copy and timeline details',
        'Review risk points and response strategy',
        'Submit response support and next-step advisory',
      ]}
      relatedSlugs={['income-tax', 'withholding-tax', 'secp']}
    />
  )
}

export default TaxNotices
