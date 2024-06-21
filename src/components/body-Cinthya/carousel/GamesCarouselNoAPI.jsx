import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselImages from "./CarouselImages";
import "./GamesCarousel.css"

function GamesCarouselNoAPI({data}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <h1 className="game-title">Enjoy your games !</h1>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data && ( data.map((game)=>(
        <Carousel.Item key={game.id}>
        <CarouselImages text={game.name} imageUrl={game.background_image} />
        <Carousel.Caption>
          <h3>{game.name}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      ))
        
      )}
    </Carousel>
    </div>
  );
}

export default GamesCarouselNoAPI;
