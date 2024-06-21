import "./Recomendaciones.css"


const Recomendaciones = () => {
  return (
    <div className="recomendaciones-container">
      <h2 className="recomendations-p">Recomendaciones del mes</h2>
      <div className="carousel">
        <div className="card-carousel">
          <img src="" alt="" />
          <h3>Card 1</h3>
          <p>Lorem ipsum </p>
        </div>
        <div className="card-carousel">
          <img src="" alt="" />
          <h3>Card 2</h3>
          <p>Lorem ipsum </p>
        </div>
        <div className="card-carousel">
          <img src="" alt="" />
          <h3>Card 3</h3>
          <p>Lorem ipsum </p>
        </div>
        <div className="card-carousel">
          <img src="" alt="" />
          <h3>Card 4</h3>
          <p>Lorem ipsum </p>
        </div>
      </div>
    </div>
  );
};

export default Recomendaciones;