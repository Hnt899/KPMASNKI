import { Container } from './Container'

export function Footer({ geo, contactNote }: { geo: string; contactNote: string }) {
  return (
    <footer className="border-t border-slate-200 py-10 print:hidden">
      <Container>
        <div className="flex flex-col gap-2 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <div>{geo}</div>
          <div className="text-slate-500">{contactNote}</div>
        </div>
      </Container>
    </footer>
  )
}


