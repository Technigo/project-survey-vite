import "./index.css";

//looping througt the sun img
export const HeaderText = () => {
    const numImages = 4;

    const imageArray = Array.from({ length: numImages }, (_, index) => (
        <img key={index} src="https://img.icons8.com/color/48/sun--v1.png" alt="Picture of a sun" />
    ));

    return (
        <div className="headerText">
            <h1>The Sun Hotel</h1>
            {imageArray}
        </div >
    );
};