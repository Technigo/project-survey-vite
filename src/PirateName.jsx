import "./app.css";
let pirate;

const piratenames = ["Dark skull", "Toothless", "Seadog", "Musclemouth", "Gybrush", "Greybeard", "Blackbeard", "Bluebeard", "Goldheart", "Stinkin'n", "Old tide", "Vex", "Black Jack", "Fearless", "Steelbreath", "Tide", "Cut-throat", "Pegleg", "Two toe", "One arm", "Sharkswimmer", "Landlubber", "Gunpowder", "Cannonball", "McTuna", "Sea-Wolf", "Lobsterleg"]
export const PirateName = () => {
	const n = piratenames[(Math.floor(Math.random() * piratenames.length))];
	pirate = n;

	return (
		<div className="pirateresult">
			<span>  {pirate}  </span>
		</div>
	)
}

