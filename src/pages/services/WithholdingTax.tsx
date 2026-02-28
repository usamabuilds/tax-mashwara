import ServiceDetailTemplate from '../../components/ServiceDetailTemplate'

function WithholdingTax() {
  return (
    <ServiceDetailTemplate
      slug="withholding-tax"
      title="Withholding Tax Compliance"
      summary="Stay current with withholding obligations through structured support for deductions, records, and compliance timelines."
      whoItsFor={[
        'Employers managing payroll taxes',
        'Businesses making taxable vendor payments',
        'Organizations requiring monthly compliance support',
      ]}
      deliverables={[
        'Withholding obligations mapping by transaction type',
        'Monthly compliance checklist support',
        'Guidance on maintaining deduction records',
      ]}
      processSteps={[
        'Share payment and payroll structure',
        'Review applicable withholding scenarios',
        'Follow monthly compliance cycle with guidance',
      ]}
      relatedSlugs={['income-tax', 'sales-tax', 'tax-notices']}
    />
  )
}

export default WithholdingTax
