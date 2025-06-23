// 圖片配置
const PICSUM_BASE = 'https://picsum.photos';

// 經過測試的穩定種子值
const STABLE_SEEDS = {
    banners: [100, 200, 300, 400, 500, 600, 888],
    books: [800, 900, 1000, 1100, 1200, 1300, 2023],
    news: [150, 250, 350, 450, 550, 650, 750, 850, 950, 1050],
    activities: [160, 260, 360, 460, 560, 660, 760, 860, 960, 1060]
};

// 圖片品質設定
const QUALITY_LEVELS = {
    high: '?quality=80',
    medium: '?quality=60',
    low: '?quality=40'
};

// 生成圖片 URL
export const generateImageUrl = (width, height, seed = 100, quality = 'medium') => {
    const qualityParam = QUALITY_LEVELS[quality] || QUALITY_LEVELS.medium;
    return `${PICSUM_BASE}/seed/${seed}/${width}/${height}${qualityParam}`;
};

// 書籍資訊
const BOOK_INFO = {
    title: "《做伙來踅大稻埕》台文繪本套書",
    content: "《大稻埕動物園》圖文：林小杯 /《大稻埕ê山珍海味》圖：吳睿哲"
};

// 生成橫幅資料
export const generateBannerData = () => {
    const dimensions = [
        [1280, 600], [1500, 600], [1280, 800], 
        [1500, 800], [1080, 600], [1280, 400], [1080, 400]
    ];
    
    return STABLE_SEEDS.banners.map((seed, index) => ({
        img: generateImageUrl(dimensions[index][0], dimensions[index][1], seed, 'high'),
        alt: `首頁橫幅圖片 ${index + 1}`,
    }));
};

// 生成選書指南資料
export const generateGuideData = () => {
    return STABLE_SEEDS.books.map((seed, index) => ({
        img: generateImageUrl(180, 250, seed),
        alt: `書籍「${BOOK_INFO.title}」封面圖片`,
        label: "圖畫書類",
        title: BOOK_INFO.title + "(《大稻埕動物園》台文繪本+《大稻埕ê山珍海味》台文迷你圖鑑)",
        content: BOOK_INFO.content,
        url: "books-detail",
    }));
};

// 生成新聞圖片 URL
export const generateNewsImageUrl = (index = 0) => {
    const seed = STABLE_SEEDS.news[index % STABLE_SEEDS.news.length];
    return generateImageUrl(300, 200, seed);
};

// 生成卡片圖片 URL  
export const generateCardImageUrl = (index = 0) => {
    const seed = STABLE_SEEDS.books[index % STABLE_SEEDS.books.length];
    return generateImageUrl(180, 250, seed);
};

// 書籍分類
export const BOOK_CATEGORIES = {
    PICTURE_BOOKS: "圖畫書類",
    LITERATURE: "文學類", 
    SCIENCE: "科學類",
    SOCIAL_STUDIES: "社會科學類",
    ARTS: "藝術類",
    APPLIED_SCIENCE: "應用科學類",
    LANGUAGE: "語文學習類"
};

// 年齡群組
export const AGE_GROUPS = {
    PRESCHOOL: "學齡前",
    ELEMENTARY_LOW: "國小低年級",
    ELEMENTARY_MID: "國小中年級", 
    ELEMENTARY_HIGH: "國小高年級",
    JUNIOR_HIGH: "國中",
    SENIOR_HIGH: "高中"
};

// 活動類型
export const ACTIVITY_TYPES = {
    READING: "閱讀推廣",
    WORKSHOP: "工作坊",
    COMPETITION: "競賽活動",
    EXHIBITION: "展覽活動"
};

// 新聞資料
export const generateNewsData = () => [
    {
        img: generateNewsImageUrl(0),
        alt: "新聞「中小學生讀物選介活動開跑」配圖",
        title: "中小學生讀物選介活動開跑",
        date: "2024-01-15",
        content: "今年度中小學生讀物選介活動正式開始，歡迎全國中小學生踴躍參與。",
        url: "/news/1"
    },
    {
        img: generateNewsImageUrl(1),
        alt: "新聞「優良讀物評選結果出爐」配圖",
        title: "優良讀物評選結果出爐",
        date: "2024-01-10",
        content: "經過嚴格評選，本年度優良讀物名單已確定，涵蓋各年齡層適讀書籍。",
        url: "/news/2"
    },
    {
        img: generateNewsImageUrl(2),
        alt: "新聞「閱讀推廣座談會」配圖",
        title: "閱讀推廣座談會",
        date: "2024-01-05",
        content: "邀請各界專家學者分享閱讀推廣經驗，促進親子共讀文化。",
        url: "/news/3"
    }
];

// 常見問題資料
export const FAQ_DATA = [
    {
        question: "如何參與中小學生讀物選介活動？",
        answer: "請至報名專區下載相關表格，填寫完成後依照指示上傳檔案即可完成報名。"
    },
    {
        question: "選介書籍的評選標準是什麼？",
        answer: "評選標準包括內容適宜性、教育價值、文字品質、圖像設計等多個面向。"
    },
    {
        question: "獲選書籍會如何公布？",
        answer: "獲選書籍將在官網上公布完整清單，並提供 PDF 及 Excel 格式下載。"
    }
];

// 報名步驟資料
export const SIGNUP_STEPS = [
    { title: "下載檔案" },
    { title: "線上填表、列印表單" },
    { title: "檔案上傳" },
    { title: "完成線上報名、郵寄讀物及文件" },
    { title: "資料修改" },
]; 