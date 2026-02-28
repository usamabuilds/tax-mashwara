import ServiceDetailTemplate from '../../components/ServiceDetailTemplate'

function IncomeTax() {
  return (
    <ServiceDetailTemplate
      slug="income-tax"
      title="Income Tax Filing"
      summary="Accurate annual return filing support to help individuals and businesses stay compliant with Pakistan tax requirements."
      whoItsFor={[
        'Salaried taxpayers',
        'Freelancers and consultants',
        'Business owners and partners',
      ]}
      deliverables={[
        'Income tax return drafting and review',
        'Tax position guidance based on available records',
        'Submission support and filing confirmation',
      ]}
      processSteps={[
        'Share income and deduction details',
        'Review return summary before submission',
        'Submit return and receive compliance guidance',
      ]}
      relatedSlugs={['ntn', 'withholding-tax', 'tax-notices']}
    />
  )
}

export default IncomeTax
