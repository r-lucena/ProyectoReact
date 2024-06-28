import '../home-body/GameCard.css'
const GameCard = ({ game }) => {
  return (
    <div className="card">
      <img src={game.thumbnail} alt={game.title} />
      <h2>{game.title}</h2>
      <p>{game.short_description}</p>
      <p>Genre: {game.genre}</p>
      <p>Platform: {game.platform}</p>
    </div>
  );
};

export default GameCard;