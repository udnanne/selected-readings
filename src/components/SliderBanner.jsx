import { Splide, SplideSlide } from "@splidejs/react-splide";

function bgImgStyle(src) {
    return {
        "--bg-img": `url('${src}')`,
    };
}

export default function SliderBanner() {
    return (
        <Splide
            className="splide-banner full-container" aria-label="橫幅"
            options={{
                type: "loop",
                breakpoints: {
                    767: {
                        arrows: false,
                    },
                },
            }}
        >
            <SplideSlide>
                <img className="splide__img" src="https://placehold.co/1280x600" alt="首頁大圖1" width="1280" height="600" fetchpriority="high" />
                <div className="splide__bg" style={bgImgStyle("https://placehold.co/1280x600")}></div>
            </SplideSlide>

            <SplideSlide>
                <img className="splide__img" src="https://placehold.co/1500x600" alt="首頁大圖2" width="1280" height="600" fetchpriority="high" />
                <div className="splide__bg" style={bgImgStyle("https://placehold.co/1500x600")}></div>
            </SplideSlide>

            <SplideSlide>
                <img className="splide__img" src="https://placehold.co/1280x800" alt="首頁大圖3" width="1280" height="600" fetchpriority="high" />
                <div className="splide__bg" style={bgImgStyle("https://placehold.co/1280x800")}></div>
            </SplideSlide>

            <SplideSlide>
                <img className="splide__img" src="https://placehold.co/1500x800" alt="首頁大圖4" width="1280" height="600" fetchpriority="high" />
                <div className="splide__bg" style={bgImgStyle("https://placehold.co/1500x800")}></div>
            </SplideSlide>

            <SplideSlide>
                <img className="splide__img" src="https://placehold.co/1080x600" alt="首頁大圖5" width="1280" height="600" fetchpriority="high" />
                <div className="splide__bg" style={bgImgStyle("https://placehold.co/1080x600")}></div>
            </SplideSlide>

            <SplideSlide>
                <img className="splide__img" src="https://placehold.co/1280x400" alt="首頁大圖6" width="1280" height="600" fetchpriority="high" />
                <div className="splide__bg" style={bgImgStyle("https://placehold.co/1280x400")}></div>
            </SplideSlide>

            <SplideSlide>
                <img className="splide__img" src="https://placehold.co/1080x400" alt="首頁大圖7" width="1280" height="600" fetchpriority="high" />
                <div className="splide__bg" style={bgImgStyle("https://placehold.co/1080x400")}></div>
            </SplideSlide>
        </Splide>
    );
}
