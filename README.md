# 中小學生讀物選介 - 官方網站

> 基於 Astro 框架開發的靜態網站，採用前後端分離架構

## 📋 專案概述

本專案是文化部「中小學生讀物選介」活動的官方網站，提供活動資訊、書籍推薦、線上報名等功能。

### 🏗️ 技術架構

- **前端框架**: [Astro](https://astro.build/) v4.13.1
- **UI 組件**: React 18.3.1 (島嶼架構)
- **樣式**: SCSS
- **部署方式**: 靜態檔案 + 後端資料注入

### 🎯 專案特色

- **靜態生成**: 使用 Astro 生成靜態 HTML 檔案
- **島嶼架構**: React 組件僅在需要時載入
- **後端協作**: 前端提供靜態檔案，後端負責資料注入
- **響應式設計**: 支援桌面版和行動版

## 🚀 快速開始

### 環境需求

- Node.js 18+ 
- npm 或 yarn

### 安裝與執行

```bash
# 安裝依賴
npm install

# 開發模式
npm run dev

# 建置生產檔案
npm run build

# 預覽建置結果
npm run preview
```

### 開發伺服器

```bash
npm run dev
```
開啟 http://localhost:4321 查看網站

## 📁 專案結構

```
selected-readings/
├── public/                 # 靜態資源
│   ├── fonts/             # 字體檔案
│   ├── favicon.svg        # 網站圖示
│   └── *.png, *.svg       # 圖片資源
├── src/
│   ├── components/        # Astro/React 組件
│   │   ├── *.astro       # Astro 組件
│   │   └── *.jsx         # React 組件 (島嶼)
│   ├── layouts/          # 版面配置
│   │   └── Layout.astro  # 主要版面
│   ├── pages/            # 頁面路由
│   │   ├── index.astro   # 首頁
│   │   ├── news.astro    # 最新消息
│   │   └── ...           # 其他頁面
│   ├── styles/           # SCSS 樣式
│   │   ├── global.scss   # 全域樣式
│   │   ├── variables.scss # 變數定義
│   │   └── *.scss        # 各頁面樣式
│   └── data/             # 資料檔案
│       └── mockData.js   # 模擬資料
├── dist/                 # 建置輸出 (給後端使用)
└── docs/                 # 說明文件
```

## 🔧 開發指南

### 分支管理

```
main     - 正式版本 (生產環境)
develop  - 開發版本 (整合測試)
feature/* - 功能分支
hotfix/*  - 緊急修復
```

### 開發流程

1. 從 `develop` 分支創建功能分支
```bash
git checkout develop
git checkout -b feature/your-feature-name
```

2. 開發完成後合併回 `develop`
```bash
git checkout develop
git merge feature/your-feature-name
```

3. 發布時將 `develop` 合併到 `main`

### 組件開發

#### Astro 組件 (.astro)
- 用於靜態內容和版面結構
- 支援 TypeScript 和 SCSS
- 在建置時完全靜態化

#### React 組件 (.jsx)
- 用於需要互動的功能
- 採用島嶼架構，僅在需要時載入
- 使用 `client:only` 指令

### 樣式開發

- 使用 SCSS 預處理器
- 全域變數定義在 `src/styles/variables.scss`
- 每個頁面有對應的樣式檔案

## 🚀 建置與部署

### 建置指令

```bash
npm run build
```

建置完成後，`dist/` 目錄包含所有靜態檔案，交由後端進行資料注入。

### 建置輸出

```
dist/
├── index.html           # 首頁
├── news/index.html      # 最新消息頁
├── about/index.html     # 關於我們頁
├── assets/              # 靜態資源
│   ├── *.js            # JavaScript 檔案
│   ├── *.css           # CSS 檔案
│   └── *.svg, *.png    # 圖片資源
└── ...                 # 其他頁面
```

## 🤝 後端協作

本專案採用前後端分離架構：

1. **前端職責**: 提供靜態 HTML/CSS/JS 檔案
2. **後端職責**: 將真實資料注入到靜態檔案中

詳細的後端協作說明請參考：[後端協作指南](./docs/BACKEND_GUIDE.md)

## 📝 常用指令

| 指令 | 說明 |
|------|------|
| `npm install` | 安裝依賴套件 |
| `npm run dev` | 啟動開發伺服器 |
| `npm run build` | 建置生產檔案 |
| `npm run preview` | 預覽建置結果 |
| `npm run astro check` | 檢查 TypeScript 錯誤 |

## 🐛 問題排除

### 常見問題

1. **建置失敗**
   - 檢查 Node.js 版本是否為 18+
   - 清除 `node_modules` 重新安裝

2. **樣式不生效**
   - 確認 SCSS 檔案路徑正確
   - 檢查 `variables.scss` 是否正確匯入

3. **React 組件不工作**
   - 確認使用 `client:only` 指令
   - 檢查組件是否正確匯出

## 📚 相關資源

- [Astro 官方文件](https://docs.astro.build/)
- [React 官方文件](https://react.dev/)
- [SCSS 官方文件](https://sass-lang.com/)

## 👥 貢獻指南

1. Fork 本專案
2. 創建功能分支
3. 提交變更
4. 發起 Pull Request

## 📄 授權

本專案由文化部授權開發，僅供官方活動使用。

---

**維護團隊**: 聯合線上股份有限公司  
**最後更新**: 2025年9月