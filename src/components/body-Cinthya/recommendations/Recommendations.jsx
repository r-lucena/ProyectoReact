import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import useFetch from "../../Fetch/useFetch";
import "./Recommendations.css"

function Recommendations() {
  const { data, error, isLoading } = useFetch();


  return (
    <div>
      <h1 className="rec-title"> Recommendations</h1>

      <CardGroup className="rec-card-group">
        {data &&
          data.map((game) => (
            <Card className="rec-card" key={game.id}>
              <Card.Img className= "rec-img" variant="top" src={game.background_image} />
              <Card.Body>
                <Card.Title>{game.name}</Card.Title>
                <Card.Text>You can play in: {game.platforms.map((platform)=>(<p key={platform.id}>{platform.platform.name}</p>))}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Release date: {game.released}</small>
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
