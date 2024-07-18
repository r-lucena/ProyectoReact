import '../home-body/GameCard.css'
const GameCard = ({ game }) => {
  return (
    <div className="game-card-style">
    <div className='card-img'>
      <img
          src={game.thumbnail}
          alt={game.title}
          onClick={() => window.open(game.game_url)}
      />
    </div>
    <div className='card-title'>
      <h2 onClick={() => window.open(game.game_url)}>
          {game.title}
      </h2>
    </div>
    <div className='card-texts'>
      <p>{game.short_description}</p>
      <p>Genre: {game.genre}</p>
      <p>Platform: {game.platform}</p>
    </div>
</div>

  );
};

export default GameCard;
