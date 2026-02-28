import { useEffect, useMemo, useState } from 'react'
import GlassCard from '../components/GlassCard'
import Section from '../components/Section'
import { track } from '../lib/analytics'

type TaxpayerType = 'salaried' | 'non-salaried'
type SalaryPeriod = 'monthly' | 'annual'

function Calculator() {
  const [taxpayerType, setTaxpayerType] = useState<TaxpayerType>('salaried')
  const [salaryPeriod, setSalaryPeriod] = useState<SalaryPeriod>('monthly')
  const [salaryInput, setSalaryInput] = useState('')
  const [expensesInput, setExpensesInput] = useState('')

  const annualSalary = useMemo(() => {
    const value = Number(salaryInput) || 0
    return salaryPeriod === 'monthly' ? value * 12 : value
  }, [salaryInput, salaryPeriod])

  const annualExpenses = useMemo(() => Number(expensesInput) || 0, [expensesInput])

  const annualTax = useMemo(() => {
    const taxableBase = Math.max(annualSalary - annualExpenses, 0)

    if (taxpayerType === 'salaried') {
      // TODO: Implement salaried tax formula for Pakistan tax year 2025–2026.
      // TODO: Replace placeholder result with slab-based calculation.
      void taxableBase
      return 0
    }

    // TODO: Implement non-salaried tax formula for Pakistan tax year 2025–2026.
    // TODO: Replace placeholder result with slab-based calculation.
    void taxableBase
    return 0
  }, [annualSalary, annualExpenses, taxpayerType])

  useEffect(() => {
    track('calculator_result_view', {
      taxpayer_type: taxpayerType,
      salary_period: salaryPeriod,
      annual_salary: annualSalary,
      annual_expenses: annualExpenses,
    })
  }, [taxpayerType, salaryPeriod, annualSalary, annualExpenses])

  return (
    <Section>
      <div className="calculator-layout">
        <GlassCard className="calculator-card">
          <p className="calculator-eyebrow">Tax year 2025–2026</p>
          <h1>Pakistan Tax Calculator</h1>
          <p className="calculator-subcopy">Estimate annual tax using your income and expenses. Final formulas will be added next.</p>

          <div className="calculator-field-wrap">
            <p className="calculator-label">Taxpayer type</p>
            <div className="calculator-toggle-row">
              <button
                type="button"
                onClick={() => {
                  setTaxpayerType('salaried')
                  track('calculator_toggle_change', { field: 'taxpayer_type', value: 'salaried' })
                }}
                className={`calculator-toggle ${taxpayerType === 'salaried' ? 'calculator-toggle--active' : ''}`}
              >
                Salaried
              </button>
              <button
                type="button"
                onClick={() => {
                  setTaxpayerType('non-salaried')
                  track('calculator_toggle_change', { field: 'taxpayer_type', value: 'non-salaried' })
                }}
                className={`calculator-toggle ${taxpayerType === 'non-salaried' ? 'calculator-toggle--active' : ''}`}
              >
                Non-salaried
              </button>
            </div>
          </div>

          <div className="calculator-field-wrap">
            <div className="calculator-label-row">
              <label htmlFor="salary" className="calculator-label">
                Salary
              </label>
              <div className="calculator-toggle-row">
                <button
                  type="button"
                  onClick={() => {
                    setSalaryPeriod('monthly')
                    track('calculator_toggle_change', { field: 'salary_period', value: 'monthly' })
                  }}
                  className={`calculator-toggle ${salaryPeriod === 'monthly' ? 'calculator-toggle--active' : ''}`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSalaryPeriod('annual')
                    track('calculator_toggle_change', { field: 'salary_period', value: 'annual' })
                  }}
                  className={`calculator-toggle ${salaryPeriod === 'annual' ? 'calculator-toggle--active' : ''}`}
                >
                  Annual
                </button>
              </div>
            </div>
            <input
              id="salary"
              type="number"
              min="0"
              value={salaryInput}
              onChange={(event) => {
                setSalaryInput(event.target.value)
                track('calculator_input_change', { field: 'salary', value: Number(event.target.value) || 0 })
              }}
              className="calculator-input"
              placeholder={salaryPeriod === 'monthly' ? 'Enter monthly salary' : 'Enter annual salary'}
            />
            <small className="calculator-note">Internally converted annual salary: PKR {annualSalary.toFixed(2)}</small>
          </div>

          <div className="calculator-field-wrap">
            <label htmlFor="expenses" className="calculator-label">
              Expenses
            </label>
            <input
              id="expenses"
              type="number"
              min="0"
              value={expensesInput}
              onChange={(event) => {
                setExpensesInput(event.target.value)
                track('calculator_input_change', { field: 'expenses', value: Number(event.target.value) || 0 })
              }}
              className="calculator-input"
              placeholder="Enter annual expenses"
            />
          </div>
        </GlassCard>

        <GlassCard className="calculator-result-card">
          <p className="calculator-label">Estimated annual tax</p>
          <p className="calculator-result-value">PKR {annualTax.toFixed(2)}</p>
          <p className="calculator-note">This is a placeholder until official formulas are implemented.</p>
          <a href="https://wa.me/923000000000" target="_blank" rel="noreferrer" className="btn-primary">
            Ask on WhatsApp
          </a>
        </GlassCard>
      </div>
    </Section>
  )
}

export default Calculator
