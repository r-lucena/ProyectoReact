import { useState, useEffect } from 'react';
import GameCard from './GameCard';
import useFetchFree from '../../components/Fetch-freeToGame/useFetchFree';
import '../home-body/GameSearch.css';
import BasicDropdown from '../../components-victor/dropdown/BasicDropdown'


// const genres = [
//   {
//     item: "MMORPG",
//     value: "mmorpg"
//   },
//   {
//     item: "Shooter",
//     value: "shooter"
//   }
// ]


function GameSearch() {
  const { data = [], error, isLoading } = useFetchFree(); // Ensure data is always an array
  const [randomGames, setRandomGames] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [genres, setGenres] = useState([])

  function handleSearchQuery(e){
    setSearchQuery(e.target.value)
  }

  function populateDropdown(){
    const genres = [...new Set(data.map(game => game.genre))]; // Extract unique genres
   genres.map(genre => ({ id: genre.toLowerCase(), name: genre })); // Format genres
   setGenres(genres);
  }

  useEffect(() => {
    if (data.length > 0) {
      console.log('Fetched Data:', data);  // Log the fetched data
      const generateRandomGames = () => {
        const randomGames = data.sort(() => Math.random() - 0.5).slice(0, 8);
        setRandomGames(randomGames);
        populateDropdown();
        console.log(genres) //test
      };
      generateRandomGames();
    }
  }, [data]);

  useEffect(() => {
    if (data.length > 0 && searchQuery) {
      console.log('Search Query:', searchQuery); // Log the search query
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
      <label htmlFor="game-search"><h1 className="recomendations-p">Search your games!</h1></label>
      <input
        id='game-search'
        type="text"
        value={searchQuery}
        onChange={handleSearchQuery}
        placeholder="Search for a game..."
        className="search-input"
      />
      <BasicDropdown btnName={"Genres"} objectsArray={genres}/>
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

export default GameSearch;