import {NavigationDisplay} from './sections/navigation/displeyNawigation/NavigationDisplay'
import { AboutMe } from './sections/aboutMe/AbouteMe'
import { ScrollProvider } from './ScrollProvider'
import { useRef } from 'react';
import './App.css'



function App() {
  const abouteMe = useRef<HTMLDivElement>(null);

  return (
    <ScrollProvider>
      <div>
      <NavigationDisplay 
        abouteMe={abouteMe} />
      <AboutMe 
      abouteMe={abouteMe} />
      </div>
    </ScrollProvider>

    )
}

export default App
