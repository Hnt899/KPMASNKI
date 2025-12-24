import { KP } from '../content/kp'

function PrintSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-6">
      <h2 className="text-base font-semibold text-slate-900">{title}</h2>
      <div className="mt-2 text-sm leading-6 text-slate-800">{children}</div>
    </section>
  )
}

export function PrintLayout() {
  return (
    <div className="hidden print:block">
      <div className="mx-auto max-w-3xl px-6 py-10">
        <div className="text-xs text-slate-500">{KP.title}</div>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">{KP.hero.headline}</h1>
        <p className="mt-2 text-sm text-slate-700">{KP.hero.subheadline}</p>
        <p className="mt-2 text-sm text-slate-700">{KP.hero.platforms}</p>

        <div className="mt-4 grid gap-2 text-sm text-slate-800">
          <div>
            <span className="font-semibold">Бюджет:</span> {KP.pricing.total}
          </div>
          <div>
            <span className="font-semibold">Сроки:</span> {KP.timeline.weeks}
          </div>
          <div>
            <span className="font-semibold">География:</span> {KP.footer.geo.replace('География: ', '')}
          </div>
        </div>

        <PrintSection title="Обязательное на старте">
          <ul className="list-disc pl-5">
            {KP.hero.mustHave.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </PrintSection>

        <PrintSection title="Суть продукта">
          <p>{KP.product.lead}</p>
          <p className="mt-2 font-semibold">{KP.product.key}</p>
        </PrintSection>

        <PrintSection title="Роли и доступ">
          <ul className="list-disc pl-5">
            {KP.roles.items.map((r) => (
              <li key={r.title}>
                {r.title}
                {r.subtitle ? ` (${r.subtitle})` : ''}: {r.desc}
              </li>
            ))}
          </ul>
          <p className="mt-2">{KP.roles.note}</p>
        </PrintSection>

        <PrintSection title="Web-кабинет (обязателен)">
          <p>{KP.web.why}</p>
          <p className="mt-2">{KP.web.logic}</p>
        </PrintSection>

        <PrintSection title="Верификация и модерация (антифрод-ядро)">
          <div>
            <div className="font-semibold">Заказчики</div>
            <ul className="list-disc pl-5">
              {KP.antifraud.customer.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
          <div className="mt-3">
            <div className="font-semibold">Перевозчики/водители</div>
            <ul className="list-disc pl-5">
              {KP.antifraud.carrierDriver.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </PrintSection>

        <PrintSection title="Заявки и распределение">
          <ul className="list-disc pl-5">
            <li>{KP.distribution.price}</li>
            <li>{KP.distribution.matching}</li>
            <li>{KP.distribution.discipline}</li>
          </ul>
        </PrintSection>

        <PrintSection title="GPS и статусы рейса">
          <p>{KP.gps.tracking}</p>
          <p className="mt-2">{KP.gps.history}</p>
          <div className="mt-2 font-semibold">Статусы MVP</div>
          <p className="mt-1">{KP.gps.statuses.join(' → ')}</p>
        </PrintSection>

        <PrintSection title="ЭДО и ЭЦП">
          <ul className="list-disc pl-5">
            <li>{KP.edo.edo}</li>
            <li>{KP.edo.operator}</li>
            <li>{KP.edo.sign}</li>
            <li>{KP.edo.docs}</li>
          </ul>
        </PrintSection>

        <PrintSection title="Платежи и комиссия">
          <ul className="list-disc pl-5">
            <li>{KP.payments.commission}</li>
            <li>{KP.payments.model}</li>
          </ul>
        </PrintSection>

        <PrintSection title="Админ-панель">
          <ul className="list-disc pl-5">
            {KP.admin.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </PrintSection>

        <PrintSection title="Этапы и сроки">
          <p>{KP.timeline.weeks}</p>
          <p className="mt-2">{KP.timeline.goal}</p>
        </PrintSection>

        <PrintSection title="Стоимость и оплата">
          <div className="font-semibold">Стоимость разработки: {KP.pricing.total}</div>
          <div className="mt-2 font-semibold">Схема оплат</div>
          <ul className="list-disc pl-5">
            {KP.pricing.scheme.map((s) => (
              <li key={s.title}>
                {s.title} — {s.desc}
              </li>
            ))}
          </ul>
        </PrintSection>
      </div>
    </div>
  )
}


