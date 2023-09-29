import "./FormMatch.css";
// The FormMatch component takes four props: name, season, activity, and eco.
export const FormMatch = ({ name, season, activity, eco }) => {
    console.log("the user info", name, season, activity, eco)
    
    // An array containing vacation suggestions for different seasons and activities.
    const vacationSuggestions = [
        {
            season: "summer",
            activity: "chill",
            destination: "Santorini",
            country: "Greece",
            destinationdescription:
                "This Greek island is famous for its breathtaking sunsets, white-washed buildings, and crystal-clear waters. It's an ideal destination for couples seeking a romantic escape or anyone looking to relax in a beautiful setting.",
            imageUrl: "/images/santorini.jpeg",
        },
        {
            season: "summer",
            activity: "sports",
            destination: "Sagres",
            country: "Portugal",
            destinationdescription:
                "Located in the Algarve region, Sagres is known for its beautiful beaches and consistent waves. Tonel Beach and Beliche Beach are popular surf spots with options for both beginners and advanced surfers.",
            imageUrl: "/images/surf-sagres.jpeg",
        },
        {
            season: "summer",
            activity: "sightseeing",
            destination: "Krakow",
            country: "Poland",
            destinationdescription:
                "Krakow's Old Town is a UNESCO World Heritage site, featuring the stunning Wawel Castle, St. Mary's Basilica, and the historic Jewish Quarter of Kazimierz.",
            imageUrl: "/images/krakowguide.jpeg",
        },
        {
            season: "winter",
            activity: "chill",
            destination: "Salzburg",
            country: "Austria",
            destinationdescription:
                "Salzburg is a charming city with a picturesque old town. In winter, it's especially enchanting with its Christmas markets, classical music concerts, and the Hohensalzburg Fortress.",
            imageUrl: "/images/salzburg.jpeg",
        },
        {
            season: "winter",
            activity: "sports",
            destination: "St. Moritz",
            country: "Switzerland",
            destinationdescription:
                "St. Moritz is synonymous with luxury winter sports. Enjoy world-class skiing and snowboarding, as well as activities like ice skating, horse-drawn carriage rides, and polo on snow.",
            imageUrl: "/images/stMoritzSkiing.jpeg",
        },
        {
            season: "winter",
            activity: "sightseeing",
            destination: "Vienna",
            country: "Austria",
            destinationdescription:
                "Vienna is a magical city during the winter months. You can explore its historic palaces, museums, and concert halls, including the Hofburg Palace, Belvedere Palace, and the Vienna State Opera.",
            imageUrl: "/images/wien-winter.jpeg",
        },
    ];

    // A function to find a matching destination based on the user's chosen season and activity.
    const findMatchingDestination = (season, activity) => {
        return vacationSuggestions.find((suggestion) => {
            return (
                suggestion.season === season && suggestion.activity === activity
            )
        })
    }

    // Call the findMatchingDestination function to find a matching destination.
    const matchingDestination = findMatchingDestination(season, activity)
    console.log("This is the destination", matchingDestination)

    return (
        <div className="match-wrapper">
            <h2>Amazing! {name}, you have a match!!</h2>
            <p>
                {/* Display a message based on the user's name and chosen season */}
                Based on your dream of {season}, wouldn&apos;t{" "}
                <strong>{matchingDestination.destination}</strong>,{" "}
                <strong>{matchingDestination.country}</strong> be fantastic? Go
                get yourself a dreamy vacay!!
            </p>
            {/* Display an image of the matching destination */}
            <div className="destination-image-container">
                <img className="destination-image"
                    src={matchingDestination.imageUrl}
                    alt={matchingDestination.destination}
                />
            </div>
            {/* Display a description of the matching destination */}
            <p>{matchingDestination.destinationdescription}</p>
            {/* Display a message based on whether the eco checkbox is checked */}
            {eco ? (
                <p>Great of you to think of the environment!</p>
            ) : (
                <p>Not taking the train? That&apos;s ok I guess!</p>
            )}
        </div>
    )
}