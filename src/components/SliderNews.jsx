import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function SliderNews() {
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
            <SplideSlide>
                <a href="#" className="splide__card common-card__card">
                    <div className="splide__card--img common-card__card--img">
                        <img
                            src="https://placehold.co/290x240"
                            alt=""
                            width="290"
                            height="240"
                            loading="lazy"
                        />
                    </div>
                    <div className="splide__card--text common-card__card--text">
                        <h3>
                            <span>112.10.06</span>文化部「第45次中小學生讀物選介」獲選好書－有獎徵答等推廣活
                        </h3>
                        <time dateTime="">112.10.06</time>
                    </div>
                </a>
            </SplideSlide>

            <SplideSlide>
                <a href="#" className="splide__card common-card__card">
                    <div className="splide__card--img common-card__card--img">
                        <img
                            src="https://placehold.co/350x240"
                            alt=""
                            width="290"
                            height="240"
                            loading="lazy"
                        />
                    </div>
                    <div className="splide__card--text common-card__card--text">
                        <h3>
                            <span>112.10.06</span>文化部「第45次中小學生讀物選介」獲選好書－有獎徵答等推廣活
                        </h3>
                        <time dateTime="">112.10.06</time>
                    </div>
                </a>
            </SplideSlide>

            <SplideSlide>
                <a href="#" className="splide__card common-card__card">
                    <div className="splide__card--img common-card__card--img">
                        <img
                            src="https://placehold.co/290x350"
                            alt=""
                            width="290"
                            height="240"
                            loading="lazy"
                        />
                    </div>
                    <div className="splide__card--text common-card__card--text">
                        <h3>
                            <span>112.10.06</span>文化部「第45次中小學生讀物選介」獲選好書－有獎徵答等推廣活
                        </h3>
                        <time dateTime="">112.10.06</time>
                    </div>
                </a>
            </SplideSlide>

            <SplideSlide>
                <a href="#" className="splide__card common-card__card">
                    <div className="splide__card--img common-card__card--img">
                        <img
                            src="https://placehold.co/350x290"
                            alt=""
                            width="290"
                            height="240"
                            loading="lazy"
                        />
                    </div>
                    <div className="splide__card--text common-card__card--text">
                        <h3>
                            <span>112.10.06</span>文化部「第45次中小學生讀物選介」獲選好書－有獎徵答等推廣活
                        </h3>
                        <time dateTime="">112.10.06</time>
                    </div>
                </a>
            </SplideSlide>

            <SplideSlide>
                <a href="#" className="splide__card common-card__card">
                    <div className="splide__card--img common-card__card--img">
                        <img
                            src="https://placehold.co/240x240"
                            alt=""
                            width="290"
                            height="240"
                            loading="lazy"
                        />
                    </div>
                    <div className="splide__card--text common-card__card--text">
                        <h3>
                            <span>112.10.06</span>文化部「第45次中小學生讀物選介」獲選好書－有獎徵答等推廣活
                        </h3>
                        <time dateTime="">112.10.06</time>
                    </div>
                </a>
            </SplideSlide>

            <SplideSlide>
                <a href="#" className="splide__card common-card__card">
                    <div className="splide__card--img common-card__card--img">
                        <img
                            src="https://placehold.co/290x200"
                            alt=""
                            width="290"
                            height="240"
                            loading="lazy"
                        />
                    </div>
                    <div className="splide__card--text common-card__card--text">
                        <h3>
                            <span>112.10.06</span>文化部「第45次中小學生讀物選介」獲選好書－有獎徵答等推廣活
                        </h3>
                        <time dateTime="">112.10.06</time>
                    </div>
                </a>
            </SplideSlide>

            <SplideSlide>
                <a href="#" className="splide__card common-card__card">
                    <div className="splide__card--img common-card__card--img">
                        <img
                            src="https://placehold.co/240x200"
                            alt=""
                            width="290"
                            height="240"
                            loading="lazy"
                        />
                    </div>
                    <div className="splide__card--text common-card__card--text">
                        <h3>
                            <span>112.10.06</span>文化部「第45次中小學生讀物選介」獲選好書－有獎徵答等推廣活
                        </h3>
                        <time dateTime="">112.10.06</time>
                    </div>
                </a>
            </SplideSlide>
        </Splide>
    );
}
