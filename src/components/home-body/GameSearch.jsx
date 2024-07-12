// import { useState, useEffect } from 'react';
// import GameCard from './GameCard';
// import useFetchFree from '../Fetch-freeToGame/useFetchFree'
// import '../home-body/GameSearch.css'

// function GameSearch() {
//   const { data, error, isLoading } = useFetchFree(); // Use the custom hook
//   const [randomGames, setRandomGames] = useState([]);
//   const [input, setInput] = useState("")

//   function handleInput(event) {
//     console.log(event.target.value);
//     setInput(event.target.value)
//   }

//   useEffect(() => {
//     if (data) {
//       const generateRandomGames = () => {
//         const randomGames = data.sort(() => Math.random() - 0.5).slice(0, 8);
//         setRandomGames(randomGames);
//       };
//       generateRandomGames();
//     }
//   }, [data]);


//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <label htmlFor="game-search"><h1 className="recomendations-p">Search your games!</h1></label>
//       <input name='game-search' type='text' placeholder='type here' onChange={handleInput} />
//       <div className="game-cards">
//         {input && data.map(element => (
//           <GameCard key={element.id} game={element.title == input} />
//         ))}
//           {/* {data && randomGames.map(game => (
//             <GameCard key={game.id} game={game} />
//           ))} */}
//       </div>
//     </div>
//   );
// };

// export default GameSearch;

import { useState, useEffect } from 'react';
import GameCard from './GameCard';
import useFetchFree from '../Fetch-freeToGame/useFetchFree';
import '../home-body/GameSearch.css';
import BasicDropdown from '../../components-victor/dropdown/BasicDropdown'

function GameSearch() {
  const { data = [], error, isLoading } = useFetchFree(); // Ensure data is always an array
  const [randomGames, setRandomGames] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  function handleSearchQuery(e){
    setSearchQuery(e.target.value)
  }

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
      <label htmlFor="game-search"><h1 className="recomendations-p">Search your games!</h1></label>
      <input
        id='game-search'
        type="text"
        value={searchQuery}
        onChange={handleSearchQuery}
        placeholder="Search for a game..."
        className="search-input"
      />
      {/* <BasicDropdown btnName={"Genres"} objectsArray={data.genre}/> */}
      <div className="game-card">
        {searchQuery ? (
          searchResults.length ? (
            searchResults.map(game => (
              <GameCard key={game.id} game={game} />
            ))
          ) : (
            <p className='nogame-found'><b>Woops! There isn't any game with that name!</b></p>
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