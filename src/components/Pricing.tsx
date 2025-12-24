import { Badge } from './ui/Badge'
import { CreditCard, Calendar, CheckCircle2 } from 'lucide-react'

export function Pricing({
  total,
  scheme,
}: {
  total: string
  scheme: readonly { title: string; desc: string }[]
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
      <div className="flex flex-col rounded-2xl bg-gradient-to-br from-white to-emerald-50/30 p-6 shadow-sm ring-1 ring-slate-200 lg:col-span-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-emerald-600" aria-hidden="true" />
            <div className="text-base font-semibold text-slate-900">Стоимость разработки</div>
          </div>
          <Badge>фикс</Badge>
        </div>
        <div className="mt-3 text-4xl font-bold tracking-tight text-slate-900">{total}</div>
        <div className="mt-4 flex-1">
          <p className="mb-4 text-sm font-medium text-slate-700">В стоимость входит:</p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-600" aria-hidden="true" />
              <span>Web-приложение для логистов, бухгалтеров и администраторов</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-600" aria-hidden="true" />
              <span>Мобильные приложения iOS и Android для водителей и перевозчиков</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-600" aria-hidden="true" />
              <span>Админ-панель для управления платформой</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-600" aria-hidden="true" />
              <span>Интеграция с Контур.Диадок для ЭДО</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-600" aria-hidden="true" />
              <span>Интеграция с платежным провайдером (холд/сплит)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-600" aria-hidden="true" />
              <span>GPS-трекинг и система статусов</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-600" aria-hidden="true" />
              <span>Система верификации и модерации</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-600" aria-hidden="true" />
              <span>Тестирование и сдача проекта</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="lg:col-span-7">
        <div className="flex h-full flex-col rounded-2xl bg-gradient-to-br from-white to-blue-50/30 p-6 shadow-sm ring-1 ring-slate-200">
          <div className="mb-4 flex items-center gap-2">
            <Calendar className="h-5 w-5 text-blue-600" aria-hidden="true" />
            <div className="text-base font-semibold text-slate-900">Рекомендуемая схема оплат</div>
          </div>
          <div className="mt-4 grid flex-1 gap-3">
            {scheme.map((s, idx) => (
              <div
                key={s.title}
                className="group rounded-xl bg-gradient-to-r from-slate-50 to-white p-4 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md hover:ring-indigo-200"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700 ring-1 ring-indigo-200">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-slate-900">{s.title}</div>
                    <div className="mt-1 text-sm leading-6 text-slate-600">{s.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


