import { useState, useEffect } from "react";
import GameCard from "./GameCard";
import useFetchFree from "../../components/Fetch-freeToGame/useFetchFree";
import "../home-body/GameSearch.css";
import BasicDropdown from "../../components-victor/dropdown/BasicDropdown";


function GameSearch() {
  const { data = [], error, isLoading } = useFetchFree(); // Ensure data is always an array
  const [randomGames, setRandomGames] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [genres, setGenres] = useState([]);
  const [page, setPage] = useState(0);
  const [numOfPages, setNumOfPages] = useState([]);

  function handleSearchQuery(e) {
    setSearchQuery(e.target.value);
  }

  function populateDropdown() {
    const differentGenres = [...new Set(data.map((game) => game.genre))]; // Extract unique genres

    const filterDifferentGenres = differentGenres.map((genre) => ({
      item: genre,
      value: genre.toLowerCase(),
    })); // Format genres
    setGenres(filterDifferentGenres);
  }

  useEffect(() => {
    if (data.length > 0) {
      console.log("Fetched Data:", data); // Log the fetched data
      const generateRandomGames = () => {
        const randomGames = data.sort(() => Math.random() - 0.5).slice(0, 12);
        setRandomGames(randomGames);
        populateDropdown();
        console.log(genres); //test
      };
      generateRandomGames();
    }
  }, [data]);

  function divideArrayInParts(array, partSize) {
    let result = [];
    for (let i = 0; i < array.length; i += partSize) {
      let part = array.slice(i, i + partSize);
      result.push(part);
    }
    return result;
  }

  useEffect(() => {
    if (data.length > 0 && searchQuery) {
      console.log("Search Query:", searchQuery); // Log the search query
      const filteredGames = data.filter((game) =>
        game.title?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      console.log("Filtered Games:", filteredGames); // Log the filtered results

      const pagination = divideArrayInParts(filteredGames, 12);

      let arrayOfPages = [];
      for (let i = 0; i < pagination.length; i++) {
        arrayOfPages.push(i);
      }

      setNumOfPages(arrayOfPages);

      setSearchResults(pagination);
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

  function handlePage(event) {
    setPage(Number(event.target.innerText));
  }
  return (
    <div>
      <label htmlFor="game-search">
        <h1 className="recomendations-p">Search your games!</h1>
      </label>
      <input
        id="game-search"
        type="text"
        value={searchQuery}
        onChange={handleSearchQuery}
        placeholder="Search for a game..."
        className="search-input"
      />
      <BasicDropdown btnName={"Genres"} objectsArray={genres} />
      <div className="game-card">
        {searchQuery ? (
          searchResults.length ? (
            searchResults[page].map((game) => (
              <GameCard key={game.id} game={game} />
            ))
          ) : (
            <div>No results found</div>
          )
        ) : (
          randomGames.map((game) => <GameCard key={game.id} game={game} />)
        )}
        {numOfPages.map((page, index) => {
          return (
            <button onClick={handlePage} key={index}>
              {page}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default GameSearch;
