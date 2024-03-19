import { Slider } from '../../slider/Slider'
import {Typing} from '../../typing/Typing'
import {sentences} from '../../assets/db/sentences.json'
import './header.scss'


export const Header =()=>{
    return(
        <div className='header-wrapper'>
            <Slider><Typing sentences={sentences} /></Slider>
        </div>
    )
}