import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function SliderAside(props) {
    const defaultList = [
        "人文社科類",
        "叢書工具書類",
        "圖畫書類",
        "文學翻譯類",
        "文學類",
        "漫畫類",
        "自然科普類",
        "雜誌類",
    ];

    const recommendList = [
        "第45次推介",
        "第44次推介",
        "第43次推介",
        "第42次推介",
        "第41次推介",
    ]

    console.log(props.default);
    console.log(props.recommend);

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
                    1024: {
                        destroy: true,
                    },
                },
            }}
        >
            {props.recommend ? recommendList.map((item, index) => (
                (index === 0) ?
                    <SplideSlide key={index}>
                        <a href="#" className={props.active ? "active" : ""}>
                            {item}
                        </a>
                    </SplideSlide>
                    :
                    <SplideSlide key={index}>
                        <a href="#">
                            {item}
                        </a>
                    </SplideSlide>
            )) : defaultList.map((item, index) => (
                (index === 0) ?
                    <SplideSlide key={index}>
                        <a href="#" className={props.active ? "active" : ""}>
                            {item}
                        </a>
                    </SplideSlide>
                    :
                    <SplideSlide key={index}>
                        <a href="#">
                            {item}
                        </a>
                    </SplideSlide>
            ))}
        </Splide>
    );
}
