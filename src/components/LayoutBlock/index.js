import cn from 'classnames';

import s from "./layout.module.css";

const Layout = ({title = "Title", urlBg, colorBg, children}) => {
    const backgroundStyle = {
        backgroundImage: `url(${urlBg})`,
        backgroundColor: colorBg
    }
    return (
        <section
            style={backgroundStyle}
            className={s.root}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={cn(s.desc, s.full)}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    );
}
export default Layout;