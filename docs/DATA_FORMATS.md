# 資料格式範例

> 各組件所需的完整資料格式範例

## 🎯 SliderNews (最新消息)

### 使用頁面
- 首頁 (index.html)

### 搜尋關鍵字
```html
component-url="./assets/SliderNews.js"
```

### 完整範例
```json
{
  "list": [
    1,
    [
      [0, {
        "title": [0, "文化部「第45次中小學生讀物選介」獲選好書－有獎徵答等推廣活動開跑"],
        "content": [0, "文化部每年辦理「中小學生讀物選介」，由專業評審選出適合中小學生閱讀的書籍，今年度（第45次）評選結果已於日前公布，為了將評審精心推薦的書單傳遞給更多師生、家長，文化部特別製作精選好書導讀文章，結合有獎徵答活動，邀請全國閱讀旅者們，打開書本，展開奇幻冒險。<br /><br />文化部表示，本次主題為「讀之冒險─時空祕鑰」，邀請知名漫畫家莊永新、國立交通大學外國語文學系李家沂副教授、長期關注兒童權益與未來發展之作家諶淑婷，撰寫獲選讀物介紹文章，引領讀者遨遊書海，探索閱讀的各種風貌，並於112年10月6日至11月5日舉辦有獎徵答活動，只要於活動期間內閱讀文章及精選之星書單，並至官網「有獎徵答」專區進行答題，即可參加抽獎。"],
        "date": [0, "112.10.06"],
        "alt": [0, "有獎徵答等推廣活動開跑 圖片"],
        "img": [0, "https://example.com/news-image-1.jpg"],
        "id": [0, "1"]
      }],
      [0, {
        "title": [0, "第二則新聞標題"],
        "content": [0, "第二則新聞內容..."],
        "date": [0, "112.9.15"],
        "alt": [0, "第二則新聞圖片描述"],
        "img": [0, "https://example.com/news-image-2.jpg"],
        "id": [0, "2"]
      }]
    ]
  ],
  "url": [0, "/anne/book/"]
}
```

### 欄位說明
- `title`: 新聞標題
- `content`: 新聞內容 (可包含 HTML 標籤)
- `date`: 發布日期 (民國年.月.日 格式)
- `alt`: 圖片替代文字
- `img`: 圖片 URL
- `id`: 新聞唯一識別碼
- `url`: 網站基礎路徑

---

## 🎯 SliderBanner (首頁橫幅)

### 使用頁面
- 首頁 (index.html)

### 搜尋關鍵字
```html
component-url="./assets/SliderBanner.js"
```

### 完整範例
```json
{
  "list": [
    1,
    [
      [0, {
        "img": [0, "https://example.com/banner-1.jpg"],
        "alt": [0, "首頁橫幅圖片 1"]
      }],
      [0, {
        "img": [0, "https://example.com/banner-2.jpg"],
        "alt": [0, "首頁橫幅圖片 2"]
      }],
      [0, {
        "img": [0, "https://example.com/banner-3.jpg"],
        "alt": [0, "首頁橫幅圖片 3"]
      }]
    ]
  ]
}
```

### 欄位說明
- `img`: 橫幅圖片 URL (建議尺寸: 1920x600)
- `alt`: 圖片替代文字

---

## 🎯 SliderGuide (選書指南)

### 使用頁面
- 首頁 (index.html)

### 搜尋關鍵字
```html
component-url="./assets/SliderGuide.js"
```

### 完整範例
```json
{
  "list": [
    1,
    [
      [0, {
        "img": [0, "https://example.com/book-cover-1.jpg"],
        "alt": [0, "書籍「做伙來踅大稻埕」封面圖片"],
        "label": [0, "圖畫書類"],
        "title": [0, "《做伙來踅大稻埕》台文繪本套書"],
        "content": [0, "《大稻埕動物園》圖文：林小杯"],
        "url": [0, "books-detail"]
      }],
      [0, {
        "img": [0, "https://example.com/book-cover-2.jpg"],
        "alt": [0, "書籍「第二本書」封面圖片"],
        "label": [0, "文學類"],
        "title": [0, "第二本推薦書籍"],
        "content": [0, "作者：某某某"],
        "url": [0, "books-detail"]
      }]
    ]
  ]
}
```

### 欄位說明
- `img`: 書籍封面 URL (建議尺寸: 180x250)
- `alt`: 圖片替代文字
- `label`: 書籍分類標籤
- `title`: 書籍標題
- `content`: 作者或簡介資訊
- `url`: 詳情頁面路徑

---

## 🎯 SliderAside (側邊欄分類)

### 使用頁面
- books/index.html
- books-category/index.html
- recommend/index.html
- selection/index.html
- selection-category/index.html

### 搜尋關鍵字
```html
SliderAside.js
```

