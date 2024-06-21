import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import useFetch from "../../Fetch/useFetch";
import "./Recommendations.css";
import "../../../ObjectAPI"


function Recommendations() {
  const { data, error, isLoading } = useFetch();

  return (
    <div>
      <h1 className="rec-title">Classic Games</h1>

      <CardGroup className="rec-card-group">
        {data &&
          data.map((game) => (
            <Card className="rec-card" key={game.id}>
              <Card.Img
                className="rec-img"
                variant="top"
                src={game.background_image}
              />
              <Card.Body>
                <Card.Title>{game.name}</Card.Title>
                <p>You can play in:</p>
                {game.platforms.map((platform, index) => (
                  <Card.Text key={index}>{platform.platform.name} </Card.Text>
                ))}
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  Release date: {game.released}
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
