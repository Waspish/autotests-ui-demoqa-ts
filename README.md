### Базовый запуск

```bash
npm ci
npm test
```

### HTML Report

Запуск HTML-репорта после выполнения тестов:

```bash
npm run report
```

### Параллельный запуск

Для параллельного запуска задано 3 worker:

```bash
npm run test:parallel
```

### Нюансы
Для работы на пк должен стоять chrome, если нету, то можно убрать channel: 'chrome' из конфига и запустить:
```bash
npx playwright install chromium
```

> `.env` добавлен, чтобы не создавать вручную, так как это тестовый проект.
