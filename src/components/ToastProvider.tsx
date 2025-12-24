import { X } from 'lucide-react'
import { useCallback, useMemo, useState } from 'react'
import { ToastContext, type ToastApi } from './toast'

type ToastItem = { id: string; message: string }

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<ToastItem[]>([])

  const remove = useCallback((id: string) => {
    setItems((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const api: ToastApi = useMemo(
    () => ({
      push(message: string) {
        const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`
        setItems((prev) => [...prev, { id, message }])
        window.setTimeout(() => remove(id), 3500)
      },
    }),
    [remove],
  )

  return (
    <ToastContext.Provider value={api}>
      {children}
      <div
        className="fixed bottom-4 right-4 z-[60] flex w-[calc(100%-2rem)] max-w-sm flex-col gap-2 print:hidden"
        aria-live="polite"
        aria-relevant="additions"
      >
        {items.map((t) => (
          <div key={t.id} className="rounded-xl bg-slate-900 px-4 py-3 text-sm text-white shadow-lg">
            <div className="flex items-start justify-between gap-3">
              <div className="leading-6">{t.message}</div>
              <button
                type="button"
                onClick={() => remove(t.id)}
                className="rounded-md p-1 text-white/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                aria-label="Закрыть уведомление"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}


