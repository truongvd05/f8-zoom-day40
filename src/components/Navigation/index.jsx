import { NavLink } from "react-router-dom";
import style from './Navigation.module.scss'

function Navigation() {
    const nav = [
        {
            link: "/",
            title: "Home",
        },
    ]
    return (
        <ul className={style.container}>
            {nav.map((item, index) => (
                <li key={index}>
                    <NavLink to={item.link}>{item.title}</NavLink>
                    <a target="_blank" href="redux.html">Redux Demo</a>
                </li>
            ))}
        </ul>
    )
}

export default Navigation;