export default function Breadcrumb(props) {
    const url = new URL(window.location.href);
    const type = url.searchParams.get('type');
    
    return props.list.find((item) => item.url.includes(`type=${type}`))?.title || props.list[0].title;
}
