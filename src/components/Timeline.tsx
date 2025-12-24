export type TimelineItem = { title: string; desc?: string }

export function Timeline({ items }: { items: readonly TimelineItem[] }) {
  return (
    <ol className="relative border-s border-slate-200">
      {items.map((it, idx) => (
        <li key={`${it.title}-${idx}`} className="ms-4 py-2">
          <div className="absolute -start-1.5 mt-2 h-3 w-3 rounded-full bg-indigo-600 ring-4 ring-indigo-50" />
          <div className="text-sm font-semibold text-slate-900">{it.title}</div>
          {it.desc ? <div className="mt-1 text-sm leading-6 text-slate-600">{it.desc}</div> : null}
        </li>
      ))}
    </ol>
  )
}

export function Stepper({ steps }: { steps: string[] }) {
  return (
    <ol className="space-y-3">
      {steps.map((s, idx) => (
        <li
          key={`${s}-${idx}`}
          className="group relative flex items-start gap-4 rounded-xl bg-gradient-to-r from-white to-slate-50 p-4 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md hover:ring-indigo-200"
        >
          <div className="relative flex h-8 w-8 flex-none items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-indigo-100 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 text-xs font-bold text-white shadow-sm ring-2 ring-indigo-50">
              {idx + 1}
            </div>
            {idx < steps.length - 1 && (
              <div className="absolute left-1/2 top-8 h-6 w-0.5 -translate-x-1/2 bg-gradient-to-b from-indigo-200 to-transparent" />
            )}
          </div>
          <div className="flex-1 pt-1 text-sm font-medium leading-6 text-slate-800">{s}</div>
        </li>
      ))}
    </ol>
  )
}


