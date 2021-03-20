import {useHistory} from 'react-router-dom';

import s from './header.module.css';

const Header = ({title = "This is title", descr = "This is Description!"}) => {
    const history = useHistory();
    const buttonHandler=()=>{
        history.push('/game');
    }
    return (
        <header className={s.root}>
            <div className={s.forest}></div>
            <div className={s.silhouette}></div>
            <div className={s.moon}></div>
            <div className={s.container}>
                <h1>{title}</h1>
                <p>{descr}</p>
                <button onClick={buttonHandler}>
                    Start game
                </button>
            </div>
        </header>
    );
}
export default Header;