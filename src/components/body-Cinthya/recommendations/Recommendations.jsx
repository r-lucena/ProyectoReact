import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Recommendations.css";
import "../../../ObjectAPI";
import useFetchFree from "../../Fetch-freeToGame/useFetchFree";
import { useEffect, useState } from "react";

function Recommendations() {
  const [randomGames, setRandomGames] = useState([]);
  const { data, error, isLoading } = useFetchFree();

  useEffect(() => {
    if (data) {
      const selectRandomGames = (games, num) => {
        const shuffled = games.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
      };
      setRandomGames(selectRandomGames(data, 4));
    }
  }, [data]);

  return (
    <div className="rec-div-wrapper">
      <h1 className="rec-title">Classic Games</h1>

      <CardGroup className="rec-card-group">
        {randomGames &&
          randomGames.map((game) => (
            <Card className="rec-card" key={game.id}>
              <Card.Img
                variant="top"
                src={game.thumbnail}
              />
              <Card.Body>
                <Card.Title>{game.title}</Card.Title>
                <Card.Text>{game.short_description} </Card.Text>
              </Card.Body>
              <div className="div-flex">
                  <button
                    className="see-more-btn"
                    onClick={() => window.open(game.game_url)}
                  >
                    See more
                  </button>
                </div>
              <Card.Footer>
                <small className="text-muted">
                  Release date: {game.release_date}
                </small>
              </Card.Footer>
            </Card>
          ))}
      </CardGroup>

      {error && <p>Error:{error.message}</p>}
      {isLoading && <p>Loading...</p>}
    </div>
  );
}

export default Recommendations;
