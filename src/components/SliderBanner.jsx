import { Splide, SplideSlide } from "@splidejs/react-splide";

function bgImgStyle(src) {
    return {
        "--bg-img": `url('${src}')`,
    };
}

export default function SliderBanner(props) {
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
            {
                props.list.map(({ img, alt }, index) => (
                    <SplideSlide key={index}>
                        <img className="splide__img" src={img} alt={alt} width="1280" height="600" loading="lazy" fetchpriority={
                            index === 0 ? "high" : "auto"
                        } />
                        <div className="splide__bg" style={bgImgStyle(img)}></div>
                    </SplideSlide>
                ))
            }
        </Splide>
    );
}
