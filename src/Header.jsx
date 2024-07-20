import logo1 from './assets/logo3.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPercent,faMagnifyingGlass,faHandshakeAngle,faRightToBracket,faCartShopping} from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import {Link} from 'react-router-dom'

export default function Header(){


    return(
        <>
        <nav>
            <Link to='./'> 
            <img src={logo1} alt="logo" className='logo' height='100px' width='100px'  />
            </Link>
            <ul>
                <li>
                     <Link to="/search">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                   Search</Link> </li>
                <li> 
                    <Link to="/offer">
                <FontAwesomeIcon icon={faPercent} />
                  Offer</Link>  </li>
                <li>
                     <Link to="/help">
                <FontAwesomeIcon icon={faHandshakeAngle} />
               Help</Link> </li>

                   <li>
                   <Link to="/cart">
                    <FontAwesomeIcon icon={faCartShopping} />
                    Cart</Link>
                    </li>
                <li>
                    <Link to="/signin">
                <FontAwesomeIcon icon={faRightToBracket} />
                Sign in</Link>  </li>
            </ul>
        </nav>
        
        </>
    );
}