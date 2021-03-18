import cn from 'classnames';

import s from './menu.module.css';

const MENU = [
    {
        tittle: 'HOME',
        to: '/#',
    },
    {
        tittle: 'GAME',
        to: '/#',
    },
    {
        tittle: 'ABOUT',
        to: '/#',
    },
    {
        tittle: 'CONTACT',
        to: '/#',
    }
];
const Menu = ({gotoHandler, isActiveMenu}) => {
    const gotoHome = () => {
        gotoHandler && gotoHandler('home');
    };
    const gotoGame = () => {
        gotoHandler && gotoHandler('game');
    };
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
                                <a href={to}>
                                    {tittle}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};
export default Menu;