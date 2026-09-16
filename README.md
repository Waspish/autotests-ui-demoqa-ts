Базовый запуск (если со вторым шагом проблемы, смотреть ниже)


```bash
npm ci
npx playwright install chromium 
cp .env.example .env
npm test
```

HTML report (запуск репорта после теста):
```bash
npm run report
```

Для параллельного запуска (задано всего 3 воркера):
```bash
npm run test:parallel
```

Если Playwright не может скачать браузер


```powershell
curl.exe -4 -L -o "$env:TEMP\chrome-win64.zip" "https://storage.googleapis.com/chrome-for-testing-public/153.0.8010.12/win64/chrome-win64.zip"

$target = "$env:LOCALAPPDATA\ms-playwright\chromium-1243"
New-Item -ItemType Directory -Force -Path $target | Out-Null
Expand-Archive "$env:TEMP\chrome-win64.zip" -DestinationPath $target -Force
```

Для headless также нужен:

```powershell
curl.exe -4 -L -o "$env:TEMP\chrome-headless-shell-win64.zip" "https://storage.googleapis.com/chrome-for-testing-public/153.0.8010.12/win64/chrome-headless-shell-win64.zip"

$target = "$env:LOCALAPPDATA\ms-playwright\chromium_headless_shell-1243"
New-Item -ItemType Directory -Force -Path $target | Out-Null
Expand-Archive "$env:TEMP\chrome-headless-shell-win64.zip" -DestinationPath $target -Force
```

.env добавил так как это тестовый проект, чтобы лишний раз вручную не создавать