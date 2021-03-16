import s from './game.module.css';

const Game = ({gameButtonHandler}) => {
    const gotoHomeButtonHandler = ()=> {
        gameButtonHandler && gameButtonHandler('home');
    }

    return (
        <>
            <header className={s.root}>
                <div className={s.container}>
                    <h1>Game page.</h1>
                    <button onClick={gotoHomeButtonHandler}>
                        Go home
                    </button>
                </div>
            </header>
        </>
    );
}

export default Game;