import {NavigationDisplay} from './sections/navigation/displeyNawigation/NavigationDisplay'
import { AboutMe } from './sections/aboutMe/AbouteMe'
import { ScrollProvider } from './ScrollProvider'
import { useRef } from 'react';
import './App.css'
import { Header } from './sections/heder/Header';
import { Services } from './sections/services/Services';
import { GroupLink } from './sections/group/GroupLink';
import { Footer } from './sections/footer/Footer';



function App() {
  const abouteMe = useRef<HTMLDivElement>(null);
  const servicesID = useRef<HTMLDivElement>(null);
  const groupID = useRef<HTMLDivElement>(null)

  return (
    <ScrollProvider>
      <div>
      <NavigationDisplay 
        abouteMe={abouteMe}
        servicesID={servicesID}
        groupID={groupID} />
      <Header />
      <AboutMe abouteMe={abouteMe} />
      <Services servicesID={servicesID}/>
      <GroupLink groupID={groupID}/>
      <Footer />
      </div>

    </ScrollProvider>

    )
}

export default App
