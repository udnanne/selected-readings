# 靜態頁面說明

## 📋 概述

此目錄包含由其他前端協作者開發的獨立 HTML 頁面，這些頁面保持其原有的樣式和結構，不與主專案的 Astro 架構整合。

## 📁 檔案結構

```
static-pages/
├── judges/
│   └── index.html      # 評審委員名單頁面
├── criteria/
│   └── index.html      # 評選標準頁面
└── README.md           # 說明文件
```

## 🔧 建置流程

這些靜態頁面會在執行 `npm run build` 時自動複製到 `dist/` 目錄中，保持與 Astro 一致的目錄結構：

```
dist/
├── judges/
│   └── index.html      # 評審委員名單
├── criteria/
│   └── index.html      # 評選標準
├── books/
│   └── index.html      # Astro 頁面
└── ...                 # 其他 Astro 建置檔案
```

## 🎯 訪問路徑

`npm run dev` 與建置完成後，這些頁面可透過以下路徑訪問：

- `/judges` 或 `/judges/` - 評審委員名單
- `/criteria` 或 `/criteria/` - 評選標準

## 🔗 導航整合

主站的導航選單已更新，指向這些靜態頁面：

```html
<li><a href="/judges">評審委員名單</a></li>
<li><a href="/criteria">評選標準</a></li>
```

## 📝 維護說明

### 更新內容

1. 直接編輯 `static-pages/judges/index.html` 或 `static-pages/criteria/index.html`
2. 執行 `npm run build` 重新建置
3. 新的內容會自動複製到 `dist/` 目錄的對應位置

### 樣式修改

這些頁面使用獨立的 CSS 樣式，包含在 HTML 檔案的 `<style>` 標籤或外部 CSS 檔案中。如需修改樣式：

1. 編輯對應 HTML 檔案中的樣式
2. 重新建置專案

### 後端整合

後端需要處理這些靜態 HTML 檔案：

1. **完整頁面結構**: 這些是完整的 HTML 頁面，包含 header、navigation、main content 和 footer
2. **資料注入**: 可以在表格和內容區域注入動態資料
3. **路徑處理**: 靜態資源路徑使用相對路徑 `../assets/`

## ⚠️ 注意事項

1. **保持原始結構** - 這些是協作者提供的完整頁面，保持其原有架構
2. **目錄結構一致** - 使用 `頁面名稱/index.html` 格式，與 Astro 建置輸出一致
3. **樣式隔離** - 這些頁面的樣式不會影響主專案
4. **建置依賴** - 確保 `astro.config.mjs` 中的複製插件正常運作

## 🚀 技術實現

建置流程透過 `astro.config.mjs` 中的自定義 Vite 插件實現：

```javascript
function copyStaticPages() {
    return {
        name: 'copy-static-pages',
        writeBundle() {
            // 複製 judges/index.html 到 dist/judges/
            // 複製 criteria/index.html 到 dist/criteria/
        }
    };
}
```

這確保了在每次建置時，靜態頁面都會被正確複製到輸出目錄，並保持與 Astro 一致的目錄結構。
