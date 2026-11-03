# 後端協作指南

> 中小學生讀物選介網站 - 前後端協作說明

## 📋 協作概述

本專案採用前後端分離架構：
- **前端**: 提供靜態 HTML/CSS/JS 檔案
- **後端**: 將真實資料注入到靜態檔案的指定位置

## 🏗️ 架構說明

### 資料注入機制

前端使用 Astro 的島嶼架構，動態組件透過 `<astro-island>` 標籤載入：

```html
<astro-island
    uid="Z1uAFBx"
    component-url="./assets/SliderNews.js"
    component-export="default"
    renderer-url="./assets/client.js"
    props="{&quot;list&quot;:[...],&quot;url&quot;:[...]}"
    ssr=""
    client="only"
    opts="{&quot;name&quot;:&quot;SliderNews&quot;,&quot;value&quot;:true}">
</astro-island>
```

**關鍵欄位**: `props` 屬性包含 JSON 編碼的資料

## 📁 檔案結構

建置後的 `dist/` 目錄結構：

```
dist/
├── index.html              # 首頁
├── news/index.html          # 最新消息
├── about/index.html         # 關於我們
├── books/index.html         # 獲選書單
├── books-category/index.html # 書單分類
├── books-detail/index.html  # 書籍詳情
├── recommend/index.html     # 歷屆推薦
├── selection/index.html     # 評選報告
├── selection-category/index.html # 評選分類
├── brochure/index.html      # 活動簡章
├── signup/index.html        # 線上報名
├── qa/index.html           # 常見問答
├── method/index.html       # 活動辦法
├── join/index.html         # 我要參加
├── winners/index.html      # 得獎名單
├── online/index.html       # 線上活動
├── entity/index.html       # 實體活動
├── review/index.html       # 精彩回顧
├── contact/index.html      # 聯絡我們
├── mark/index.html         # 獲選標章
└── assets/                 # 靜態資源
    ├── *.js               # JavaScript 檔案
    ├── *.css              # CSS 檔案
    └── *.png, *.svg       # 圖片資源
```

## 🎯 需要資料注入的頁面

### 1. 首頁 (index.html)

#### 1.1 橫幅輪播 (SliderBanner)
**搜尋關鍵字**: `component-url="./assets/SliderBanner.js"`

**資料格式**:
```json
{
  "list": [
    [0, {
      "img": [0, "圖片URL"],
      "alt": [0, "圖片描述"]
    }]
  ]
}
```

#### 1.2 最新消息 (SliderNews)
**搜尋關鍵字**: `component-url="./assets/SliderNews.js"`

**資料格式**:
```json
{
  "list": [
    [0, {
      "title": [0, "新聞標題"],
      "content": [0, "新聞內容"],
      "date": [0, "112.10.06"],
      "alt": [0, "圖片描述"],
      "img": [0, "圖片URL"],
      "id": [0, "1"]
    }]
  ],
  "url": [0, "/anne/book/"]
}
```

**重要**: 日期格式必須為 `民國年.月.日` (例: `112.1.1`)

#### 1.3 選書指南 (SliderGuide)
**搜尋關鍵字**: `component-url="./assets/SliderGuide.js"`

**資料格式**:
```json
{
  "list": [
    [0, {
      "img": [0, "書籍封面URL"],
      "alt": [0, "書籍描述"],
      "label": [0, "圖畫書類"],
      "title": [0, "書籍標題"],
      "content": [0, "作者資訊"],
      "url": [0, "books-detail"]
    }]
  ]
}
```

#### 1.4 報名專區 (SliderSignup)
**搜尋關鍵字**: `component-url="./assets/SliderSignup.js"`

**資料格式**:
```json
{
  "list": [
    [0, {"title": [0, "下載檔案"]}],
    [0, {"title": [0, "線上填表、列印表單"]}],
    [0, {"title": [0, "檔案上傳"]}],
    [0, {"title": [0, "完成線上報名、郵寄讀物及文件"]}],
    [0, {"title": [0, "資料修改"]}]
  ],
  "start": [0, "0"]
}
```

