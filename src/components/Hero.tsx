import { ArrowDownRight, FileDown, Phone } from 'lucide-react'
import { Container } from './Container'
import { Badge } from './ui/Badge'
import { Button } from './ui/Button'

export function Hero({
  title,
  subtitle,
  platforms,
  badges,
  mustHave,
  onPdf,
  onCall,
}: {
  title: string
  subtitle: string
  platforms: string
  badges: string[]
  mustHave: string[]
  onPdf: () => void
  onCall: () => void
}) {
  return (
    <section id="top" className="py-10 sm:py-14 print:hidden">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-100">
              Коммерческое предложение <ArrowDownRight className="h-3.5 w-3.5" aria-hidden="true" />
            </div>
            <h1 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {title}
            </h1>
            <p className="mt-3 text-pretty text-sm leading-6 text-slate-600 sm:text-lg">{subtitle}</p>

            <p className="mt-4 text-sm leading-6 text-slate-600">{platforms}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {badges.map((b) => (
                <Badge key={b}>{b}</Badge>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <Button onClick={onPdf}>
                <FileDown className="h-4 w-4" aria-hidden="true" />
                Получить КП в PDF
              </Button>
              <Button variant="secondary" onClick={onCall}>
                <Phone className="h-4 w-4" aria-hidden="true" />
                Назначить созвон
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-gradient-to-br from-white to-indigo-50/30 p-6 shadow-sm ring-1 ring-slate-200">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100">
                  <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-base font-semibold text-slate-900">Обязательное на старте</div>
              </div>
              <ul className="space-y-3 text-sm text-slate-700">
                {mustHave.map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-indigo-100">
                      <svg className="h-3 w-3 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="leading-6">{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}


