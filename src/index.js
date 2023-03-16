import React from 'react';
import ReactDOM from 'react-dom/client';

import AppHeader from "./components/AppHeader";
import Search from "./components/Search";
import List from "./components/List";
import TwoImage from "./components/TwoImages";
import ItemAddForm from "./components/ItemAdd Form";

class App extends React.Component {

    itemCount = 100;

    state = {
        todo: [
            this.createItem("Learn React.js"),
            this.createItem("Learn Redux.js"),
            this.createItem("Learn Node.js"),
            this.createItem("Learn Database"),
        ],
        term: "",
    }

    createItem(text) {
        return {
            text,
            id: this.itemCount++,
            important: false,
            done: false,
        }
    }

    createNewArr = (arr, id, propName) => {
        const idx = arr.findIndex(el => el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};
        const newArr = [
                ...arr.slice(0, idx),
                newItem,
                ...arr.slice(idx + 1),
            ]

        return newArr;
    }

    clickDone = (id) => {
        this.setState(({todo}) => {
            return {todo: this.createNewArr(todo, id, "done")}
        })
    }

    clickImport = (id) => {
        this.setState(({todo}) => {
            return {todo: this.createNewArr(todo, id, "important")}
        })
    }

    onDelete = (id) => {
        this.setState(({todo}) => {
            const idx = todo.findIndex(el => el.id === id);

            const before = todo.slice(0, idx);
            const after = todo.slice(idx + 1);
            const newTodo = [...before, ...after];

            return {todo: newTodo}
        })
    }

    onText = (text) => {
        const newItem = this.createItem(text);

        this.setState(({todo}) => {
            const newTodo = [...todo, newItem];
            return {todo: newTodo}
        })
    }

    searchItem = (items, term) => {
        if (!term.length) {
            return items;
        }
        return items.filter(item => {
            return item.text.toLowerCase().indexOf(term) > -1;
        })
    }

    searchTerm = text => {
        this.setState(() => {
            return {term: text};
        })
    }

    itemsStatus = (status = null) => {
        const items = [...this.state.todo];

        this.setState(({todo}) => {
            if (status === "done") {
                const allDone = todo.filter(item => item.done);
                return {todo: allDone, allTodo: items};
            }
            else if (status === "active") {
                const allActive = todo.filter(item => !item.done || item.important);
                return {todo: allActive, allTodo: items};
            }
            return {todo: this.state.allTodo};
        })
    }


    render() {
        const {todo, term} = this.state;
        const visItems = this.searchItem(todo, term);
        const doneCount = todo.filter(el => el.done).length;
        const activCount = todo.length - doneCount;

        return (
            <div className={"container mt-5"}>
                <div className="bg-info border rounded-4 p-3">
                    <AppHeader toDo={activCount} done={doneCount}/>
                    <Search searchTerm={this.searchTerm} itemsStatus={this.itemsStatus}/>
                    <List todo={visItems}
                          onDelete={this.onDelete}
                          clickDone={this.clickDone}
                          clickImport={this.clickImport}/>
                </div>
                <ItemAddForm onText={this.onText}/>
                <TwoImage/>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);