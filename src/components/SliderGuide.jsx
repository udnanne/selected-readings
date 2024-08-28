import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function SliderGuide(props) {
    return (
        <Splide
            className="splide-guide" aria-label="選書指南"
            options={{
                type: "loop",
                pagination: false,
                perPage: 6,
                fixedWidth: "190px",
                fixedHeight: "356px",
                gap: "20px",
                breakpoints: {
                    1297: {
                        perPage: 4,
                    },
                    1023: {
                        arrows: false,
                        perPage: 2,
                        fixedWidth: "165px",
                        fixedHeight: "316px",
                        gap: "15px",
                    },
                },
            }}
        >
            {
                props.list.map(({ img, alt, label, title, content }, index) => (
                    <SplideSlide key={index}>
                        <a href="#" className="splide__card common-card__card" aria-label="查看書籍">
                            <div className="splide__card--img common-card__card--img">
                                <img
                                    src={img}
                                    alt={alt}
                                    width="180"
                                    height="250"
                                    loading="lazy"
                                />
                                <span>{label}</span>
                            </div>
                            <div className="splide__card--text common-card__card--text">
                                <h3>
                                    {title}
                                </h3>
                                <p>
                                    {content}
                                </p>
                            </div>
                        </a>
                    </SplideSlide>
                ))
            }
        </Splide>
    );
}
