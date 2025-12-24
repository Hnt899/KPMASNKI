# Сайт-КП (одностраничный лендинг)

Одностраничный сайт-коммерческое предложение для B2B платформы грузоперевозок: заказчик ↔ перевозчик ↔ водитель.

## Стек

- React + TypeScript
- Vite
- Tailwind CSS

## Запуск

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
npm run preview
```

## Где править контент

Весь текст и структура КП вынесены в `src/content/kp.ts`.

## PDF

Кнопка **«Получить КП в PDF»** вызывает `window.print()` и использует отдельный print-layout (`src/components/PrintLayout.tsx`).
