import type { ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary'

export function Button({
  variant = 'primary',
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 disabled:opacity-60 disabled:pointer-events-none'
  const styles =
    variant === 'primary'
      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
      : 'bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50'

  return <button className={`${base} ${styles} ${className}`} {...props} />
}


