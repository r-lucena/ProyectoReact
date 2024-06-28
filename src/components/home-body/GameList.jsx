import { useState, useEffect } from 'react';
import GameCard from './GameCard';
import useFetchFree from '../../components/Fetch-freeToGame/useFetchFree'
import '../home-body/GameList.css'

const GameList = () => {
  const { data, error, isLoading } = useFetchFree(); // Use the custom hook
  const [randomGames, setRandomGames] = useState([]);

  useEffect(() => {
    if (data) {
      const generateRandomGames = () => {
        const randomGames = data.sort(() => Math.random() - 0.5).slice(0, 8);
        setRandomGames(randomGames);
      };
      generateRandomGames();
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
    <h1 className="recomendations-p">Recommendations of the month</h1>
    <div className="game-cards">
      {randomGames.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
    </div>
  );
};

export default GameList;