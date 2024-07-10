import '../home-body/GameCard.css'
const GameCard = ({ game }) => {
  return (
    <div className="game-card-style">
    <img 
        src={game.thumbnail} 
        alt={game.title} 
        onClick={() => window.open(game.game_url)} 
    />
    <h2 onClick={() => window.open(game.game_url)}>
        {game.title}
    </h2>
    <p>{game.short_description}</p>
    <p>Genre: {game.genre}</p>
    <p>Platform: {game.platform}</p>
</div>

  );
};

export default GameCard;