# FitTrack — лабораторна робота № 2

Публічний репозиторій Шрамка Вадима, група КН-41. Дисципліна «Основи DevOps».

Навчальний застосунок у корені (`index.js`) потрібен конвеєру з методички. Код теми проєкту — у `backend/` і `frontend/`: каркас реєстрації, ідемпотентна синхронізація показників здоров’я і розрахунок тижневої цілі.

## Локально

```bash
npm install
npm test
npm run lint
```

## Конвеєри

- `.github/workflows/production-pipeline.yml` — test, build (ghcr.io), staging, production
- `.github/workflows/matrix.yml` — 3 ОС × 3 версії Node.js, без Windows + Node.js 21
- `.github/workflows/deploy-template.yml` — reusable workflow
- `.github/workflows/call-deploy.yml` — ручний виклик шаблону розгортання
- `.github/workflows/conditional.yml` — окремі завдання для `backend/**` і `frontend/**`
