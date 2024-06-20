import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import useFetch from "../../Fetch/useFetch";

function News() {
  const { data, error, isLoading } = useFetch();


  return (
    <div>
      <h1>Recommendations</h1>

      <CardGroup>
        {data &&
          data.map((game) => (
            <Card key={game.id}>
              <Card.Img variant="top" src={game.background_image} />
              <Card.Body>
                <Card.Title>{game.name}</Card.Title>
                <Card.Text>{game.reviews_text_count}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">{game.released}</small>
              </Card.Footer>
            </Card>
          ))}
     </CardGroup>
     
     {error && <p>Error:{error.message}</p>}
     {isLoading && <p>Loading...</p>}
    </div>
  );
}

export default News;
