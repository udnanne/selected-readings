import { useRef, useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function SliderSignup(props) {
    const splideRef = useRef(null);
    const [current, setCurrent] = useState(0);

    const handleSplide = (id) => {
        if (splideRef.current) { splideRef.current.go(id); }
    };

    const handleBtn = () => {
        if (splideRef.current && current < props.list.length - 1) {
            splideRef.current.go('+${1}');
        }
    };

    function handleWrapper(id) {
        switch (id) {
            case 0:
                return props.download;
            case 1:
                return props.fill;
            case 2:
                return props.upload;
            case 3:
                return props.send;
            case 4:
                return props.revise;
            default:
                return props.download;
        }
    }

    useEffect(() => {
        handleWrapper(current);
    }
        , [current]);

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
                        1023: {
                            drag: 'free',
                        },
                    },
                }}
                ref={splideRef}
                onActive={(splide) => setCurrent(splide.index)}
            >
                {props.list.map((item, index) => (
                    <SplideSlide key={index} onClick={() => handleSplide(index)}>
                        <span data-order={index + 1}></span>{item.title}
                    </SplideSlide>
                ))}
            </Splide>

            {handleWrapper(current)}

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

