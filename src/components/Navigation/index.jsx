import { NavLink } from "react-router-dom";
import style from './Navigation.module.scss'

function Navigation() {
    const nav = [
        {
            link: "/",
            title: "Home",
        },
        {
            link: "http://localhost:5173/f8-zoom-day40/redux.html",
            title: "redux core",
        },
    ]
    return (
        <ul className={style.container}>
            {nav.map((item, index) => (
                <li key={index}>
                    <a href={item.link}>{item.title}</a>
                </li>
            ))}
        </ul>
    )
}

export default Navigation;