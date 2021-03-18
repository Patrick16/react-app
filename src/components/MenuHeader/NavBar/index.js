import cn from 'classnames';

import s from './navbar.module.css';

const NavBar = ({navBarButtonHandler, isActive, bgActive = false}) => {
    const styleButton = isActive ? s.active : s.menuButton;
    const handleMenuButton = () => {
        navBarButtonHandler && navBarButtonHandler();
    };
    return (
        <nav className={cn(s.root,{[s.bgActive]:bgActive})}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <a className={cn(s.menuButton, styleButton)} onClick={handleMenuButton}>
                    <span/>
                </a>
            </div>
        </nav>
    );
};
export default NavBar;