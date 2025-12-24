import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

export function FeatureGrid({ children }: { children: ReactNode }) {
  return <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
}

export function Card({
  title,
  subtitle,
  icon: Icon,
  children,
  gradient,
}: {
  title: string
  subtitle?: string
  icon?: LucideIcon
  children: ReactNode
  gradient?: 'indigo' | 'blue' | 'purple' | 'emerald'
}) {
  const gradientClasses = {
    indigo: 'from-indigo-50 to-blue-50',
    blue: 'from-blue-50 to-cyan-50',
    purple: 'from-purple-50 to-pink-50',
    emerald: 'from-emerald-50 to-teal-50',
  }
  const iconColors = {
    indigo: 'text-indigo-600 bg-indigo-100',
    blue: 'text-blue-600 bg-blue-100',
    purple: 'text-purple-600 bg-purple-100',
    emerald: 'text-emerald-600 bg-emerald-100',
  }
  const grad = gradient || 'indigo'

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md hover:ring-indigo-200">
      {gradient && (
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientClasses[grad]} opacity-0 transition-opacity group-hover:opacity-100`} />
      )}
      <div className="relative">
        {Icon && (
          <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl ${iconColors[grad]}`}>
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
        )}
        <div className="flex items-baseline gap-2">
          <div className="text-base font-semibold text-slate-900">{title}</div>
          {subtitle ? <div className="text-xs font-medium text-slate-500">{subtitle}</div> : null}
        </div>
        <div className="mt-3 text-sm leading-6 text-slate-700">{children}</div>
      </div>
    </div>
  )
}


