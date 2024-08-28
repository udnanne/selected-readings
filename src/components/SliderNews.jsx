import { Splide, SplideSlide } from "@splidejs/react-splide";

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
                    <a href={`/news#${item.id}`} className="splide__card common-card__card" aria-label="查看消息">
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
                                new Date(
                                    item.date
                                        .split(".")
                                        .map((dateItem, dateIndex) => {
                                            if (dateIndex === 0) {
                                                return parseInt(dateItem) + 1911;
                                            }
                                            return dateItem;
                                        })
                                        .join("-")
                                )
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
