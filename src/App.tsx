import {
  FileDown,
  Phone,
  User,
  Building2,
  Truck,
  Shield,
  Calculator,
  CheckCircle2,
  Globe,
  FileText,
  MapPin,
  Navigation,
  FileCheck,
  CreditCard,
  Settings,
  Calendar,
  AlertCircle,
} from 'lucide-react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { PrintLayout } from './components/PrintLayout'
import { Pricing } from './components/Pricing'
import { Section } from './components/Section'
import { Card, FeatureGrid } from './components/FeatureGrid'
import { Stepper, Timeline } from './components/Timeline'
import { Button } from './components/ui/Button'
import { Badge } from './components/ui/Badge'
import { useToast } from './components/toast'
import { KP, KP_NAV } from './content/kp'

function App() {
  const toast = useToast()

  const paymentBadge = KP.payments.needsSyncLabel

  function handlePdf() {
    // Prefer the authoritative Google Doc PDF export
    window.open(KP.links.gdocPdf, '_blank', 'noopener,noreferrer')
  }

  function handleCall() {
    const phone = '+7 985 365 6294'
    const message = encodeURIComponent(`Заявка на созвон.\nТелефон: ${phone}`)
    window.open(`https://t.me/CDI_Agency?text=${message}`, '_blank', 'noopener,noreferrer')
    toast.push('Открываю Telegram…')
  }

  return (
    <div className="min-h-dvh">
      <a
        href="#product"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] rounded-lg bg-white px-3 py-2 text-sm font-medium text-slate-900 ring-1 ring-slate-200 shadow"
      >
        Перейти к содержанию
      </a>

      <Header nav={KP_NAV} onPdf={handlePdf} onCall={handleCall} />
      <Hero
        title={KP.hero.headline}
        subtitle={KP.hero.subheadline}
        platforms={KP.hero.platforms}
        badges={KP.hero.badges as unknown as string[]}
        mustHave={KP.hero.mustHave as unknown as string[]}
        onPdf={handlePdf}
        onCall={handleCall}
      />

      <main>
        <Section id="product" title="Суть продукта" lead={KP.product.lead}>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm ring-1 ring-slate-200">
                <div className="mb-4 flex items-center gap-2">
                  <Navigation className="h-5 w-5 text-indigo-600" aria-hidden="true" />
                  <div className="text-base font-semibold text-slate-900">Схема сделки</div>
                </div>
                <div className="mt-4">
                  <Stepper steps={KP.product.flow as unknown as string[]} />
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-700 p-6 text-white shadow-lg ring-1 ring-indigo-500/20">
                <div className="mb-3 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-indigo-200" aria-hidden="true" />
                  <div className="text-base font-semibold text-white">Ключевое отличие</div>
                </div>
                <p className="mt-2 text-sm leading-6 text-white/95">{KP.product.key}</p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <Button variant="secondary" onClick={handlePdf} className="bg-white/95 hover:bg-white text-indigo-700 shadow-md">
                    <FileDown className="h-4 w-4" aria-hidden="true" />
                    Получить КП в PDF
                  </Button>
                  <Button onClick={handleCall} className="bg-indigo-500 text-white hover:bg-indigo-400 shadow-md ring-1 ring-white/20">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Назначить созвон
                  </Button>
                </div>
                <div className="mt-6 overflow-hidden rounded-xl">
                  <img src="/грузы.jpg" alt="Грузоперевозки" className="h-auto w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="roles" title="Роли и доступ" lead="Роли платформы и зона ответственности на первом релизе.">
          <FeatureGrid>
            <Card key={KP.roles.items[0].title} title={KP.roles.items[0].title} subtitle={KP.roles.items[0].subtitle} icon={User} gradient="indigo">
              {KP.roles.items[0].desc}
            </Card>
            <Card key={KP.roles.items[1].title} title={KP.roles.items[1].title} subtitle={KP.roles.items[1].subtitle} icon={Building2} gradient="blue">
              {KP.roles.items[1].desc}
            </Card>
            <Card key={KP.roles.items[2].title} title={KP.roles.items[2].title} subtitle={KP.roles.items[2].subtitle} icon={Truck} gradient="purple">
              {KP.roles.items[2].desc}
            </Card>
            <Card key={KP.roles.items[3].title} title={KP.roles.items[3].title} subtitle={KP.roles.items[3].subtitle} icon={Shield} gradient="indigo">
              {KP.roles.items[3].desc}
            </Card>
            <Card key={KP.roles.items[4].title} title={KP.roles.items[4].title} subtitle={KP.roles.items[4].subtitle} icon={Calculator} gradient="emerald">
              {KP.roles.items[4].desc}
            </Card>
            <Card title="Системный аналитик" subtitle="" icon={Settings} gradient="purple">
              Анализ метрик платформы, оптимизация процессов, сбор обратной связи от пользователей и формирование требований к доработкам.
            </Card>
          </FeatureGrid>
          <div className="mt-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-sm leading-6 text-white shadow-lg ring-1 ring-slate-700">
            <div className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-5 w-5 flex-none text-amber-400" aria-hidden="true" />
      <div>
                <div className="font-semibold text-white">Важно</div>
                <div className="mt-2 text-white/90">{KP.roles.note}</div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="mvp" title="MVP-ядро и web-кабинет" lead="То, что обязательно должно быть в первом релизе.">
          <div className="grid gap-5 lg:grid-cols-12 lg:items-stretch">
            <div className="lg:col-span-5">
              <div className="flex h-full flex-col rounded-2xl bg-gradient-to-br from-white to-indigo-50/30 p-6 shadow-sm ring-1 ring-slate-200">
                <div className="mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-indigo-600" aria-hidden="true" />
                  <div className="text-base font-semibold text-slate-900">Обязательное на старте</div>
                </div>
                <ul className="mb-4 flex-1 space-y-3 text-sm text-slate-700">
                  {(KP.hero.mustHave as unknown as string[]).map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-indigo-100">
                        <CheckCircle2 className="h-3 w-3 text-indigo-600" aria-hidden="true" />
                      </div>
                      <span className="leading-6">{i}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 rounded-xl bg-indigo-50/50 p-4 text-xs leading-5 text-slate-600 ring-1 ring-inset ring-indigo-100">
                  <div className="font-medium text-slate-700">Важно:</div>
                  <div className="mt-1">
                    Все перечисленные функции должны быть реализованы в первом релизе. Это базовый набор, без которого платформа не сможет полноценно функционировать. Регистрация и верификация обеспечивают безопасность, GPS и статусы — прозрачность сделок, ЭДО — юридическую чистоту, админ-панель — контроль системы.
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 lg:col-span-7">
              <div className="rounded-2xl bg-gradient-to-br from-white to-blue-50/30 p-6 shadow-sm ring-1 ring-slate-200">
                <div className="mb-3 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-600" aria-hidden="true" />
                  <div className="text-base font-semibold text-slate-900">Web-кабинет (обязателен)</div>
                </div>
                <p className="text-sm leading-6 text-slate-700">{KP.web.why}</p>
                <p className="mt-3 text-sm leading-6 text-slate-700">{KP.web.logic}</p>
              </div>

              <div className="flex-1 rounded-2xl bg-gradient-to-br from-white to-purple-50/30 p-6 shadow-sm ring-1 ring-slate-200">
                <div className="mb-3 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-purple-600" aria-hidden="true" />
                  <div className="text-base font-semibold text-slate-900">Заявки и распределение</div>
                </div>
                <ul className="space-y-3 text-sm leading-6 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-purple-500" aria-hidden="true" />
                    <span>{KP.distribution.price}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-purple-500" aria-hidden="true" />
                    <span>{KP.distribution.matching}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-purple-500" aria-hidden="true" />
                    <span>{KP.distribution.discipline}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="antifraud"
          title="Верификация и модерация (антифрод-ядро)"
          lead="Проверки и модерация — основа дисциплины и доверия в сделках."
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl bg-gradient-to-br from-white to-emerald-50/30 p-6 shadow-sm ring-1 ring-slate-200">
              <div className="mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                <div className="text-base font-semibold text-slate-900">Заказчики</div>
              </div>
              <ul className="space-y-3 text-sm text-slate-700">
                {KP.antifraud.customer.map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-100">
                      <CheckCircle2 className="h-3 w-3 text-emerald-600" aria-hidden="true" />
                    </div>
                    <span className="leading-6">{i}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-white to-amber-50/30 p-6 shadow-sm ring-1 ring-slate-200">
              <div className="mb-4 flex items-center gap-2">
                <Truck className="h-5 w-5 text-amber-600" aria-hidden="true" />
                <div className="text-base font-semibold text-slate-900">Перевозчики / водители</div>
              </div>
              <ul className="space-y-3 text-sm text-slate-700">
                {KP.antifraud.carrierDriver.map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-amber-100">
                      <CheckCircle2 className="h-3 w-3 text-amber-600" aria-hidden="true" />
                    </div>
                    <span className="leading-6">{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="gps" title="GPS и статусы рейса" lead="Прозрачность исполнения: статусы + постоянное отслеживание в активном рейсе.">
          <div className="grid gap-5 lg:grid-cols-12 lg:items-stretch">
            <div className="flex flex-col rounded-2xl bg-gradient-to-br from-white to-cyan-50/30 p-6 shadow-sm ring-1 ring-slate-200 lg:col-span-5">
              <div className="mb-4 flex items-center gap-2">
                <Navigation className="h-5 w-5 text-cyan-600" aria-hidden="true" />
                <div className="text-base font-semibold text-slate-900">GPS</div>
              </div>
              <div className="flex-1">
                <p className="text-sm leading-6 text-slate-700">{KP.gps.tracking}</p>
                <p className="mt-3 text-sm leading-6 text-slate-700">{KP.gps.history}</p>
                <div className="mt-4 rounded-xl bg-cyan-50/50 p-4 text-xs leading-5 text-slate-600 ring-1 ring-inset ring-cyan-100">
                  <div className="font-medium text-slate-700">Технические детали:</div>
                  <div className="mt-1">
                    GPS-трекинг работает в фоновом режиме даже при закрытом приложении. Данные передаются в реальном времени на сервер платформы. Заказчик и перевозчик видят актуальное местоположение водителя во время активного рейса. Это обеспечивает прозрачность и контроль исполнения сделки.
                  </div>
                </div>
                <div className="mt-4">
                  <div className="mb-3 text-sm font-semibold text-slate-900">Реализация с технической стороны</div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b border-cyan-200 bg-cyan-100/50">
                          <th className="px-3 py-2 text-left font-semibold text-slate-700">Компонент</th>
                          <th className="px-3 py-2 text-left font-semibold text-slate-700">Технология</th>
                          <th className="px-3 py-2 text-left font-semibold text-slate-700">Частота обновления</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-cyan-100">
                        <tr>
                          <td className="px-3 py-2 text-slate-700">Мобильное приложение</td>
                          <td className="px-3 py-2 text-slate-600">React Native / Flutter</td>
                          <td className="px-3 py-2 text-slate-600">Каждые 10-30 сек</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 text-slate-700">Фоновый сервис</td>
                          <td className="px-3 py-2 text-slate-600">Background Location API</td>
                          <td className="px-3 py-2 text-slate-600">Каждые 60 сек</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 text-slate-700">Сервер обработки</td>
                          <td className="px-3 py-2 text-slate-600">Node.js / Python</td>
                          <td className="px-3 py-2 text-slate-600">Real-time WebSocket</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 text-slate-700">База данных</td>
                          <td className="px-3 py-2 text-slate-600">PostgreSQL / MongoDB</td>
                          <td className="px-3 py-2 text-slate-600">Постоянное хранение</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 text-slate-700">Карты и визуализация</td>
                          <td className="px-3 py-2 text-slate-600">Mapbox / Google Maps API</td>
                          <td className="px-3 py-2 text-slate-600">Real-time обновление</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="flex h-full flex-col rounded-2xl bg-gradient-to-br from-white to-indigo-50/30 p-6 shadow-sm ring-1 ring-slate-200">
                <div className="mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-indigo-600" aria-hidden="true" />
                  <div className="text-base font-semibold text-slate-900">Статусы MVP (ядро)</div>
                </div>
                <div className="mt-4 flex-1">
                  <Stepper steps={KP.gps.statuses as unknown as string[]} />
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="edo" title="ЭДО и ЭЦП" lead="ЭДО включено сразу: документы и подпись внутри системы.">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Card title="ЭДО" icon={FileCheck} gradient="indigo">
              {KP.edo.edo}
            </Card>
            <Card title="Оператор" icon={Building2} gradient="blue">
              {KP.edo.operator}
            </Card>
            <Card title="Подпись" icon={Shield} gradient="purple">
              {KP.edo.sign}
            </Card>
            <Card title="Документы" icon={FileText} gradient="emerald">
              {KP.edo.docs}
            </Card>
            <Card title="Интеграция" icon={Settings} gradient="indigo">
              Интеграция с Контур.Диадок обеспечивает обмен документами с контрагентами, автоматическую отправку и получение ЭТТН, актов и УПД.
            </Card>
            <Card title="Автоматизация" icon={CheckCircle2} gradient="blue">
              Все документы формируются автоматически на основе данных рейса. Подпись ЭЦП происходит в один клик внутри системы без необходимости внешних сервисов.
            </Card>
          </div>
        </Section>

        <Section id="payments" title="Платежи и комиссия" lead="Деньги и комиссия — часть ядра. Модель (холд/сплит) финализируем на встрече.">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl bg-gradient-to-br from-white to-emerald-50/30 p-6 shadow-sm ring-1 ring-slate-200">
              <div className="mb-3 flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                <div className="text-base font-semibold text-slate-900">Комиссия</div>
              </div>
              <p className="text-sm leading-6 text-slate-700">{KP.payments.commission}</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-white to-amber-50/30 p-6 shadow-sm ring-1 ring-slate-200">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-amber-600" aria-hidden="true" />
                  <div className="text-base font-semibold text-slate-900">Модель денег</div>
                </div>
                <Badge>{paymentBadge}</Badge>
              </div>
              <p className="text-sm leading-6 text-slate-700">{KP.payments.model}</p>
            </div>
          </div>
        </Section>

        <Section id="admin" title="Админ-панель (обязательна)" lead="Полный контроль: пользователи, заявки, правила, блокировки и спорные ситуации.">
          <div className="rounded-2xl bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm ring-1 ring-slate-200">
            <div className="mb-4 flex items-center gap-2">
              <Settings className="h-5 w-5 text-slate-600" aria-hidden="true" />
              <div className="text-base font-semibold text-slate-900">Функционал админ-панели</div>
            </div>
            <ul className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              {KP.admin.items.map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-indigo-100">
                    <CheckCircle2 className="h-3 w-3 text-indigo-600" aria-hidden="true" />
                  </div>
                  <span className="leading-6">{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="timeline" title="Этапы и сроки" lead={KP.timeline.weeks}>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
            <div className="rounded-2xl bg-gradient-to-br from-white to-blue-50/30 p-6 shadow-sm ring-1 ring-slate-200 lg:col-span-5">
              <div className="mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-600" aria-hidden="true" />
                <div className="text-base font-semibold text-slate-900">Milestones</div>
              </div>
              <div className="mt-4">
                <Timeline items={KP.timeline.milestones} />
              </div>
            </div>
            <div className="flex flex-col rounded-2xl bg-gradient-to-br from-white to-indigo-50/30 p-6 shadow-sm ring-1 ring-slate-200 lg:col-span-7">
              <div className="mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-indigo-600" aria-hidden="true" />
                <div className="text-base font-semibold text-slate-900">Цель и контекст</div>
              </div>
              <div className="flex-1">
                <p className="text-sm leading-6 text-slate-700">{KP.timeline.goal}</p>
                <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                  <p>
                    Платформа должна быть готова к запуску пилотных сделок к маю 2026 года. Это даст время на откалибровку процессов, обучение пользователей и сбор обратной связи до момента, когда переход на электронные ТТН станет обязательным.
                  </p>
                  <p>
                    Критически важно, чтобы к сентябрю 2026 года система полностью поддерживала работу с электронными транспортными накладными, так как с этого момента бумажные ТТН перестанут приниматься контролирующими органами.
                  </p>
                </div>
                <div className="mt-4 rounded-xl bg-gradient-to-r from-indigo-50 to-blue-50 p-4 text-sm leading-6 text-indigo-900 ring-1 ring-inset ring-indigo-100">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="mt-0.5 h-4 w-4 flex-none text-indigo-600" aria-hidden="true" />
                    <span>Переход на электронные ТТН с сентября — поэтому MVP важно запустить и откалибровать к май–июнь 2026.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="pricing" title="Стоимость и оплата" lead="Фиксированная стоимость разработки и рекомендуемая схема оплат.">
          <Pricing total={KP.pricing.total} scheme={KP.pricing.scheme} />
        </Section>

        <section className="py-12 sm:py-16 print:hidden">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-xl ring-1 ring-slate-700 sm:p-12">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-8">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-white/20">
                    <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                    Следующий шаг
      </div>
                  <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Финализировать модель денег (холд/сплит) и зафиксировать MVP-объём
                  </h2>
                  <p className="mt-4 text-base leading-7 text-white/90">
                    Нажмите “Назначить созвон” — и мы уточним юридическую схему/провайдера, интеграции (в т.ч. Диадок) и
                    план на 8–10 недель.
        </p>
      </div>
                <div className="lg:col-span-4">
                  <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                    <Button variant="secondary" onClick={handlePdf} className="bg-white/95 hover:bg-white text-slate-900 shadow-lg">
                      <FileDown className="h-4 w-4" aria-hidden="true" />
                      Получить КП в PDF
                    </Button>
                    <Button onClick={handleCall} className="bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg ring-1 ring-indigo-500/50">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      Назначить созвон
                    </Button>
                  </div>
                  <div className="mt-4 text-xs leading-5 text-white/70">{KP.footer.contactNote}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer geo={KP.footer.geo} contactNote={KP.footer.contactNote} />

      <PrintLayout />
    </div>
  )
}

export default App
