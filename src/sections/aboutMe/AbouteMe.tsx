import './abouteMe.scss';
import {paragrafs} from '../../assets/db/aboutMe.json'
interface AboutMeProps {
    abouteMe: React.RefObject<HTMLDivElement>;
  }

export const AboutMe: React.FC<AboutMeProps>  = ({abouteMe}) => {
   


    return (
        <div className="about-me-wrapper" ref={abouteMe}>
            <div className="photo-me"></div>
            <div className="about-text-wrapper">
            {paragrafs.map(({id,paragraf}:{id:number,paragraf:string}) => (
                <p key={id} >{paragraf}</p>
))}
            </div>
        </div>
    );
};
