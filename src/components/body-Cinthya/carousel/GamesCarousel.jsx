import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselImages from "./CarouselImages";
import useFetchFree from "../../Fetch-freeToGame/useFetchFree";
import "./GamesCarousel.css";

function GamesCarousel() {
  const [index, setIndex] = useState(0);
  const [newGames, setNewGames] = useState([]);
  function handleSelect(selectedIndex) {
    setIndex(selectedIndex);
  }

  const { data, error, isLoading } = useFetchFree();

  useEffect(() => {
    if (data) {
      const sortedGames= data.sort((a, b)=> new Date(b.release_date) - new Date(a.release_date))
      const threeNewestGames = sortedGames.slice(0,3)
      setNewGames(threeNewestGames)

    }

  }, [data]);

  // useEffect(() => {
  //   if (data) {
  //     const selectRandomGames = (games, num) => {
  //       const shuffled = games.sort(() => 0.5 - Math.random());
  //       return shuffled.slice(0, num);
  //     };
  //     setRandomGames(selectRandomGames(data, 3));
  //   }
  // }, [data]);

  return (
    <div className="game-div-wrapper">
      <h1 className="game-title">New released</h1>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {newGames &&
          newGames.map((game) => (
            <Carousel.Item
              key={game.id}
              onClick={() => window.open(game.game_url)}
            >
              <CarouselImages text={game.title} imageUrl={game.thumbnail} />
            </Carousel.Item>
          ))}
      </Carousel>

      {error && <p>Error:{error.message}</p>}
      {isLoading && <p>Loading...</p>}
    </div>
  );
}

export default GamesCarousel;
