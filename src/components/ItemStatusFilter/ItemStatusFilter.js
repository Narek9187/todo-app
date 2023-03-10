const ItemStatusFilter = () => {
    return (
        <div className={"btn-group"}>
            <button className={"btn btn-primary"}>All</button>
            <button className={"btn btn-success mx-1"}>Active</button>
            <button className={"btn btn-danger"}>Done</button>
        </div>
    )
}

export default ItemStatusFilter;