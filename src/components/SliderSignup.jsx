import { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function SliderSignup() {
    const step = [
        "下載檔案",
        "線上填表、列印表單",
        "檔案上傳",
        "完成線上報名、郵寄讀物及文件"
    ]
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
                {step.map((item, index) => (
                    <SplideSlide key={index} onClick={() => handleSplide(index)}>
                        {item}
                    </SplideSlide>
                ))}
            </Splide>

            <div className="signup__wrapper">
                {/*可在class添加"mb-10"、"mb-20"更改"margin-botton"*/}
                <p className="mb-10">活動簡章：</p>

                <ul className="mb-10">
                    <li data-order="(1)">
                        採網路報名，請於線上報名填表前，先詳閱活動簡章及注意事項。
                    </li>
                    <li data-order="(2)">
                        下截【表二：參選讀物資料】表格檔案，填妥後再開始進行線上報名步驟。
                    </li>
                </ul>

                <div className="line"></div>

                <p className="blue bold mb-10">
                    報名前，請先下载以下表格檔案，填妥後，進行以下報名步驟
                </p>

                <a href="/logo.png" download="參選讀物資料" className="file mb-20">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="20.205"
                        viewBox="0 0 15 20.205"
                    >
                        <path
                            id="Path_16276"
                            data-name="Path 16276"
                            d="M3.333,16.837h.833V16H3.333Zm1.667,0h6.667V16H5ZM3.333,14.312h.833V13.47H3.333Zm1.667,0h6.667V13.47H5ZM3.333,11.786h.833v-.842H3.333Zm1.667,0h6.667v-.842H5ZM3.333,9.261h.833V8.419H3.333ZM5,9.261h6.667V8.419H5ZM3.333,6.735h.833V5.893H3.333ZM5,6.735h6.667V5.893H5ZM1.667,1.684H10V4.157h3.333V18.468H1.667ZM0,0V20.2H15V3.367L11.615,0Z"
                            fill="#fff"></path>
                    </svg>

                    <span>表二：參選讀物資料</span>
                </a>

                <ul>
                    <li data-order="(1)">
                        請自行依據參選讀物之數量，增加檔案表格中之sheet工作表。<br />
                        <span className="example">例如：欲提交10本參選讀物，請於檔案中，增加10個sheet工作表。</span>
                    </li>
                    <li data-order="(2)">
                        上傳檔案命名方式：申請人姓名（或名稱）_表二参選讀物資料。<br />
                        <span className="example">例如：聯合線上股份有限公司_表二參選讀物資料。</span>
                    </li>
                    <li data-order="(3)">
                        <button className="btn file" type="button">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="20.205"
                                viewBox="0 0 15 20.205"
                            >
                                <path
                                    id="Path_16276"
                                    data-name="Path 16276"
                                    d="M3.333,16.837h.833V16H3.333Zm1.667,0h6.667V16H5ZM3.333,14.312h.833V13.47H3.333Zm1.667,0h6.667V13.47H5ZM3.333,11.786h.833v-.842H3.333Zm1.667,0h6.667v-.842H5ZM3.333,9.261h.833V8.419H3.333ZM5,9.261h6.667V8.419H5ZM3.333,6.735h.833V5.893H3.333ZM5,6.735h6.667V5.893H5ZM1.667,1.684H10V4.157h3.333V18.468H1.667ZM0,0V20.2H15V3.367L11.615,0Z"
                                    fill="#fff"></path>
                            </svg>

                            <span>表二：填表範例下載</span>
                        </button>
                    </li>
                </ul>
            </div>

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

