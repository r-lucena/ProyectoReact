import { useState, useEffect } from 'react';
import GameCard  from './GameCard';

const GameList = () => {
  const [games, setGames] = useState([]);
  const [randomGames, setRandomGames] = useState([]);

  const generateRandomGames = () => {
    const randomGames = games.sort(() => Math.random() - 0.5).slice(0, 4);
    setRandomGames(randomGames);
  };

  useEffect(() => {
    fetch('https://www.freetogame.com/api/games')
      .then(response => response.json())
      .then(data => {
        setGames(data);
        generateRandomGames();
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="game-cards">
      {randomGames.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GameList;