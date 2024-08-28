import { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function SliderSignup(props) {
    const mainRef = useRef(null);
    const handleSplide = (id) => { if (mainRef.current) { mainRef.current.go(id); } };
    const handleBtn = () => { if (mainRef.current) { mainRef.current.go('+${1}'); } };

    return (
        <>
            <Splide
                className="splide-signup full-container" aria-label="報名專區"
                options={{
                    type: "slide",
                    drag: false,
                    autoWidth: true,
                    arrows: false,
                    pagination: false,
                    breakpoints: {
                        767: {
                            drag: 'free',
                        },
                    },
                }}
                ref={mainRef}
            >
                {props.list.map((item, index) => (
                    <SplideSlide key={index} onClick={() => handleSplide(index)}>
                        {item}
                    </SplideSlide>
                ))}
            </Splide>

            {props.wrapper}

            <button className="btn next" type="button" onClick={() => handleBtn()}>
                <span>下一步</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7.879"
                    height="13.394"
                    viewBox="0 0 7.879 13.394"
                >
                    <path
                        id="Path_16277"
                        data-name="Path 16277"
                        d="M6.1,0,0,5.748,6.1,12l.35-.322L.672,5.762,6.42.323Z"
                        transform="translate(7.166 12.697) rotate(180)"
                        fill="#3b84b7"
                        stroke="#3b84b7"
                        strokeLinecap="round"
                        strokeWidth="1">
                    </path>
                </svg>
            </button>
        </>
    );
}

