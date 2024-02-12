import Link from "next/link"



import css from './Header.module.css'
const Header = () => {
    return (
        <header className={css.section}>
            <div className={css.container}>
            <Link className={css.link} href="/">UA</Link>
            <Link  className={css.link} href="/ru">RU</Link>
            <Link  className={css.link} href="/en">EN</Link>
            </div>           
        </header>
    )
}

export {Header}