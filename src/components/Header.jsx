import headerImage from '../components/survey-components/assets/header1.jpg'
import './header.css'

export const Header = () => {
  return (
    <header>
      <div>
        <h1>
          <span>Pizza Survey</span>
        </h1>
        <img
          src={headerImage}
          id="headerImg"
          alt="Image of flying pizza in the sky"
        ></img>
      </div>
    </header>
  );
}
