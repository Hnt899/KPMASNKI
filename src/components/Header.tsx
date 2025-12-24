import { Menu, X } from 'lucide-react'
import { useEffect, useId, useMemo, useState } from 'react'
import type { KpNavItem } from '../content/kp'
import { Container } from './Container'
import { Button } from './ui/Button'

export function Header({
  nav,
  onPdf,
  onCall,
}: {
  nav: KpNavItem[]
  onPdf: () => void
  onCall: () => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const menuId = useId()

  const links = useMemo(() => nav, [nav])

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const onClick = () => setIsOpen(false)
    window.addEventListener('resize', onClick)
    return () => window.removeEventListener('resize', onClick)
  }, [isOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 print:hidden">
      <Container>
        <div className="flex h-16 items-center justify-between gap-3">
          <a href="#top" className="min-w-0">
            <div className="truncate text-sm font-semibold text-slate-900">КП · B2B грузоперевозки</div>
            <div className="truncate text-xs text-slate-500">marketplace · ЭДО · платежи · контроль сделки</div>
          </a>

          <nav className="hidden items-center gap-5 lg:flex" aria-label="Навигация по КП">
            {links.map((i) => (
              <a
                key={i.id}
                href={`#${i.id}`}
                className="text-sm text-slate-600 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-md"
              >
                {i.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 sm:flex">
              <Button variant="secondary" onClick={onPdf}>
                Получить КП в PDF
              </Button>
              <Button onClick={onCall}>Назначить созвон</Button>
            </div>

            <Button
              variant="secondary"
              className="sm:hidden"
              onClick={() => setIsOpen((v) => !v)}
              aria-expanded={isOpen}
              aria-controls={menuId}
              aria-label="Открыть меню"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </Container>

      <div id={menuId} className={`${isOpen ? 'block' : 'hidden'} border-t border-slate-200 bg-white lg:hidden`}>
        <Container>
          <div className="flex flex-col gap-2 py-3">
            <div className="grid grid-cols-2 gap-2">
              <Button variant="secondary" onClick={onPdf}>
                КП в PDF
              </Button>
              <Button onClick={onCall}>Созвон</Button>
            </div>

            <div className="mt-1 grid grid-cols-2 gap-x-3 gap-y-2" aria-label="Навигация по КП (моб.)">
              {links.map((i) => (
                <a
                  key={i.id}
                  href={`#${i.id}`}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-2 py-2 text-sm text-slate-700 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  {i.label}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </header>
  )
}


