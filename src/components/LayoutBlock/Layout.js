import React from "react";
import s from "./layout.module.css";

const Layout =({title="Title", descr="Description", urlBg, colorBg}) =>{
    const  backgroundImage = {
        backgroundImage:urlBg
    }
    const  backgroundColor = {
        backgroundColor:colorBg
    }
    return(
        <section style={
            urlBg ? backgroundImage : backgroundColor
        } className={s.root}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={s.desc.full}>
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
    );
}
export default Layout;