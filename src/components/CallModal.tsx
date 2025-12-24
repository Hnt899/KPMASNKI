import { X } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Button } from './ui/Button'

export function CallModal({
  open,
  onClose,
  onSubmit,
}: {
  open: boolean
  onClose: () => void
  onSubmit: (payload: { name: string; phone: string; comment: string }) => void
}) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [comment, setComment] = useState('')
  const firstFieldRef = useRef<HTMLInputElement | null>(null)

  const canSubmit = useMemo(() => name.trim().length > 1 && phone.trim().length > 4, [name, phone])

  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.setTimeout(() => firstFieldRef.current?.focus(), 0)

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[70] print:hidden" role="dialog" aria-modal="true" aria-label="Назначить созвон">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div className="relative mx-auto flex h-full max-w-lg items-center px-4">
        <div className="w-full rounded-2xl bg-white p-5 shadow-xl ring-1 ring-slate-200">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-base font-semibold text-slate-900">Назначить созвон</div>
              <div className="mt-1 text-sm leading-6 text-slate-600">
                Оставьте контакты — мы свяжемся и финализируем модель денег (холд/сплит) и детали MVP.
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-2 text-slate-500 hover:bg-slate-50 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-label="Закрыть"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <form
            className="mt-5 grid gap-3"
            onSubmit={(e) => {
              e.preventDefault()
              if (!canSubmit) return
              const message = encodeURIComponent(
                `Заявка на созвон\n\nИмя: ${name.trim()}\nТелефон: ${phone.trim()}${comment.trim() ? `\nКомментарий: ${comment.trim()}` : ''}`
              )
              window.open(`https://t.me/CDI_Agency?text=${message}`, '_blank')
              onSubmit({ name: name.trim(), phone: phone.trim(), comment: comment.trim() })
              setName('')
              setPhone('')
              setComment('')
              onClose()
            }}
          >
            <label className="grid gap-1">
              <span className="text-xs font-medium text-slate-700">Имя</span>
              <input
                ref={firstFieldRef}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Иван"
                autoComplete="name"
              />
            </label>

            <label className="grid gap-1">
              <span className="text-xs font-medium text-slate-700">Телефон</span>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="+7 (900) 000-00-00"
                inputMode="tel"
                autoComplete="tel"
              />
            </label>

            <label className="grid gap-1">
              <span className="text-xs font-medium text-slate-700">Комментарий</span>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="min-h-24 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Например: интересует модель холда/сплита и интеграция с Диадок"
              />
            </label>

            <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:justify-end">
              <Button type="button" variant="secondary" onClick={onClose}>
                Отмена
              </Button>
              <Button type="submit" disabled={!canSubmit}>
                Отправить заявку
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


