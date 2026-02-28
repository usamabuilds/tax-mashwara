import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import About from '../pages/About'
import Calculator from '../pages/Calculator'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Testimonials from '../pages/Testimonials'
import BusinessRegistration from '../pages/services/BusinessRegistration'
import CompanyRegistration from '../pages/services/CompanyRegistration'
import IncomeTax from '../pages/services/IncomeTax'
import Ntn from '../pages/services/Ntn'
import SalesTax from '../pages/services/SalesTax'
import Secp from '../pages/services/Secp'
import TaxNotices from '../pages/services/TaxNotices'
import Trademark from '../pages/services/Trademark'
import WebsiteDesign from '../pages/services/WebsiteDesign'
import WithholdingTax from '../pages/services/WithholdingTax'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'calculator', element: <Calculator /> },
      { path: 'about', element: <About /> },
      { path: 'testimonials', element: <Testimonials /> },
      { path: 'contact', element: <Contact /> },
      { path: 'services/ntn', element: <Ntn /> },
      { path: 'services/income-tax', element: <IncomeTax /> },
      { path: 'services/sales-tax', element: <SalesTax /> },
      { path: 'services/withholding-tax', element: <WithholdingTax /> },
      { path: 'services/business-registration', element: <BusinessRegistration /> },
      { path: 'services/company-registration', element: <CompanyRegistration /> },
      { path: 'services/trademark', element: <Trademark /> },
      { path: 'services/tax-notices', element: <TaxNotices /> },
      { path: 'services/secp', element: <Secp /> },
      { path: 'services/website-design', element: <WebsiteDesign /> },
    ],
  },
])
