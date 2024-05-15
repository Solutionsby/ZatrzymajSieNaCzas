import { useState } from 'react'
import {services} from '../../assets/db/services.json'
import './services.scss'

interface ServicesProps{
    servicesID:React.RefObject<HTMLDivElement>
}

export const Services:React.FC<ServicesProps> =({servicesID})=>{
    // const [selectedService, setSelectedService] = useState< number | null>(null);


    const [servicesState , setServicesState] = useState<object>({
        servicesOne: false,
        servicesTwo:false
    });

    const toggleServices = (servicesName:keyof typeof servicesState)=>
        setServicesState(prevState =>({
            ...prevState,
            [servicesName]: !prevState[servicesName]
        }))

    // const handleSeviceClick = (id:number) =>{
    //     if(selectedService === id){
    //         setSelectedService(null)
    //     }
    //     else{
    //         setSelectedService(id);
    //     }
        
    // }
    return(
        <div className="services-wrapper" ref={servicesID}>
            {services.map(({id,title,price,content, serviceName}:{id:number, title:string, price:number, content:string,serviceName:string})=>(
                <div key={id} className={`service ${servicesState[serviceName] ? "turned": ""}`} onClick={()=>toggleServices(serviceName)}>
            {servicesState[serviceName] ?
            <div className='services-turned active'>
              <h2>{title}</h2>
              <p>(50min) {price} zł</p>
              <p>{content}</p>
            </div>
            :
            <>
              <h2>{title}</h2>
              <div className='services-turned'></div>
            </>
          }
                </div>
            ))}
        </div>
    )
}