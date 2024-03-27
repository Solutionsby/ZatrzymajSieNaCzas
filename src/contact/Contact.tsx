import './contact.scss'
import {contact} from '../assets/db/contact.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreen, faEnvelope,faLocationDot } from '@fortawesome/free-solid-svg-icons';

interface ContactProps{
    className?:string;
    isAdress?:Boolean;

}

export const Contact:React.FC<ContactProps> = ({className='',isAdress=true})=>{
    return(
        <>
            <a className={`contact-link ${className}`} href={`tel:+48${contact.telephone}`}><FontAwesomeIcon icon={faMobileScreen} />{contact.telephone}</a>
            <a className={`contact-link ${className}`} href={`mailto:${contact.emailAdress}`}><FontAwesomeIcon icon={faEnvelope} />agnieszka@&#8203;agnieszkapykosz.pl</a>
            {isAdress &&<a className={`contact-link ${className}`} href={contact.adressLink}><FontAwesomeIcon icon={faLocationDot} />{contact.adress}</a>}
        </>
    )
}