### 欄位說明
- `type`: 頁面種類，例如 `books-category`、`selection-category`、`recommend`
- `url`: 站點前綴，正式環境為 `/anne/book/`，本機為 `/`
- `list`: 分類清單。每一筆只有 `title` 與 `url`，`url` 必須含 `type=<數字>`
- `recommend` 的 `list` 是推介次數；其餘頁面是八個書籍類別

### 完整範例
```json
{
  "type": [0, "books-category"],
  "url": [0, "/"],
  "list": [
    1,
    [
      [0, { "title": [0, "人文社科類"], "url": [0, "books-category?type=1"] }],
      [0, { "title": [0, "叢書工具書類"], "url": [0, "books-category?type=2"] }],
      [0, { "title": [0, "圖畫書類"], "url": [0, "books-category?type=3"] }],
      [0, { "title": [0, "文學翻譯類"], "url": [0, "books-category?type=4"] }],
      [0, { "title": [0, "文學類"], "url": [0, "books-category?type=5"] }],
      [0, { "title": [0, "漫畫類"], "url": [0, "books-category?type=6"] }],
      [0, { "title": [0, "自然科普類"], "url": [0, "books-category?type=7"] }],
      [0, { "title": [0, "雜誌類"], "url": [0, "books-category?type=8"] }]
    ]
  ]
}
```

`selection-category` 把每一筆的路徑改成 `selection-category?type=1` 這種形式。`recommend` 的清單如下：

```json
{
  "type": [0, "recommend"],
  "url": [0, "/"],
  "list": [
    1,
    [
      [0, { "title": [0, "第45次推介"], "url": [0, "recommend?type=1"] }],
      [0, { "title": [0, "第44次推介"], "url": [0, "recommend?type=2"] }],
      [0, { "title": [0, "第43次推介"], "url": [0, "recommend?type=3"] }],
      [0, { "title": [0, "第42次推介"], "url": [0, "recommend?type=4"] }],
      [0, { "title": [0, "第41次推介"], "url": [0, "recommend?type=5"] }]
    ]
  ]
}
```

---

## 🎯 TitleDefault (標題組件)

### 使用頁面
- 固定文字：關於我們、最新消息等一般頁面
- 依 `?type=` 切換：books-category/index.html、selection-category/index.html

### 搜尋關鍵字
```html
component-url="./assets/TitleDefault.js"
component-url="../assets/TitleDefault.js"
```

### 行為
`title` 第一項是字串時，顯示該字串。第一項是物件時，找出 `url` 含有目前 `type` 的項目並顯示其 `title`。網址沒有 `type` 時當作 `1`。

### 固定文字
```json
{
  "title": [
    1,
    [
      [0, "關於我們"]
    ]
  ]
}
```

### 依類別切換
清單與側欄相同。`books-category` 使用 `books-category?type=1`，`selection-category` 使用 `selection-category?type=1`。

```json
{
  "title": [
    1,
    [
      [0, { "title": [0, "人文社科類"], "url": [0, "selection-category?type=1"] }],
      [0, { "title": [0, "叢書工具書類"], "url": [0, "selection-category?type=2"] }]
    ]
  ]
}
```

---

## 🎯 FillterSearch (搜尋列標題)

### 使用頁面
- 固定文字「獲選書籍」：books/index.html、books-category/index.html、books-detail/index.html
- 依 `?type=` 切換：recommend/index.html

### 搜尋關鍵字
```html
component-url="../assets/FillterSearch.js"
```

### 行為
屬性名稱是 `search`。字串直接顯示。清單比對 `url` 裡的 `type=`，沒有 `type` 時顯示第一筆。

### 固定文字
```json
{
  "search": [0, "獲選書籍"]
}
```

### 依推介切換
```json
{
  "search": [
    1,
    [
      [0, { "title": [0, "第45次推介"], "url": [0, "recommend?type=1"] }],
      [0, { "title": [0, "第44次推介"], "url": [0, "recommend?type=2"] }]
    ]
  ]
}
```

---

## 🎯 FillterCate (分類標題)

### 使用頁面
- 依 `?type=` 切換：books-category/index.html
- 固定文字「全部」：books/index.html、recommend/index.html
- books-detail/index.html 沒有傳入 `cate`

### 搜尋關鍵字
```html
component-url="../assets/FillterCate.js"
```

### 行為
屬性名稱是 `cate`。清單項目只有 `title` 與 `url`。字串直接顯示。清單沒有 `type` 時顯示第一筆。

### 固定文字
```json
{
  "cate": [0, "全部"]
}
```

### 依類別切換
```json
{
  "cate": [
    1,
    [
      [0, { "title": [0, "人文社科類"], "url": [0, "books-category?type=1"] }],
      [0, { "title": [0, "叢書工具書類"], "url": [0, "books-category?type=2"] }]
    ]
  ]
}
```

