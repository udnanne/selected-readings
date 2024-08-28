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
            {props.type.includes("selection") ?
                <SplideSlide>
                    <a href="/selection" className={props.type === "selection" ? "active" : ""}>
                        評選報告
                    </a>
                </SplideSlide>
                : null
            }

            {props.list.map(({ url, title }, index) => (
                (index === 0 && props.type == "recommend") ?
                    <SplideSlide key={index}>
                        <a href={`${props.url}${url}`} className={
                            window.location.search.split("?")[1] === undefined || url.split("?")[1] === window.location.search.split("?")[1] ? "active" : ""
                        }>
                            {title}
                        </a>
                    </SplideSlide>
                    :
                    <SplideSlide key={index}>
                        <a href={`${props.url}${url}`} className={
                            (url.split("?")[1] === window.location.search.split("?")[1]) ? "active" : ""
                        }>
                            {title}
                        </a>
                    </SplideSlide>
            ))}
        </Splide>
    );
}