#### 1.5 標題組件 (TitleDefault)
**適用頁面**: 各頁標題。`books-category`、`selection-category` 依網址 `type` 切換；其餘頁面傳入固定文字。

**搜尋關鍵字**: `component-url="./assets/TitleDefault.js"` 或 `component-url="../assets/TitleDefault.js"`

元件不接收 `type`。頁面網址帶有 `?type=` 時，從 `title` 清單找出 `url` 含有 `type=<數字>` 的項目，顯示該項目的 `title`。沒有 `type` 時當作 `1`。`title` 第一項若是字串，則直接顯示該字串，忽略網址參數。

**固定文字**:
```json
{
  "title": [1, [
    [0, "關於我們"]
  ]]
}
```

**依類別切換**（`books-category` 的 `url` 路徑；`selection-category` 改為 `selection-category?type=1`）:
```json
{
  "title": [1, [
    [0, {
      "title": [0, "人文社科類"],
      "url": [0, "books-category?type=1"]
    }],
    [0, {
      "title": [0, "叢書工具書類"],
      "url": [0, "books-category?type=2"]
    }]
  ]]
}
```

### 2. 書籍相關頁面

#### 2.1 側邊欄 (SliderAside)
**適用頁面**: books, books-category, recommend, selection, selection-category

**搜尋關鍵字**: `SliderAside.js`

屬性是 `type`、`list`、`url`。`list` 每一筆只有 `title` 與 `url`，沒有封面或作者。`url` 必須含有 `type=<數字>`，連結會與頁面網址的 `?type=` 比對以標示目前分類。`recommend` 使用推介清單，其餘頁面使用八個書籍類別。

```json
{
  "type": [0, "books-category"],
  "url": [0, "/"],
  "list": [1, [
    [0, {
      "title": [0, "人文社科類"],
      "url": [0, "books-category?type=1"]
    }],
    [0, {
      "title": [0, "叢書工具書類"],
      "url": [0, "books-category?type=2"]
    }]
  ]]
}
```

以下元件用同一份清單顯示目前分類。後端改名稱或順序時，`type` 數字要與側欄 `url` 一致。這些元件都不接收 `type` 參數，而是由瀏覽器讀取網址上的 `?type=`。

#### 2.2 搜尋列標題 (FillterSearch)
**適用頁面**: `recommend` 依 `type` 切換。`books`、`books-category`、`books-detail` 傳入固定文字。

**搜尋關鍵字**: `component-url="../assets/FillterSearch.js"`

屬性名稱是 `search`。傳入字串時直接顯示，忽略網址參數。傳入清單時，沒有 `type` 就顯示第一筆。

**固定文字**:
```json
{
  "search": [0, "獲選書籍"]
}
```

**依推介切換**（`recommend`）:
```json
{
  "search": [1, [
    [0, {
      "title": [0, "第45次推介"],
      "url": [0, "recommend?type=1"]
    }],
    [0, {
      "title": [0, "第44次推介"],
      "url": [0, "recommend?type=2"]
    }]
  ]]
}
```

#### 2.3 分類標題 (FillterCate)
**適用頁面**: `books-category` 依 `type` 切換。`books`、`recommend` 傳入固定文字「全部」。`books-detail` 沒有傳這個屬性。

**搜尋關鍵字**: `component-url="../assets/FillterCate.js"`

屬性名稱是 `cate`。清單項目是 `title` 與 `url`，不要使用 `categories`、`id`、`name` 或 `count`。傳入字串時直接顯示。傳入清單時，沒有 `type` 就顯示第一筆。

**固定文字**:
```json
{
  "cate": [0, "全部"]
}
```

**依類別切換**（`books-category`）:
```json
{
  "cate": [1, [
    [0, {
      "title": [0, "人文社科類"],
      "url": [0, "books-category?type=1"]
    }]
  ]]
}
```

#### 2.4 類別按鈕 (SelectorBtn)
**適用頁面**: `books-category` 依 `type` 切換。`books`、`books-detail`、`recommend` 傳入固定文字，例如「書籍類別」。

**搜尋關鍵字**: `component-url="../assets/SelectorBtn.js"`

