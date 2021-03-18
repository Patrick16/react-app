import Menu from "./Menu";
import NavBar from "./NavBar";

const MenuHeader = ({menuStateHandle, currentState, bgActive}) => {
    const navBarButtonHandler = () => {
        menuStateHandle && menuStateHandle();
    }
    return (
        <>
            <NavBar navBarButtonHandler={navBarButtonHandler} isActive={currentState} bgActive={bgActive}/>
            <Menu isActiveMenu={currentState} closeMenuHandler={navBarButtonHandler}/>
        </>
    );
};

export default MenuHeader;