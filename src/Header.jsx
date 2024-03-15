import './Header.css'
import img from '/technigo-logo.png'

/*Funtional component for header*/
export const Header = () => {
	return (
		<header className="header">
			<div className="img-container">
				<img src={img} alt="technigo-logo" />
			</div>
			<div className="text-container">
				<h1>Break the ice with Technigo</h1>
				<p>Get to know your team mates!</p>
			</div>
		</header>
	)
}
