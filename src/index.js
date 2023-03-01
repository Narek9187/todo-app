import React from 'react';
import ReactDOM from 'react-dom/client';

const AppHeader = () => {
  return <h1 className={"text-center text-light"}>ToDo List</h1>
}

const Search = () => {
  return (
      <div className={"w-50 mx-auto my-4 input-group"}>
          <input className={"form-control"} placeholder='Search...'/>
          <button className={"btn btn-outline-secondary bg-danger text-light border"}>Button</button>
      </div>
  )
}

const List = () => {
  return (
    <ul className={"list-unstyled text-center h4 text-light mt-5"}>
      <li className={"justify-content-between d-flex mx-auto w-50 my-3"}>
          <div>Learn react</div>
          <button className={"btn btn-outline-secondary bg-warning text-light"}>delete</button>
      </li>
      <li className={"justify-content-between d-flex mx-auto w-50 my-3"}>
          <div>Learn redux</div>
          <button className={"btn btn-outline-secondary bg-warning text-light"}>delete</button>
      </li>
        <li className={"justify-content-between d-flex mx-auto w-50 my-3"}>
          <div>Create app</div>
          <button className={"btn btn-outline-secondary bg-warning text-light"}>delete</button>
      </li>
    </ul>
  )
}

const App = () => {
  return (
    <div className={"container mt-5 pt-5 bg-primary border rounded-4"}>
      <AppHeader/>
      <Search/>
      <List/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);