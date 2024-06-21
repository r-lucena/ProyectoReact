import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Recommendations.css";




function RecommendationsNoAPI({data}) {
  return (

     <div>
      <h1 className="rec-title">Classic games</h1>

      <div className="rec-card-group">
        <CardGroup >
          {data &&
            data.map((game) => (
              <Card key={game.id}>
                <Card.Img
                  variant="top"
                  src={game.background_image}
                />
                <Card.Body>
                  <Card.Title>{game.name}</Card.Title>
                  <p className="card-text">You can play in:</p>
                  {game.platforms.map((platform, index) => (
                    <Card.Text key={index}>{platform.platform.name} </Card.Text>
                  ))}
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    <strong>Release date:</strong> {game.released}
                  </small>
                </Card.Footer>
              </Card>
            ))}
        </CardGroup>
      </div>
    </div>
  );
}

export default RecommendationsNoAPI;
