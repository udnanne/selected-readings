import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function SliderActivities(props) {
    return (
        <Splide
            className="splide-activities" aria-label="年份"
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
            {props.years.map((item, index) => (
                (index === 0) ?
                    <SplideSlide key={index}>
                        <a href="#" className="active">
                            {item}年度
                        </a>
                    </SplideSlide>
                    : <SplideSlide key={index}>
                        <a href="#">
                            {item}年度
                        </a>
                    </SplideSlide>
            ))}
        </Splide>
    );
}
