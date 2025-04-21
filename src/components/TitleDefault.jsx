export default function TitleDefault(props) {
    const url = new URL(window.location.href);
    const type = url.searchParams.get('type');

    const isObject = typeof props.title[0] === 'object';

    if (isObject) {
        const currentType = type ? parseInt(type) : 1;
        const currentItem = props.title.find(item => item.url.includes(`type=${currentType}`));
        return <span>{currentItem ? currentItem.title : props.title[0].title}</span>;
    } else {
        return <span>{props.title[0]}</span>;
    }
}
