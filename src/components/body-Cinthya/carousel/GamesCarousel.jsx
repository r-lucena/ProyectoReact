import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselImages from "./CarouselImages";
import useFetchFree from "../../Fetch-freeToGame/useFetchFree";
import "./GamesCarousel.css"

function GamesCarousel() {
  const [index, setIndex] = useState(0);
  const [randomGames, setRandomGames] = useState([]);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const { data, error, isLoading } = useFetchFree();

  useEffect(() => {
    if (data) {
      const selectRandomGames = (games, num) => {
        const shuffled = games.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
      };
      setRandomGames(selectRandomGames(data, 3));
    }
  }, [data]);

  return (
    <div className="game-div">
      <h1 className="game-title">Enjoy your games !</h1>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {randomGames && ( randomGames.map((game)=>(
        <Carousel.Item key={game.id}>
        <CarouselImages text={game.title} imageUrl={game.thumbnail}  />
        
      </Carousel.Item>
      ))
        
      )}
    </Carousel>
    </div>
  );
}

export default GamesCarousel;
