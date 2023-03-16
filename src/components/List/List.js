import ListItem from "./ListItem";
import "./list.css";

const List = ({todo, onDelete, clickDone, clickImport}) => {
    const elem = todo.map(item => {
        const {id, ...itemProps} = item;
        return (
            <li className={"list-group-item w-50 mx-auto px-0"} key={id}>
                <ListItem {...itemProps}
                          onDelete={() => onDelete(id)}
                          clickDone={() => clickDone(id)}
                          clickImport={() => clickImport(id)}/>
            </li>
        )
    })
  return (
    <ul className={"list-unstyled text-center h4 text-light mt-5 todo-list"}>
        {elem}
    </ul>
  )
}

export default List;