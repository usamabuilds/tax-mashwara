import type { HTMLAttributes, PropsWithChildren } from 'react'

type GlassCardProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    className?: string
  }
>

function GlassCard({ className = '', children, ...rest }: GlassCardProps) {
  return (
    <div className={`glass-card ${className}`.trim()} {...rest}>
      {children}
    </div>
  )
}

export default GlassCard
