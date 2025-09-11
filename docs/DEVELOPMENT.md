# 開發者指南

> 中小學生讀物選介網站 - 開發環境設定與最佳實踐

## 🚀 環境設定

### 必要軟體
- **Node.js**: 18.0.0 或更高版本
- **npm**: 9.0.0 或更高版本
- **Git**: 2.30.0 或更高版本

### 推薦工具
- **VS Code**: 建議的程式碼編輯器
- **VS Code 擴充套件**:
  - Astro
  - ES7+ React/Redux/React-Native snippets
  - SCSS IntelliSense
  - Prettier - Code formatter
  - GitLens

## 📁 專案架構詳解

### 核心概念

#### Astro 島嶼架構
```
靜態 HTML + 互動式 React 島嶼
├── 靜態內容 (.astro 檔案)
└── 互動組件 (.jsx 檔案，client:only)
```

#### 檔案命名規則
- **頁面**: `kebab-case.astro` (例: `books-category.astro`)
- **組件**: `PascalCase.astro/jsx` (例: `SliderNews.jsx`)
- **樣式**: `kebab-case.scss` (例: `signup-form.scss`)

### 目錄結構說明

```
src/
├── components/           # 組件目錄
│   ├── *.astro          # 靜態組件
│   ├── *.jsx            # React 島嶼組件
│   └── README.md        # 組件說明文件
├── layouts/             # 版面配置
│   └── Layout.astro     # 主要版面模板
├── pages/               # 頁面路由
│   ├── index.astro      # 首頁 (/)
│   ├── news.astro       # 最新消息 (/news)
│   └── ...              # 其他頁面
├── styles/              # 樣式檔案
│   ├── global.scss      # 全域樣式
│   ├── variables.scss   # SCSS 變數
│   └── *.scss           # 各頁面樣式
└── data/                # 資料檔案
    └── mockData.js      # 模擬資料
```

## 🔧 開發工作流程

### 1. 環境初始化
```bash
# 複製專案
git clone [repository-url]
cd selected-readings

# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev
```

### 2. 分支管理
```bash
# 切換到開發分支
git checkout develop

# 創建功能分支
git checkout -b feature/your-feature-name

# 開發完成後
git add .
git commit -m "feat: add your feature description"
git push origin feature/your-feature-name

# 合併到 develop
git checkout develop
git merge feature/your-feature-name
```

### 3. 開發規範

#### Commit 訊息格式
```
<type>(<scope>): <description>

type:
- feat: 新功能
- fix: 修復 bug
- docs: 文件更新
- style: 樣式調整
- refactor: 程式碼重構
- test: 測試相關
- chore: 建置或輔助工具變動

範例:
feat(news): add date formatting for ROC calendar
fix(slider): resolve mobile responsive issue
docs: update backend integration guide
```

#### 程式碼風格
- 使用 2 空格縮排
- 字串使用雙引號
- 行尾不留空白
- 檔案結尾保留一個空行

## 🎨 組件開發

### Astro 組件 (.astro)

#### 基本結構
```astro
---
// TypeScript 區塊
interface Props {
  title: string;
  content?: string;
}

const { title, content } = Astro.props;
---

<!-- HTML 模板 -->
<div class="component">
  <h2>{title}</h2>
  {content && <p>{content}</p>}
</div>

<style lang="scss">
// 組件樣式
.component {
  padding: 1rem;
  
  h2 {
    color: var(--primary-color);
  }
}
</style>
```

#### 最佳實踐
- 使用 TypeScript 定義 Props 介面
- 組件樣式使用 `<style lang="scss">`
- 避免在 Astro 組件中使用複雜的 JavaScript 邏輯

### React 組件 (.jsx)

#### 基本結構
```jsx
import { useState, useEffect } from 'react';

export default function InteractiveComponent(props) {
  const [state, setState] = useState(null);

  useEffect(() => {
    // 初始化邏輯
  }, []);

  return (
    <div className="interactive-component">
      {/* JSX 內容 */}
    </div>
  );
}
```

