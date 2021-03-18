import Game from "./components/routes/GamePage";
import Home from "./components/routes/HomePage";
import About from "./components/routes/AboutPage";
import Contact from "./components/routes/ContactPage";
import {Route, Switch, useRouteMatch, Redirect} from 'react-router-dom';
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/FooterBlock";
import NotFound from "./components/routes/NotFoundPage";
import cn from 'classnames';
import {useState} from "react";

import s from './app.module.css';

const App = () => {
    const [currentState, setState] = useState(false);
    const menuStateHandle = () => {
        setState(prev => !prev);
    }
    const match = useRouteMatch("/");
    return (
        <Switch>
            <Route>
                <>
                    <MenuHeader bgActive={!match.isExact} currentState={currentState} menuStateHandle={menuStateHandle}/>
                    <div className={cn(s.wrap, {[s.isHomePage]:match.isExact})}>
                        <Switch>
                            <Route path="/404" component={NotFound}/>
                            <Route path={["/", "/home"]} exact component={Home}/>
                            <Route path="/game" component={Game}/>
                            <Route path="/about" component={About}/>
                            <Route path="/contact" component={Contact}/>
                            <Route render={
                                ()=>(
                                    <Redirect to="/404"/>
                                    )}/>
                        </Switch>
                    </div>
                    <Footer/>
                </>
            </Route>
            <Route render={()=>{
                <Redirect to="/404"/>
            }}/>
        </Switch>
    );
}

export default App;
