import { Splide, SplideSlide } from "@splidejs/react-splide";

function dateTimeFormat(date) {
    //將民國年轉換為西元年 (EX: 112.1.1 時，回傳 2023-01-01)
    const parts = date.split(".");

    // 檢查是否為預期格式 (year.month.day)
    if (parts.length !== 3) {
        return new Date(date); // 回傳原始日期
    }

    const year = parseInt(parts[0]) + 1911; // 民國年轉西元年
    const month = parts[1].padStart(2, '0'); // 月份補零
    const day = parts[2].padStart(2, '0');   // 日期補零

    return new Date(`${year}-${month}-${day}`);
}

export default function SliderNews(props) {
    return (
        <Splide
            className="splide-news" aria-label="最新消息"
            options={{
                type: "loop",
                pagination: false,
                perPage: 4,
                fixedWidth: "300px",
                fixedHeight: "346px",
                gap: "20px",
                breakpoints: {
                    1297: {
                        perPage: 3,

                    },
                    1023: {
                        destroy: true,
                    },
                },
            }}
        >
            {props.list.map((item, index) => (
                <SplideSlide key={index}>
                    <a href={`${props.url}news#${item.id}`} className="splide__card common-card__card" aria-label="查看消息">
                        <div className="splide__card--img common-card__card--img">
                            <img
                                src={item.img}
                                alt={item.alt}
                                width="290"
                                height="240"
                                loading="lazy"
                            />
                        </div>
                        <div className="splide__card--text common-card__card--text">
                            <h3>
                                <span>{item.date}</span>{item.title}
                            </h3>
                            <time dateTime={
                                dateTimeFormat(item.date)
                                    .toISOString()
                                    .split("T")[0]
                            }>{item.date}</time>
                        </div>
                    </a>
                </SplideSlide>
            ))}
        </Splide>
    );
}
