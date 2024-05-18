import { useState } from 'react';
import servicesData from '../../assets/db/services.json';
import './services.scss';

interface Service {
  id: number;
  serviceName: keyof ServicesState;
  title: string;
  price: number;
  content: string;
}

interface ServicesProps {
  servicesID: React.RefObject<HTMLDivElement>;
}

interface ServicesState {
  [key: string]: boolean;
}

export const Services: React.FC<ServicesProps> = ({ servicesID }) => {
  const [servicesState, setServicesState] = useState<ServicesState>({
    servicesOne: false,
    servicesTwo: false,
  });

  const toggleServices = (serviceName: keyof ServicesState) =>
    setServicesState((prevState) => ({
      ...prevState,
      [serviceName]: !prevState[serviceName],
    }));

  return (
    <div className="services-wrapper" ref={servicesID}>
      {servicesData.services.map(
        ({ id, title, price, content, serviceName }: Service) => (
          <div
            key={id}
            className={`service ${servicesState[serviceName] ? 'turned' : ''}`}
            onClick={() => toggleServices(serviceName)}
          >
            {servicesState[serviceName] ? (
              <div className="services-turned active">
                <h2>{title}</h2>
                <p>(50min) {price} zł</p>
                <p>{content}</p>
              </div>
            ) : (
              <>
                <h2>{title}</h2>
                <div className="services-turned"></div>
              </>
            )}
          </div>
        )
      )}
    </div>
  );
};
