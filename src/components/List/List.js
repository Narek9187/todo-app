import ListItem from "./ListItem";
import "./list.css";

const List = ({todo}) => {
    const elem = todo.map(item => {
        const {id, ...itemProps} = item;
        return (
            <li className={"list-group-item w-50 mx-auto px-0"} key={id}><ListItem {...itemProps}/></li>
        )
    })
  return (
    <ul className={"list-unstyled text-center h4 text-light mt-5 todo-list"}>
        {elem}
    </ul>
  )
}

export default List;