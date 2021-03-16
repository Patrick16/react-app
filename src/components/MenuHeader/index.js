import Menu from "./Menu";
import NavBar from "./NavBar";
import {useState} from "react";

const MenuHeader = ({gotoHandler, initState}) => {
    const [currentState, setState] = useState(initState);
    const navBarButtonHandler = () => {
        setState(prev => !prev);
    }
    const menuButtonHandler = (page) => {
        gotoHandler && gotoHandler(page);
    }
    return (
        <>
            <NavBar navBarButtonHandler={navBarButtonHandler} initState={currentState}/>
            <Menu gotoHandler={menuButtonHandler} isActiveMenu={currentState}/>
        </>
    );
};

export default MenuHeader;