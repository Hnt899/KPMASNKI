import type { ReactNode } from 'react'
import { Container } from './Container'

export function Section({
  id,
  title,
  lead,
  children,
}: {
  id: string
  title: string
  lead?: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24 py-12 sm:py-16">
      <Container>
        <header className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
          {lead ? <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{lead}</p> : null}
        </header>
        <div className="mt-8 sm:mt-10">{children}</div>
      </Container>
    </section>
  )
}


