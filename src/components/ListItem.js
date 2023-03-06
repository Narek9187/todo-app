import "./list-item.css";

const ListItem = ({text, important}) => {

    const style = {
        color: important ? "red" : "blue"
    }

    return (
        <span className={"list-item"}>
            <span className={"list-item-label"} style={style}>{text}</span>

            <button className={"btn btn-outline-success btn-sm"}>
                <span className={"fa fa-exclamation"}></span>
            </button>

            <button className={"btn btn-outline-danger btn-sm"}>
                <span className={"fa fa-trash"}></span>
            </button>
        </span>
    )
}

export default ListItem;