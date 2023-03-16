const ItemStatusFilter = ({itemsStatus}) => {
    return (
        <div className={"btn-group"}>
            <button className={"btn btn-primary"} onClick={() => itemsStatus()}>All</button>
            <button className={"btn btn-success mx-1"} onClick={() => itemsStatus("active")}>Active</button>
            <button className={"btn btn-danger"} onClick={() => itemsStatus("done")}>Done</button>
        </div>
    )
}

export default ItemStatusFilter;