屬性名稱是 `catebtn`。清單格式與 `FillterCate` 的 `cate` 相同。傳入字串時直接顯示。傳入清單時，沒有 `type` 就顯示第一筆。

**固定文字**:
```json
{
  "catebtn": [0, "書籍類別"]
}
```

#### 2.5 麵包屑 (Breadcrumb)
**適用頁面**: selection-category

**搜尋關鍵字**: `component-url="../assets/Breadcrumb.js"`

屬性名稱是 `list`，沒有固定字串模式。每一筆是 `title` 與 `url`，`url` 須含 `type=<數字>`。沒有 `type` 時顯示第一筆。元件只輸出被選中的文字。

```json
{
  "list": [1, [
    [0, {
      "title": [0, "人文社科類"],
      "url": [0, "selection-category?type=1"]
    }],
    [0, {
      "title": [0, "叢書工具書類"],
      "url": [0, "selection-category?type=2"]
    }]
  ]]
}
```

### 3. 活動相關頁面

#### 3.1 活動輪播 (SliderActivities)
**適用頁面**: review

**搜尋關鍵字**: `SliderActivities.js`

**資料格式**:
```json
{
  "list": [
    [0, {
      "img": [0, "活動圖片URL"],
      "alt": [0, "活動描述"],
      "title": [0, "活動標題"],
      "date": [0, "112.10.06"],
      "location": [0, "活動地點"],
      "url": [0, "活動連結"]
    }]
  ]
}
```

## 🔧 資料處理規則

### 1. JSON 編碼
所有 props 資料必須進行 JSON 編碼後放入 HTML：
```javascript
// 原始資料
const data = { title: "標題" };

// 編碼後
const encoded = JSON.stringify(data).replace(/"/g, '&quot;');
```

### 2. 日期格式
- **輸入格式**: 民國年.月.日 (例: `112.1.1`)
- **處理**: 前端會自動轉換為西元年並補零 (`2023-01-01`)
- **顯示**: 維持原始民國年格式

### 3. 圖片路徑
- 使用絕對路徑或完整 URL
- 建議使用 CDN 或相對於網站根目錄的路徑

### 4. HTML 內容
- 新聞內容等長文本可包含 HTML 標籤
- 使用 `<br />` 進行換行
- 特殊字元需要適當編碼

## 🔍 資料注入步驟

### 步驟 1: 定位目標
在 HTML 檔案中搜尋對應的 `component-url` 或組件名稱

### 步驟 2: 解析現有格式
查看現有的 `props` 屬性格式，了解資料結構

### 步驟 3: 準備資料
按照指定格式準備真實資料

### 步驟 4: 編碼注入
將資料 JSON 編碼後替換 `props` 屬性值

### 步驟 5: 測試驗證
確認頁面載入正常，資料顯示正確

## 📋 檢查清單

- [ ] 所有 JSON 資料格式正確
- [ ] 特殊字元已適當編碼
- [ ] 圖片路徑可正常存取
- [ ] 日期格式符合規範 (民國年.月.日)
- [ ] HTML 標籤正確閉合
- [ ] 頁面載入無 JavaScript 錯誤

## 🚨 注意事項

1. **不要修改**: `component-url`, `renderer-url`, `uid` 等屬性
2. **只替換**: `props` 屬性的值
3. **保持格式**: JSON 的巢狀結構必須完全一致
4. **測試環境**: 建議先在測試環境驗證
5. **備份檔案**: 修改前請備份原始檔案

## 🆘 常見問題

### Q: 頁面顯示空白或錯誤
A: 檢查 JSON 格式是否正確，特別注意括號和引號的配對

### Q: 圖片無法顯示
A: 確認圖片路徑正確，建議使用絕對路徑

### Q: 日期格式錯誤
A: 確保使用民國年格式 (112.1.1)，不是西元年

### Q: 中文字元顯示異常
A: 確認檔案編碼為 UTF-8

## 📞 技術支援

如有問題請聯繫前端開發團隊：
- **Email**: [anne.lin@udngroup.com]
- **專案**: 中小學生讀物選介官網
- **GitHub**: [https://github.com/udnanne/selected-readings/tree/main]

---

**文件版本**: v1.1
**最後更新**: 2026年11月3日
