import cn from 'classnames';

import s from './navbar.module.css';

const NavBar = ({navBarButtonHandler, initState}) => {
    const style = initState ? s.active : s.menuButton;
    const handleMenuButton = () => {
        navBarButtonHandler && navBarButtonHandler();
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