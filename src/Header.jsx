import logo1 from './assets/logo3.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPercent,faMagnifyingGlass,faHandshakeAngle,faRightToBracket} from '@fortawesome/free-solid-svg-icons'
import './Header.css'

export default function Header(){


    return(
        <>
        <nav>
            <img src={logo1} alt="logo" className='logo' height='100px' width='100px'  />
            <ul>
                <li>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <span>Search </span> </li>
                <li>
                <FontAwesomeIcon icon={faPercent} />
                  <span>Offer</span>  </li>
                <li>
                <FontAwesomeIcon icon={faHandshakeAngle} />
                   <span>Help</span> </li>
                <li>
                <FontAwesomeIcon icon={faRightToBracket} />
                 <span> Sign In</span>  </li>
            </ul>
        </nav>
        
        </>
    );
}