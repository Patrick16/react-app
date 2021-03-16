import cn from 'classnames';

import s from './menu.module.css';

const Menu = ({gotoHandler, isActiveMenu}) => {
    const style = isActiveMenu ? s.active : s.deactive;
    const gotoHome=()=>{
        gotoHandler && gotoHandler('home');
    };
    const gotoGame=()=>{
        gotoHandler && gotoHandler('game');
    };
    return (
        <div className={cn(s.menuContainer, style)}>
            <div className={s.overlay}/>
            <div className={s.menuItems}>
                <ul>
                    <li>
                        <a href="#" onClick={gotoHome}>
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={gotoGame}>
                            GAME
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Menu;