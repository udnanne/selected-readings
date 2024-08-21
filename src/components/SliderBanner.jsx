import { Splide, SplideSlide } from "@splidejs/react-splide";

function bgImgStyle(src) {
    return {
        "--bg-img": `url('${src}')`,
    };
}

export default function SliderBanner() {
    return (
        <Splide
            className="splide-banner" aria-label="橫幅"
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
                <img className="splide__img" src="https://placehold.co/1280x600" alt="首頁大圖1" width="1280" height="600" loading="lazy" fetchpriority="high" />
                {/*<div className="splide__bg" style={bgImgStyle("https://placehold.co/1280x600")}>
                    <img src="https://placehold.co/1280x600" alt="" width="0" height="0" />
                </div>*/}
                <img className="splide__bg" src="https://placehold.co/1280x600" alt="首頁背景1" width="1920" height="600" loading="lazy" />
            </SplideSlide>

            <SplideSlide>
                <img className="splide__img" src="https://placehold.co/1500x600" alt="首頁大圖2" width="1280" height="600" loading="lazy" />
                {/*<div className="splide__bg" style={bgImgStyle("https://placehold.co/1500x600")}>
                    <img src="https://placehold.co/1280x600" alt="" width="0" height="0" />
                </div>*/}
                <img className="splide__bg" src="https://placehold.co/1280x600" alt="首頁背景2" width="1920" height="600" loading="lazy" />
            </SplideSlide>

            <SplideSlide>
                <img className="splide__img" src="https://placehold.co/1280x800" alt="首頁大圖3" width="1280" height="600" loading="lazy" />
                {/*<div className="splide__bg" style={bgImgStyle("https://placehold.co/1280x800")}>
                    <img src="https://placehold.co/1280x600" alt="" width="0" height="0" />
                </div>*/}
                <img className="splide__bg" src="https://placehold.co/1280x600" alt="首頁背景3" width="1920" height="600" loading="lazy" />
            </SplideSlide>

            <SplideSlide>
                <img className="splide__img" src="https://placehold.co/1500x800" alt="首頁大圖4" width="1280" height="600" loading="lazy" />
                {/*<div className="splide__bg" style={bgImgStyle("https://placehold.co/1500x800")}>
                    <img src="https://placehold.co/1280x600" alt="" width="0" height="0" />
                </div>*/}
                <img className="splide__bg" src="https://placehold.co/1280x600" alt="首頁背景4" width="1920" height="600" loading="lazy" />
            </SplideSlide>

            <SplideSlide>
                <img className="splide__img" src="https://placehold.co/1080x600" alt="首頁大圖5" width="1280" height="600" loading="lazy" />
                {/*<div className="splide__bg" style={bgImgStyle("https://placehold.co/1080x600")}>
                    <img src="https://placehold.co/1280x600" alt="" width="0" height="0" />
                </div>*/}
                <img className="splide__bg" src="https://placehold.co/1280x600" alt="首頁背景5" width="1920" height="600" loading="lazy" />
            </SplideSlide>

            <SplideSlide>
                <img className="splide__img" src="https://placehold.co/1280x400" alt="首頁大圖6" width="1280" height="600" loading="lazy" />
                <div className="splide__bg" style={bgImgStyle("https://placehold.co/1280x400")}>
                    <img src="https://placehold.co/1280x600" alt="" width="0" height="0" />
                </div>
                <img className="splide__bg" src="https://placehold.co/1280x600" alt="首頁背景6" width="1920" height="600" loading="lazy" />
            </SplideSlide>

            <SplideSlide>
                <img className="splide__img" src="https://placehold.co/1080x400" alt="首頁大圖7" width="1280" height="600" loading="lazy" />
                {/*<div className="splide__bg" style={bgImgStyle("https://placehold.co/1080x400")}>
                    <img src="https://placehold.co/1280x600" alt="" width="0" height="0" />
                </div>*/}
                <img className="splide__bg" src="https://placehold.co/1280x600" alt="首頁背景7" width="1920" height="600" loading="lazy" />
            </SplideSlide>
        </Splide>
    );
}
