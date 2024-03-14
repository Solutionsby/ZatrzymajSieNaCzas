import './navigation.scss'
import { useState, useContext  } from 'react';
import { ScrollContext } from '../../../ScrollProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreen, faEnvelope } from '@fortawesome/free-solid-svg-icons';


interface NavigationDisplayProps {
    abouteMe: React.RefObject<HTMLDivElement>;

  }



export const NavigationDisplay: React.FC<NavigationDisplayProps> =({
    abouteMe,
  })=>{
    const [isToggled, setIsToggled] = useState(false);
    const scrollToSection = useContext(ScrollContext);

    const handleToggle = () => {
      setIsToggled(prevState => !prevState);}

  const handleScrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (scrollToSection && ref.current) {
      scrollToSection(ref);
    }
  };
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
    return (
        <div className="nav">
            <img src="/logo/logo.png" alt="logo" onClick={handleScrollToTop}/>
            <div className={`button-nav ${isToggled ? 'active' : ''}`}>
                <div className="menu-burger" onClick={handleToggle}>
                    <div className="bar-wrapper">
                        <div className={`bar one ${isToggled ? 'active' : ''}`}></div>
                        <div className={`bar two ${isToggled ? 'active' : ''}`}></div>
                        <div className={`bar three ${isToggled ? 'active' : ''}`}></div>
                    </div>
                </div>
                <div className={`links-wrapper ${isToggled ? 'active' : ''}`}>
                    <ul>
                        <li className='link' onClick={() => handleScrollToSection(abouteMe)}>O Mnie</li>
                        <li className='link'>Usługi</li>
                        <li className='link'>FAQ</li>
                        <li>
                            <div className="contact-wrapper">
                                <a href="tel:+"><FontAwesomeIcon icon={faMobileScreen} />510-608-389</a>
                                <a href="mailto:"><FontAwesomeIcon icon={faEnvelope} />gocek89@gmail.com</a>
                            

                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
    
}