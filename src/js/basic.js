export default function order(players) {
 players.sort((prev,next) => next.health - prev.health);
 return players;
}