#### 使用方式
```astro
---
import InteractiveComponent from './InteractiveComponent.jsx';
---

<InteractiveComponent client:only list={data} />
```

#### 最佳實踐
- 使用 `client:only` 指令
- 避免 SSR，純客戶端渲染
- 組件應該是自包含的，不依賴外部狀態

## 🎨 樣式開發

### SCSS 架構
```scss
// variables.scss - 變數定義
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --font-size-base: 16px;
}

// global.scss - 全域樣式
* {
  box-sizing: border-box;
}

body {
  font-family: 'Noto Sans TC', sans-serif;
  font-size: var(--font-size-base);
}

// 各頁面樣式檔案
.page-specific-class {
  // 頁面特定樣式
}
```

### 響應式設計
```scss
// 斷點定義
$breakpoints: (
  mobile: 768px,
  tablet: 1024px,
  desktop: 1320px
);

// 使用方式
.component {
  padding: 1rem;
  
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
  
  @media (max-width: 1024px) {
    display: block;
  }
}
```

### CSS 命名規範
- 使用 BEM 方法論
- 類別名稱使用 kebab-case
- 避免過深的巢狀結構

```scss
// 好的範例
.news-card {
  &__image {
    width: 100%;
  }
  
  &__title {
    font-size: 1.2rem;
    
    &--featured {
      font-weight: bold;
    }
  }
}

// 避免
.news .card .image .title.featured {
  // 過深的巢狀
}
```

## 🔍 除錯與測試

### 開發工具
```bash
# 檢查 TypeScript 錯誤
npm run astro check

# 建置檢查
npm run build

# 預覽建置結果
npm run preview
```

### 常見問題排除

#### 1. 組件不顯示
- 檢查 `client:only` 指令
- 確認組件正確匯出
- 查看瀏覽器控制台錯誤

#### 2. 樣式不生效
- 確認 SCSS 檔案路徑
- 檢查變數匯入
- 驗證 CSS 選擇器優先級

#### 3. 建置失敗
- 清除 `.astro` 快取目錄
- 重新安裝依賴 `rm -rf node_modules && npm install`
- 檢查 TypeScript 錯誤

### 效能優化

#### 圖片優化
- 使用適當的圖片格式 (WebP, AVIF)
- 設定正確的尺寸屬性
- 使用 `loading="lazy"` 延遲載入

#### JavaScript 優化
- 最小化 React 組件的使用
- 避免不必要的 useEffect
- 使用 React.memo 避免重複渲染

#### CSS 優化
- 避免未使用的樣式
- 使用 CSS 變數提高可維護性
- 最小化巢狀層級

## 📦 建置與部署

### 建置流程
```bash
# 開發建置 (包含 source maps)
npm run build

# 生產建置
NODE_ENV=production npm run build
```

### 建置輸出檢查
```bash
# 檢查建置檔案大小
ls -la dist/assets/

# 檢查 HTML 結構
grep -r "astro-island" dist/
```

### 部署前檢查清單
- [ ] 所有頁面正常載入
- [ ] React 組件功能正常
- [ ] 響應式設計在各裝置正常
- [ ] 圖片和資源正確載入
- [ ] 無 JavaScript 錯誤
- [ ] SEO 標籤完整

## 🔧 工具配置

### VS Code 設定
```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "emmet.includeLanguages": {
    "astro": "html"
  },
  "files.associations": {
    "*.astro": "astro"
  }
}
```

### Prettier 配置
```json
// .prettierrc
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80
}
```

## 📚 學習資源

### 官方文件
- [Astro 官方文件](https://docs.astro.build/)
- [React 官方文件](https://react.dev/)
- [SCSS 官方文件](https://sass-lang.com/)

### 推薦教學
- [Astro 島嶼架構](https://docs.astro.build/en/concepts/islands/)
- [React Hooks 指南](https://react.dev/reference/react)
- [SCSS 最佳實踐](https://sass-guidelin.es/)

---

**維護團隊**: 聯合線上股份有限公司  
**最後更新**: 2025年9月11日
