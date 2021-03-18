import Game from "./components/routes/GamePage";
import Home from "./components/routes/HomePage";
import {useState} from 'react';

import './App.css';

const App = () => {
    const [page, setPage]= useState('home');
    const buttonHandler = (page) =>{
        setPage(page);
    }
    switch (page) {
        case "home":
            return <Home homeButtonHandler={buttonHandler} initState={false}/>;
        case "game":
            return <Game gameButtonHandler={buttonHandler}/>;
        default:
            return <Home homeButtonHandler={buttonHandler} initState={false}/>;
    }
};

export default App;
