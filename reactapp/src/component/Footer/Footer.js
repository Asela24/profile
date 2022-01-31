import './Footer.css';
import {Link} from "react-router-dom";

function Footer() {
    return(
        <footer className={'footer'}>
            <div className={'footer__link'}>
                <Link to={'/'} className={'footer__titles'}>Main</Link>
                <Link to={'buyPage'} className={'footer__titles'}>Buy</Link>
                <Link to={'autoPage'} className={'footer__titles'}>Log in</Link>
            </div>
            <div className={'footer__copyright'}>Copyright 2021</div>
        </footer>
    )
};
export default Footer;