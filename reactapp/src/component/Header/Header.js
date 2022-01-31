import {Link} from "react-router-dom";
import FavTopic from "./FavTopic/FavTopic";
import './Header.css'

function Header() {
    return(
        <header className={'header-container'}>
            <h1 className={'logo-style'}>
                <Link to={'/'} className={'logo-style__link'}>
                    Flatty
                </Link>
            </h1>
            <span className={'links-container'}>
                <Link to={'/'} className={'links-container__text-decoration '}>Main</Link>
                <Link to={'buyPage'} className={'links-container__text-decoration '}>Buy</Link>
                <Link to={'favPage'} className={' links-container__text-decoration like_decor'}>♡</Link>
                <Link to={'autoPage'} className={'links-container__text-decoration '}>Log in</Link>
            </span>
            <div className={'like-container'}>
                <div className={'favTopics'}>  <FavTopic /> </div>
            </div>
        </header>
    )
}

export default Header;