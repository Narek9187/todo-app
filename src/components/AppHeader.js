import "./app-header.css";

const AppHeader = ({toDo, done}) => {
  return (
      <div className={"app-header d-flex"}>
        <h1 className={"text-center text-light"}>ToDo List</h1>
        <h2>{toDo} ակտիվ ունենք և {done} done</h2>
      </div>
  )
}

export default AppHeader;