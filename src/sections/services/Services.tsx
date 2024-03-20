import { useState } from 'react'
import {services} from '../../assets/db/services.json'
import './services.scss'

interface ServicesProps{
    servicesID:React.RefObject<HTMLDivElement>
}

export const Services:React.FC<ServicesProps> =({servicesID})=>{
    const [selectedService, setSelectedService] = useState< number | null>(null);

    const handleSeviceClick = (id:number) =>{
        if(selectedService === id){
            setSelectedService(null)
        }
        else{
            setSelectedService(id);
        }
        
    }
    return(
        <div className="services-wrapper" ref={servicesID}>
            {services.map(({id,title,price,content}:{id:number, title:string, price:number, content:string})=>(
                <div key={id} className={`service ${selectedService === id ? "turned": ""}`} onClick={()=>handleSeviceClick(id)}>
                    {   
                        selectedService !=id && 
                        <>
                        <h2>{title}</h2>
                        <div className='services-turned'></div>
                        </>
                    }
                    {selectedService === id && <div className='services-turned active'>
                        <h2>{title}</h2>
                        <p>(50min) {price} zł</p>
                        <p>{content}</p>

                        </div>}
                </div>
            ))}
        </div>
    )
}