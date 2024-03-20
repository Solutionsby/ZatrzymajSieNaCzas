import './navigation.scss'
import { useState, useContext  } from 'react';
import { ScrollContext } from '../../../ScrollProvider';
import { Contact } from '../../../contact/Contact';


interface NavigationDisplayProps {
    abouteMe: React.RefObject<HTMLDivElement>;
    servicesID:React.RefObject<HTMLDivElement>;
    groupID:React.RefObject<HTMLDivElement>;

  }



export const NavigationDisplay: React.FC<NavigationDisplayProps> =({
    abouteMe,servicesID,groupID
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
                        <li className='link'  onClick={() => handleScrollToSection(servicesID)} >Usługi</li>
                        <li className='link' onClick={() => handleScrollToSection(groupID)} >Grupa wsparcia</li>
                        <li>
                            <div className="contact-wrapper">
                            <Contact isAdress={false}/>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
    
}