import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { AboutPage } from '../pages/AboutPage';
import { ContactPage } from '../pages/ContactPage';
import { HomePage } from '../pages/HomePage';
import { ServicesPage } from '../pages/ServicesPage';
import { TaxCalculatorPage } from '../pages/calculators/TaxCalculatorPage';
import { IncomeTaxServicePage } from '../pages/services/IncomeTaxServicePage';
import { NTNRegistrationServicePage } from '../pages/services/NTNRegistrationServicePage';
import { SalesTaxServicePage } from '../pages/services/SalesTaxServicePage';
import { TaxPlanningServicePage } from '../pages/services/TaxPlanningServicePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'services/income-tax', element: <IncomeTaxServicePage /> },
      { path: 'services/sales-tax', element: <SalesTaxServicePage /> },
      { path: 'services/ntn-registration', element: <NTNRegistrationServicePage /> },
      { path: 'services/tax-planning', element: <TaxPlanningServicePage /> },
      { path: 'calculator', element: <TaxCalculatorPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
]);
