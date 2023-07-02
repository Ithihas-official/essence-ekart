import { services } from "./../utils/constants";

const ServiceHome = () => {
  return (
    <article className="sevicesHomeContainer">
      <h2>custom furniture build only for you</h2>
      <div className="servicesInfoHome">
        {services.map((service) => {
          const { id, icon, title, text } = service;
          return (
            <div className="serviceInfoContainer" key={id}>
              {icon}
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default ServiceHome;
