import './abouteMe.scss';
interface AboutMeProps {
    abouteMe: React.RefObject<HTMLDivElement>;
  }

export const AboutMe: React.FC<AboutMeProps>  = ({abouteMe}) => {
   


    return (
        <div className="me" ref={abouteMe}></div>
    );
};
