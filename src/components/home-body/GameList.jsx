
const GameList = ({games}) => {
    return (
        <ul>
            {games.map((game) => (
                <li key={game.id}>{game.name}</li>
            ))}
        </ul>
    )
}
export default GameList