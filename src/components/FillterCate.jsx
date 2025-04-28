export default function FillterCate(props) {
    const url = new URL(window.location.href);
    const type = url.searchParams.get('type');

    const isString = typeof props.cate === "string";

    if (isString) {
        return props.cate;
    } else {
        return props.cate.find(item => item.url.includes(`type=${type}`))?.title || props.cate[0].title
    }
}
