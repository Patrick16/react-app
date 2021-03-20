import cn from 'classnames';
import {Link} from 'react-router-dom';

import s from './menu.module.css';

const MENU = [
    {
        tittle: 'HOME',
        to: '/',
    },
    {
        tittle: 'GAME',
        to: '/game',
    },
    {
        tittle: 'ABOUT',
        to: '/about',
    },
    {
        tittle: 'CONTACT',
        to: '/contact',
    }
];
const Menu = ({isActiveMenu, closeMenuHandler}) => {
    const closeMenu=()=>{
        closeMenuHandler && closeMenuHandler();
    }
    return (
        <div className={cn(s.menuContainer,
            {
                [s.active]: isActiveMenu === true,
                [s.deactive]: isActiveMenu === false
            })}>
            <div className={s.overlay}/>
            <div className={s.menuItems}>
                <ul>
                    {
                        MENU.map(({tittle, to}, index) => (
                            <li key={index}>
                                <Link to={to} onClick={closeMenu}>
                                    {tittle}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};
export default Menu;