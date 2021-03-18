import Menu from "./Menu";
import NavBar from "./NavBar";
import {useState} from "react";

const MenuHeader = ({gotoHandler, bgActive}) => {
    const [currentState, setState] = useState(null);
    const navBarButtonHandler = () => {
        setState(prev => !prev);
    }
    const menuButtonHandler = (page) => {
        gotoHandler && gotoHandler(page);
    }
    return (
        <>
            <NavBar navBarButtonHandler={navBarButtonHandler} isActive={currentState} bgActive={bgActive}/>
            <Menu gotoHandler={menuButtonHandler} isActiveMenu={currentState}/>
        </>
    );
};

export default MenuHeader;