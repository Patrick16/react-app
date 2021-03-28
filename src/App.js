import Home from "./routes/HomePage";
import About from "./routes/AboutPage";
import Contact from "./routes/ContactPage";
import GamePage from "./routes/GamePage";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/FooterBlock";
import NotFound from "./routes/NotFoundPage";
import {Route, Switch, Redirect, useLocation} from 'react-router-dom';
import cn from 'classnames';
import {useState} from "react";

import s from './app.module.css';
import {FireBaseContext} from "./context/fireBaseContext";
import Firebase from  './service/firebase';

const App = () => {
    const [currentState, setState] = useState(false);
    const menuStateHandle = () => {
        setState(prev => !prev);
    }
    const location = useLocation();
    let isHome = (location.pathname === '/' || location.pathname === '/home');
    return (
        <FireBaseContext.Provider value={new Firebase()}>
            <Switch>
                <Route>
                    <>
                        <MenuHeader bgActive={!isHome} currentState={currentState} menuStateHandle={menuStateHandle}/>
                        <div className={cn(s.wrap, {[s.isHomePage]: isHome})}>
                            <Switch>
                                <Route path="/404" component={NotFound}/>
                                <Route path={["/", "/home"]} exact component={Home}/>
                                <Route path="/game" component={GamePage}/>
                                <Route path="/about" component={About}/>
                                <Route path="/contact" component={Contact}/>
                                <Route render={
                                    () => (
                                        <Redirect to="/404"/>
                                    )}/>
                            </Switch>
                        </div>
                        <Footer/>
                    </>
                </Route>
            </Switch>
        </FireBaseContext.Provider>
    );
}

export default App;