---

## 🎯 SelectorBtn (類別按鈕)

### 使用頁面
- 依 `?type=` 切換：books-category/index.html
- 固定文字：books/index.html、books-detail/index.html、recommend/index.html

### 搜尋關鍵字
```html
component-url="../assets/SelectorBtn.js"
```

### 行為
屬性名稱是 `catebtn`。字串直接顯示在按鈕上。清單格式與 `FillterCate` 的 `cate` 相同，沒有 `type` 時顯示第一筆。

### 固定文字
```json
{
  "catebtn": [0, "書籍類別"]
}
```

### 依類別切換
```json
{
  "catebtn": [
    1,
    [
      [0, { "title": [0, "人文社科類"], "url": [0, "books-category?type=1"] }]
    ]
  ]
}
```

---

## 🎯 Breadcrumb (麵包屑)

### 使用頁面
- selection-category/index.html

### 搜尋關鍵字
```html
component-url="../assets/Breadcrumb.js"
```

### 行為
屬性名稱是 `list`。只輸出被選中的分類名稱，放在麵包屑最後一層。每一筆都要有 `title` 與含 `type=<數字>` 的 `url`。沒有 `type` 時顯示第一筆。

### 完整範例
```json
{
  "list": [
    1,
    [
      [0, { "title": [0, "人文社科類"], "url": [0, "selection-category?type=1"] }],
      [0, { "title": [0, "叢書工具書類"], "url": [0, "selection-category?type=2"] }],
      [0, { "title": [0, "圖畫書類"], "url": [0, "selection-category?type=3"] }],
      [0, { "title": [0, "文學翻譯類"], "url": [0, "selection-category?type=4"] }],
      [0, { "title": [0, "文學類"], "url": [0, "selection-category?type=5"] }],
      [0, { "title": [0, "漫畫類"], "url": [0, "selection-category?type=6"] }],
      [0, { "title": [0, "自然科普類"], "url": [0, "selection-category?type=7"] }],
      [0, { "title": [0, "雜誌類"], "url": [0, "selection-category?type=8"] }]
    ]
  ]
}
```

---

## 🎯 SliderActivities (活動輪播)

### 使用頁面
- review/index.html

### 搜尋關鍵字
```html
SliderActivities.js
```

### 完整範例
```json
{
  "list": [
    1,
    [
      [0, {
        "img": [0, "https://example.com/activity-1.jpg"],
        "alt": [0, "活動圖片描述"],
        "title": [0, "精彩活動標題"],
        "date": [0, "112.8.15"],
        "location": [0, "台北市文化局"],
        "url": [0, "activity-detail-url"]
      }]
    ]
  ]
}
```

### 欄位說明
- `img`: 活動圖片 URL
- `alt`: 圖片替代文字
- `title`: 活動標題
- `date`: 活動日期 (民國年.月.日)
- `location`: 活動地點
- `url`: 活動詳情連結

---

## 🎯 SliderSignup (報名流程)

### 使用頁面
- 首頁 (index.html)
- signup/index.html

### 搜尋關鍵字
```html
component-url="./assets/SliderSignup.js"
```

### 完整範例
```json
{
  "list": [
    1,
    [
      [0, {"title": [0, "下載檔案"]}],
      [0, {"title": [0, "線上填表、列印表單"]}],
      [0, {"title": [0, "檔案上傳"]}],
      [0, {"title": [0, "完成線上報名、郵寄讀物及文件"]}],
      [0, {"title": [0, "資料修改"]}]
    ]
  ],
  "start": [0, "0"]
}
```

### 欄位說明
- `list`: 報名步驟列表
- `title`: 每個步驟的標題
- `start`: 起始步驟索引 (通常為 "0")

---

## 📝 通用格式說明

### 陣列格式
所有資料都使用特定的陣列格式：
```json
[類型代碼, 實際資料]
```

- `[0, "字串"]` - 字串類型
- `[1, [...]]` - 陣列類型

### 編碼規則
1. 將 JSON 物件轉換為字串
2. 將雙引號 `"` 替換為 `&quot;`
3. 放入 HTML 的 `props` 屬性中

### 範例轉換
```javascript
// 原始資料
const data = {
  "title": [0, "標題"],
  "content": [0, "內容"]
};

// 轉換為 HTML 屬性
const propsValue = JSON.stringify(data).replace(/"/g, '&quot;');

// 結果
props="{&quot;title&quot;:[0,&quot;標題&quot;],&quot;content&quot;:[0,&quot;內容&quot;]}"
```

---

**注意**: 所有日期格式必須使用民國年 (例: 112.1.1)，前端會自動處理轉換和格式化。
