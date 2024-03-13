import headerImage from "../assets/header1.jpg"
import "./header.css"

export const Header = () => {
    return (
        <header>
        <h1>Pizza Survey</h1>
        <img src={headerImage} id="headerImg" alt="Image of flying pizza in the sky"></img></header>
    )
}