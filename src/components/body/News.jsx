import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import useFetch from "../Fetch/useFetch";

function News() {
  const { data, error, isLoading } = useFetch();
  console.log(data);

  return (
    <div>
      <h1>Recomendations</h1>

      {/* <CardGroup>
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
     </CardGroup> */}
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={data && data[0].background_image} />
          <Card.Body>
            <Card.Title>{data && data[0].name}</Card.Title>
            <Card.Text>{data && data[0].genres[0].name}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{data && data[0].released}</small>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img variant="top" src={data && data[1].background_image} />
          <Card.Body>
            <Card.Title>{data && data[1].name}</Card.Title>
            <Card.Text>{data && data[1].genres[0].name}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{data && data[1].released}</small>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img variant="top" src={data && data[2].background_image} />
          <Card.Body>
            <Card.Title>{data && data[2].name}</Card.Title>
            <Card.Text>{data && data[2].genres[0].name}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{data && data[2].released}</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}

export default News;
