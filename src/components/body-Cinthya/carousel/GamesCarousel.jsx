import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselImages from "./CarouselImages";
import useFetchFree from "../../Fetch-freeToGame/useFetchFree";
import "./GamesCarousel.css";

function GamesCarousel() {
  const [index, setIndex] = useState(0);
  const [randomGames, setRandomGames] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  function handleSelect(selectedIndex) {
    setIndex(selectedIndex);
  }

  function stopPropagation(event) {
    event.stopPropagation();
  }

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
      <h1 className={isHovered ? "game-title-hover" : "game-title"}>
        Enjoy your games !
      </h1>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {randomGames &&
          randomGames.map((game) => (
            <Carousel.Item
              key={game.id}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <CarouselImages
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                text={game.title}
                imageUrl={game.thumbnail}
              />

              <Carousel.Caption
                onMouseEnter={stopPropagation}
                onMouseLeave={stopPropagation}
                className={
                  isHovered ? "carousel-caption" : "carousel-caption-none"
                }
              >
                <p className="game-description">{game.short_description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
}

export default GamesCarousel;
