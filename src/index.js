import React from 'react';
import ReactDOM from 'react-dom/client';

import AppHeader from "./components/AppHeader";
import Search from "./components/Search";
import List from "./components/List";
import TwoImage from "./components/TwoImages";


const App = () => {
    const arr = [
        {text: "text1", important: true, id: 1},
        {text: "text2", important: false, id: 2},
        {text: "text3", important: false, id: 3},
        {text: "text4", important: true, id: 4},
    ]
    return (
        <div className={"container mt-5"}>
            <div className="bg-info border rounded-4 p-3">
                <AppHeader toDo={3} done={2}/>
                <Search/>
                <List todo={arr}/>
            </div>
            <TwoImage/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);