import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function SliderAside() {
    return (
        <Splide
            className="splide-aside" aria-label="側欄"
            options={{
                type: "slide",
                drag: 'free',
                pagination: false,
                arrows: false,
                autoWidth: true,
                mediaQuery: 'min',
                breakpoints: {
                    1023: {
                        destroy: true,
                    },
                },
            }}
        >
            <SplideSlide>
                <a href="#">
                    人文社科類
                </a>
            </SplideSlide>

            <SplideSlide>
                <a href="#">
                    叢書工具書類
                </a>
            </SplideSlide>

            <SplideSlide>
                <a href="#">
                    圖畫書類
                </a>
            </SplideSlide>

            <SplideSlide>
                <a href="#">
                    文學翻譯類
                </a>
            </SplideSlide>

            <SplideSlide>
                <a href="#">
                    文學類
                </a>
            </SplideSlide>

            <SplideSlide>
                <a href="#">
                    漫畫類
                </a>
            </SplideSlide>

            <SplideSlide>
                <a href="#">
                    自然科普類
                </a>
            </SplideSlide>

            <SplideSlide>
                <a href="#">
                    雜誌類
                </a>
            </SplideSlide>
        </Splide>
    );
}
