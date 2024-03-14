import './navigation.scss'
import { useState, useContext  } from 'react';
import { ScrollContext } from '../../../ScrollProvider';


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
    return (
        <div className="nav">
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
                        <li onClick={() => handleScrollToSection(abouteMe)}>O Mnie</li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>

            </div>
        </div>
    )
    
}