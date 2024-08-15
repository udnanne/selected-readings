import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function SliderGuide() {
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
            <SplideSlide>
                <a href="#" className="splide__card common-card__card" aria-label="查看書籍">
                    <div className="splide__card--img common-card__card--img">
                        <img
                            src="https://placehold.co/180x250"
                            alt="《做伙來踅大稻埕》台文繪本套書 圖片"
                            width="180"
                            height="250"
                            loading="lazy"
                        />
                        <span>圖畫書類</span>
                    </div>
                    <div className="splide__card--text common-card__card--text">
                        <h3>
                            《做伙來踅大稻埕》台文繪本套書(《大稻埕動物園》台文繪本+《大稻埕ê山珍海味》台文迷你圖鑑)
                        </h3>
                        <p>
                            《大稻埕動物園》圖文：林小杯 /《大稻埕ê山珍海味》圖：吳睿哲
                        </p>
                    </div>
                </a>
            </SplideSlide>

            <SplideSlide>
                <a href="#" className="splide__card common-card__card" aria-label="查看書籍">
                    <div className="splide__card--img common-card__card--img">
                        <img
                            src="https://placehold.co/250x250"
                            alt="《做伙來踅大稻埕》台文繪本套書 圖片"
                            width="180"
                            height="250"
                            loading="lazy"
                        />
                        <span>圖畫書類</span>
                    </div>
                    <div className="splide__card--text common-card__card--text">
                        <h3>
                            《做伙來踅大稻埕》台文繪本套書(《大稻埕動物園》台文繪本+《大稻埕ê山珍海味》台文迷你圖鑑)
                        </h3>
                        <p>
                            《大稻埕動物園》圖文：林小杯 /《大稻埕ê山珍海味》圖：吳睿哲
                        </p>
                    </div>
                </a>
            </SplideSlide>

            <SplideSlide>
                <a href="#" className="splide__card common-card__card" aria-label="查看書籍">
                    <div className="splide__card--img common-card__card--img">
                        <img
                            src="https://placehold.co/180x280"
                            alt="《做伙來踅大稻埕》台文繪本套書 圖片"
                            width="180"
                            height="250"
                            loading="lazy"
                        />
                        <span>圖畫書類</span>
                    </div>
                    <div className="splide__card--text common-card__card--text">
                        <h3>
                            《做伙來踅大稻埕》台文繪本套書(《大稻埕動物園》台文繪本+《大稻埕ê山珍海味》台文迷你圖鑑)
                        </h3>
                        <p>
                            《大稻埕動物園》圖文：林小杯 /《大稻埕ê山珍海味》圖：吳睿哲
                        </p>
                    </div>
                </a>
            </SplideSlide>

            <SplideSlide>
                <a href="#" className="splide__card common-card__card" aria-label="查看書籍">
                    <div className="splide__card--img common-card__card--img">
                        <img
                            src="https://placehold.co/280x280"
                            alt="《做伙來踅大稻埕》台文繪本套書 圖片"
                            width="180"
                            height="250"
                            loading="lazy"
                        />
                        <span>圖畫書類</span>
                    </div>
                    <div className="splide__card--text common-card__card--text">
                        <h3>
                            《做伙來踅大稻埕》台文繪本套書(《大稻埕動物園》台文繪本+《大稻埕ê山珍海味》台文迷你圖鑑)
                        </h3>
                        <p>
                            《大稻埕動物園》圖文：林小杯 /《大稻埕ê山珍海味》圖：吳睿哲
                        </p>
                    </div>
                </a>
            </SplideSlide>

            <SplideSlide>
                <a href="#" className="splide__card common-card__card" aria-label="查看書籍">
                    <div className="splide__card--img common-card__card--img">
                        <img
                            src="https://placehold.co/150x250"
                            alt="《做伙來踅大稻埕》台文繪本套書 圖片"
                            width="180"
                            height="250"
                            loading="lazy"
                        />
                        <span>圖畫書類</span>
                    </div>
                    <div className="splide__card--text common-card__card--text">
                        <h3>
                            《做伙來踅大稻埕》台文繪本套書(《大稻埕動物園》台文繪本+《大稻埕ê山珍海味》台文迷你圖鑑)
                        </h3>
                        <p>
                            《大稻埕動物園》圖文：林小杯 /《大稻埕ê山珍海味》圖：吳睿哲
                        </p>
                    </div>
                </a>
            </SplideSlide>

            <SplideSlide>
                <a href="#" className="splide__card common-card__card" aria-label="查看書籍">
                    <div className="splide__card--img common-card__card--img">
                        <img
                            src="https://placehold.co/180x150"
                            alt="《做伙來踅大稻埕》台文繪本套書 圖片"
                            width="180"
                            height="250"
                            loading="lazy"
                        />
                        <span>圖畫書類</span>
                    </div>
                    <div className="splide__card--text common-card__card--text">
                        <h3>
                            《做伙來踅大稻埕》台文繪本套書(《大稻埕動物園》台文繪本+《大稻埕ê山珍海味》台文迷你圖鑑)
                        </h3>
                        <p>
                            《大稻埕動物園》圖文：林小杯 /《大稻埕ê山珍海味》圖：吳睿哲
                        </p>
                    </div>
                </a>
            </SplideSlide>

            <SplideSlide>
                <a href="#" className="splide__card common-card__card" aria-label="查看書籍">
                    <div className="splide__card--img common-card__card--img">
                        <img
                            src="https://placehold.co/280x280"
                            alt="《做伙來踅大稻埕》台文繪本套書 圖片"
                            width="180"
                            height="250"
                            loading="lazy"
                        />
                        <span>圖畫書類</span>
                    </div>
                    <div className="splide__card--text common-card__card--text">
                        <h3>
                            《做伙來踅大稻埕》台文繪本套書(《大稻埕動物園》台文繪本+《大稻埕ê山珍海味》台文迷你圖鑑)
                        </h3>
                        <p>
                            《大稻埕動物園》圖文：林小杯 /《大稻埕ê山珍海味》圖：吳睿哲
                        </p>
                    </div>
                </a>
            </SplideSlide>
        </Splide>
    );
}
