import './abouteMe.scss';
import {paragrafs,training} from '../../assets/db/aboutMe.json'
interface AboutMeProps {
    abouteMe: React.RefObject<HTMLDivElement>;
  }

export const AboutMe: React.FC<AboutMeProps>  = ({abouteMe}) => {
   


    return (
        <div className="about-me-wrapper" ref={abouteMe}>
            <div className="photo-me"></div>
            <div className="about-text-wrapper">
                <h2 className='main-title'>Poznajmy się !</h2>
            {paragrafs.map(({id,paragraf,boldText}:{id:number,paragraf:string,boldText:string}) => (
                <p key={id} ><strong>{boldText}</strong>{paragraf}</p>
))}
            
            <h3 className='treining'>Wiedzę zdobywałam również podczas szkoleń: </h3>
            {training.map(({id,context}:{id:number,context:string})=>(
                <p key={id}>{id}) {context}</p>
            ))}
            </div>
        </div>
    );
};
