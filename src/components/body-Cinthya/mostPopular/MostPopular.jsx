import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MostPopular.css";
import "../../../ObjectAPI";

import { useEffect, useState } from "react";
import useFetchFreeRelevance from "../../Fetch-freeToGame/useFetchFreeRelevance";

function MostPopular() {
  const [relevantGames, setRelevantGames] = useState([]);
  const { data, error, isLoading } = useFetchFreeRelevance();

  useEffect(() => {
    if (data) {
      const fourRelevantGames = data.slice(0,4)
      setRelevantGames(fourRelevantGames)
    }
  }, [data]);

  return (
    <div className="rec-div-wrapper">
      <h1 className="rec-title">Most popular Free-to-Play Games</h1>

      <CardGroup className="rec-card-group">
        {relevantGames &&
          relevantGames.map((game) => (
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

export default MostPopular;
