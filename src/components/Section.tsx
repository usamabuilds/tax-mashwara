import type { PropsWithChildren } from 'react'

type SectionProps = PropsWithChildren<{
  className?: string
  innerClassName?: string
}>

function Section({ className = '', innerClassName = '', children }: SectionProps) {
  return (
    <section className={`section ${className}`.trim()}>
      <div className={`section__inner ${innerClassName}`.trim()}>{children}</div>
    </section>
  )
}

export default Section
