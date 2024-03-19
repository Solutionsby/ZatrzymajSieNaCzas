import { useState,useEffect } from 'react'
import {slides} from '../assets/db/slides.json'
import './slider.scss'

interface TypingProps{
    children: React.ReactNode
}



export const Slider: React.FC<TypingProps> = ({children}) =>{
    const  [currentIndex, setCurrentIndex] = useState<number>(0);
    const sliderAutoIndex = () =>{
        setCurrentIndex((prevIndex: number) => (prevIndex + 1) % slides.length);
    }
    useEffect(() => {
        const intervalId = setInterval(sliderAutoIndex, 5000);
        return () => clearInterval(intervalId);
      }, []);
    return(
        <div className="slides-wrapper">
            <div className="img-slider" style={{ backgroundImage: `url(${slides[currentIndex].url})` }}>
            {children}
            </div>
        </div>
    )
}