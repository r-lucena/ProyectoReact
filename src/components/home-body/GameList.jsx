import { useState, useEffect } from 'react';
import GameCard from './GameCard';
import useFetchFree from '../../components/Fetch-freeToGame/useFetchFree';
import '../home-body/GameList.css';

const GameList = () => {
  const { data = [], error, isLoading } = useFetchFree(); // Ensure data is always an array
  const [randomGames, setRandomGames] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    console.log('Fetched Data:', data); // Log the fetched data
    if (data.length > 0) {
      const generateRandomGames = () => {
        const randomGames = data.sort(() => Math.random() - 0.5).slice(0, 8);
        setRandomGames(randomGames);
      };
      generateRandomGames();
    }
  }, [data]);

  useEffect(() => {
    console.log('Search Query:', searchQuery); // Log the search query
    if (data.length > 0 && searchQuery) {
      const filteredGames = data.filter(game =>
        game.title?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      console.log('Filtered Games:', filteredGames); // Log the filtered results
      setSearchResults(filteredGames);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1 className="recomendations-p">Recommendations of the month</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a game..."
        className="search-input"
      />
      <div className="game-cards">
        {searchQuery ? (
          searchResults.length ? (
            searchResults.map(game => (
              <GameCard key={game.id} game={game} />
            ))
          ) : (
            <div>No results found</div>
          )
        ) : (
          randomGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))
        )}
      </div>
    </div>
  );
};

export default GameList;
