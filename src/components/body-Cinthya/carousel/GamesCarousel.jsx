import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselImages from "./CarouselImages";
import useFetchFree from "../../Fetch-freeToGame/useFetchFree";
function GamesCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const { data, error, isLoading } = useFetchFree();

   // Selecciona 3 juegos al azar
   function selectRandomGames (games, num) {
    const shuffled = games.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }

  const randomGames = data ? selectRandomGames(data, 3) : [];

  return (
    <div>
      <h1>Enjoy your games !</h1>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {randomGames && ( randomGames.map((game)=>(
        <Carousel.Item key={game.id}>
        <CarouselImages text={game.title} imageUrl={game.thumbnail} />
        <Carousel.Caption>
          <h3>{game.short_description}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      ))
        
      )}
    </Carousel>
    </div>
  );
}

export default GamesCarousel;
