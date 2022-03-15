import "./Header.scss"

/**
 * @description ✏️ Header Component
 * @returns {JSX.Element}
 * @constructor
 */
const Header = () =>
    <header className="header pl-2 pr-2">
        <div
            className="header__inner flex flex-col items-center justify-center w-full gap-3 m-auto sm:flex-row sm:justify-between">
            <a href="#" className="logo">
                <img src="/assets/images/logo.svg" alt="Guest House"/>
            </a>

            <ul className="header__menu flex justify-center gap-2 w-full text-white">
                <li><a href="#">Start</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Our history</a></li>
            </ul>

            <a href="#" className="button button--secondary">Book now</a>
        </div>
    </header>

export default Header
