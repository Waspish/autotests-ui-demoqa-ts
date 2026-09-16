### Базовый запуск

Если со вторым шагом возникают проблемы — см. раздел ниже.

```bash
npm ci
```

```bash
npx playwright install chromium
```

```bash
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

---

## Если Playwright не может скачать браузер

### Windows — Chromium

```powershell
curl.exe -4 -L -o "$env:TEMP\chrome-win64.zip" "https://storage.googleapis.com/chrome-for-testing-public/153.0.8010.12/win64/chrome-win64.zip"

$target = "$env:LOCALAPPDATA\ms-playwright\chromium-1243"
New-Item -ItemType Directory -Force -Path $target | Out-Null
Expand-Archive "$env:TEMP\chrome-win64.zip" -DestinationPath $target -Force
```

### Windows — Headless Chromium

Если в `.env` указано `HEADLESS=true`, также необходимо установить headless shell:

```powershell
curl.exe -4 -L -o "$env:TEMP\chrome-headless-shell-win64.zip" "https://storage.googleapis.com/chrome-for-testing-public/153.0.8010.12/win64/chrome-headless-shell-win64.zip"

$target = "$env:LOCALAPPDATA\ms-playwright\chromium_headless_shell-1243"
New-Item -ItemType Directory -Force -Path $target | Out-Null
Expand-Archive "$env:TEMP\chrome-headless-shell-win64.zip" -DestinationPath $target -Force
```

### macOS — Chromium

**Apple Silicon (M1/M2/M3/M4):**

```bash
curl -4 -L -o "/tmp/chrome-mac-arm64.zip" "https://storage.googleapis.com/chrome-for-testing-public/153.0.8010.12/mac-arm64/chrome-mac-arm64.zip"

target="$HOME/Library/Caches/ms-playwright/chromium-1243"
mkdir -p "$target"
unzip -o "/tmp/chrome-mac-arm64.zip" -d "$target"
```

**Intel Mac:**

```bash
curl -4 -L -o "/tmp/chrome-mac-x64.zip" "https://storage.googleapis.com/chrome-for-testing-public/153.0.8010.12/mac-x64/chrome-mac-x64.zip"

target="$HOME/Library/Caches/ms-playwright/chromium-1243"
mkdir -p "$target"
unzip -o "/tmp/chrome-mac-x64.zip" -d "$target"
```

### macOS — Headless Chromium

Если в `.env` указано `HEADLESS=true`:

**Apple Silicon:**

```bash
curl -4 -L -o "/tmp/chrome-headless-shell-mac-arm64.zip" "https://storage.googleapis.com/chrome-for-testing-public/153.0.8010.12/mac-arm64/chrome-headless-shell-mac-arm64.zip"

target="$HOME/Library/Caches/ms-playwright/chromium_headless_shell-1243"
mkdir -p "$target"
unzip -o "/tmp/chrome-headless-shell-mac-arm64.zip" -d "$target"
```

**Intel Mac:**

```bash
curl -4 -L -o "/tmp/chrome-headless-shell-mac-x64.zip" "https://storage.googleapis.com/chrome-for-testing-public/153.0.8010.12/mac-x64/chrome-headless-shell-mac-x64.zip"

target="$HOME/Library/Caches/ms-playwright/chromium_headless_shell-1243"
mkdir -p "$target"
unzip -o "/tmp/chrome-headless-shell-mac-x64.zip" -d "$target"
```

> `.env` добавлен, чтобы не создавать вручную, так как это тестовый проект.
