import ServiceDetailTemplate from '../../components/ServiceDetailTemplate'

function SalesTax() {
  return (
    <ServiceDetailTemplate
      slug="sales-tax"
      title="Sales Tax Registration"
      summary="End-to-end support for sales tax registration and practical compliance setup for taxable businesses in Pakistan."
      whoItsFor={[
        'Businesses crossing taxable thresholds',
        'Suppliers issuing taxable invoices',
        'Companies expanding regulated operations',
      ]}
      deliverables={[
        'Sales tax registration workflow support',
        'Basic filing cycle and record guidance',
        'Compliance orientation for ongoing obligations',
      ]}
      processSteps={[
        'Discuss business activity and tax exposure',
        'Prepare required registration information',
        'Complete registration and share next actions',
      ]}
      relatedSlugs={['withholding-tax', 'business-registration', 'income-tax']}
    />
  )
}

export default SalesTax
