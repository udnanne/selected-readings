export default function SelectorBtn(props) {
    const url = new URL(window.location.href);
    const type = url.searchParams.get('type');

    const isString = typeof props.catebtn === "string";

    if (isString) {
        return <span>{props.catebtn}</span>;
    } else {
        return (
            <span>
                {props.catebtn.find(item => item.url.includes(`type=${type}`))?.title || props.catebtn[0].title}
            </span>
        )
    }
}
