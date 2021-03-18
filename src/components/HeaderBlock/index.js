import s from './header.module.css';

const Header = ({onClickHandler, title = "This is title", descr = "This is Description!"}) => {
    const buttonHandler=()=>{
        onClickHandler && onClickHandler('game');
    }
    return (
        <header className={s.root}>
            <div className={s.forest}></div>
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