import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function SliderAside(props) {
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
            {props.selection ?
                <SplideSlide>
                    <a href="/selection" className={props.active ? "" : "active"}>
                        評選報告
                    </a>
                </SplideSlide>
                : null
            }

            {props.recommend ? props.list.map((item, index) => (
                (index === 0) ?
                    <SplideSlide key={index}>
                        <a href="#" className="active">
                            {item}
                        </a>
                    </SplideSlide>
                    :
                    <SplideSlide key={index}>
                        <a href="#">
                            {item}
                        </a>
                    </SplideSlide>
            )) : props.list.map((item, index) => (
                (index === 0) ?
                    <SplideSlide key={index}>
                        <a href={props.selection ? "/selection-category" : "/books-category"} className={props.active ? "active" : ""}>
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
