import {NavigationDisplay} from './sections/navigation/displeyNawigation/NavigationDisplay'
import { AboutMe } from './sections/aboutMe/AbouteMe'
import { ScrollProvider } from './ScrollProvider'
import { useRef } from 'react';
import './App.css'
import { Header } from './sections/heder/Header';
import { Services } from './sections/services/Services';
import { GroupLink } from './sections/group/GroupLink';
import { Footer } from './sections/footer/Footer';
import { Helmet } from 'react-helmet';



function App() {
  const abouteMe = useRef<HTMLDivElement>(null);
  const servicesID = useRef<HTMLDivElement>(null);
  const groupID = useRef<HTMLDivElement>(null)

  return (
<>
<Helmet>
  <title>Gabinet Terapii Uzależnień'Zatrzymaj się na czas!' - Agnieszka Pykosz</title>
  <meta name="description" content="Agnieszka Pykosz - doświadczony terapeuta uzależnień specjalizujący się w pracy z osobami uzależnionymi i współuzależnionymi. Indywidualne podejście, integracyjne podejście terapeutyczne." />
  {/* Schema.org */}
  <script type="application/ld+json">
    {`
      {
        "@context": "http://schema.org",
        "@type": "Person",
        "name": "Agnieszka Pykosz",
        "jobTitle": "Terapeuta uzależnień",
        "description": "Doświadczony terapeuta uzależnień specjalizujący się w pracy z osobami uzależnionymi i współuzależnionymi.",
        "url": "http://www.agnieszkapykosz.pl",
        "email": "agnieszka@agnieszkapykosz.pl",
        "telephone": "+48 123 456 789",
        "image": "https://agnieszkapykosz.pl/photos/me/Projekt-bez-nazwy-300x300.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Okrąg 21/23/3",
          "addressLocality": "Gdańsk",
          "postalCode": "80-871"
        }
      }
    `}
  </script>
</Helmet>

    <ScrollProvider>
      <div>
      <NavigationDisplay 
        abouteMe={abouteMe}
        servicesID={servicesID}
        groupID={groupID} />
      <Header />
      <AboutMe abouteMe={abouteMe} />
      <Services servicesID={servicesID}/>
      <Footer />
      </div>

    </ScrollProvider>
</>

    )
}

export default App
