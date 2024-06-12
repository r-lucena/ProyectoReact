import { useState, useEffect } from "react";

const Fetch = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const headers = {
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      "x-rapidapi-key": "ec451c852bmsh5b9f324ff0aa41fp1b32e8jsn87d4f4065455", // Cada uno tiene su propia API, mirar en la página.
    };

    const fetchGames = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity`,
          { mode: "cors", headers }
        );
        const data = await response.json();
        setGames(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <h2>{game.title}</h2>
            <img src={`${game.freetogame_profile_url}`} alt="" />
            <p>{game.short_description}</p>
            <a href={`${game.game_url}`}>TEXT</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fetch;
