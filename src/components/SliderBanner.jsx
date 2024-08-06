import { Splide, SplideSlide } from "@splidejs/react-splide";

function bgImgStyle(src) {
    return {
        "--bg-img": `url('${src}')`,
    };
}

export default function SliderBanner() {
    return (
        <>
            <Splide
                className="splide-banner full-container" aria-label="banner"
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
                    <img className="splide__img" src="https://placehold.co/1280x600" alt="" width="1280" height="600" />
                    <div className="splide__bg" style={bgImgStyle("https://placehold.co/1280x600")}></div>
                </SplideSlide>

                <SplideSlide>
                    <img className="splide__img" src="https://placehold.co/1500x600" alt="" width="1500" height="600" />
                    <div className="splide__bg" style={bgImgStyle("https://placehold.co/1500x600")}></div>
                </SplideSlide>

                <SplideSlide>
                    <img className="splide__img" src="https://placehold.co/1280x800" alt="" width="1280" height="800" />
                    <div className="splide__bg" style={bgImgStyle("https://placehold.co/1280x800")}></div>
                </SplideSlide>

                <SplideSlide>
                    <img className="splide__img" src="https://placehold.co/1500x800" alt="" width="1500" height="800" />
                    <div className="splide__bg" style={bgImgStyle("https://placehold.co/1500x800")}></div>
                </SplideSlide>

                <SplideSlide>
                    <img className="splide__img" src="https://placehold.co/1080x600" alt="" width="1080" height="600" />
                    <div className="splide__bg" style={bgImgStyle("https://placehold.co/1080x600")}></div>
                </SplideSlide>

                <SplideSlide>
                    <img className="splide__img" src="https://placehold.co/1280x400" alt="" width="1280" height="400" />
                    <div className="splide__bg" style={bgImgStyle("https://placehold.co/1280x400")}></div>
                </SplideSlide>

                <SplideSlide>
                    <img className="splide__img" src="https://placehold.co/1080x400" alt="" width="1080" height="400" />
                    <div className="splide__bg" style={bgImgStyle("https://placehold.co/1080x400")}></div>
                </SplideSlide>
            </Splide>
        </>
    );
}
