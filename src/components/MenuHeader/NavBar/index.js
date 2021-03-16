import cn from 'classnames';
import {useState} from 'react';

import s from './navbar.module.css';

const NavBar = ({navBarButtonHandler, initState}) => {
    const [currentState, setState] = useState(initState);
    const style = initState ? s.active : s.menuButton;
    const handleMenuButton = () => {
        setState(!currentState);
        navBarButtonHandler && navBarButtonHandler(currentState);
    };
    return (
        <nav className={s.root}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <a className={cn(s.menuButton, style)} onClick={handleMenuButton}>
                    <span/>
                </a>
            </div>
        </nav>
    );
};
export default NavBar;