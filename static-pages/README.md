# 靜態頁面說明

## 📋 概述

此目錄包含由其他前端協作者開發的獨立 HTML 頁面，這些頁面保持其原有的樣式和結構，不與主專案的 Astro 架構整合。

## 📁 檔案列表

- `judges.html` - 評審委員名單頁面
- `criteria.html` - 評選標準頁面

## 🔧 建置流程

這些靜態頁面會在執行 `npm run build` 時自動複製到 `dist/` 目錄中：

```
dist/
├── judges.html      # 評審委員名單
├── criteria.html    # 評選標準
└── ...              # 其他 Astro 建置檔案
```

## 🎯 訪問路徑

建置完成後，這些頁面可透過以下路徑訪問：

- `/judges.html` - 評審委員名單
- `/criteria.html` - 評選標準

## 🔗 導航整合

主站的導航選單已更新，指向這些靜態檔案：

```html
<li><a href="/judges.html">評審委員名單</a></li>
<li><a href="/criteria.html">評選標準</a></li>
```

## 📝 維護說明

### 更新內容

1. 直接編輯 `static-pages/` 目錄中的 HTML 檔案
2. 執行 `npm run build` 重新建置
3. 新的內容會自動複製到 `dist/` 目錄

### 樣式修改

這些頁面使用獨立的 CSS 樣式，位於 `<style>` 標籤內。如需修改樣式：

1. 編輯對應 HTML 檔案中的 `<style>` 區塊
2. 重新建置專案

### 後端整合

後端需要處理這些靜態 HTML 檔案：

1. **Header/Footer 注入**: 這些頁面的 header 和 footer 區域預留了註解，後端可以注入完整的導航和頁尾內容
2. **資料注入**: 表格和內容區域可以由後端動態填充資料
3. **路徑處理**: 確保靜態資源（CSS、JS、圖片）的路徑正確

## ⚠️ 注意事項

1. **不要將這些檔案轉換為 Astro 組件** - 保持其獨立性
2. **樣式隔離** - 這些頁面的樣式不會影響主專案
3. **建置依賴** - 確保 `astro.config.mjs` 中的複製插件正常運作
4. **版本控制** - 這些檔案應該納入 Git 版本控制

## 🚀 技術實現

建置流程透過 `astro.config.mjs` 中的自定義 Vite 插件實現：

```javascript
function copyStaticPages() {
    return {
        name: 'copy-static-pages',
        writeBundle() {
            // 複製邏輯
        }
    };
}
```

這確保了在每次建置時，靜態頁面都會被正確複製到輸出目錄。
