export default function FillterSearch(props) {
    const url = new URL(window.location.href);
    const type = url.searchParams.get('type');

    const isString = typeof props.search === "string";

    if (isString) {
        return props.search;
    } else {
        return props.search.find(item => item.url.includes(`type=${type}`))?.title || props.search[0].title
    }
}
