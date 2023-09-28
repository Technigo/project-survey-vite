

export const FormMatch = ({ name, season, activity, eco }) => {
  console.log("the user info", name, season, activity, eco)

    const vacationSuggestions = [
    {
    season: "summer",
    activity: "chill",
    destination: "Santorini",
    country: "Greece",
    destinationdescription: "This Greek island is famous for its breathtaking sunsets, white-washed buildings, and crystal-clear waters. It's an ideal destination for couples seeking a romantic escape or anyone looking to relax in a beautiful setting.",
    imageUrl: "./src/assets/santorini.jpeg",
    },
    {
    season: "summer",
    activity: "sports",
    destination: "Sagres",
    country: "Portugal",
    destinationdescription: "Located in the Algarve region, Sagres is known for its beautiful beaches and consistent waves. Tonel Beach and Beliche Beach are popular surf spots with options for both beginners and advanced surfers.",
    imageUrl: "./src/assets/surf-sagres.jpeg", 
    },
    {
    season: "summer",
    activity: "sightseeing",
    destination: "Krakow",
    country: "Poland",
    destinationdescription: "Krakow's Old Town is a UNESCO World Heritage site, featuring the stunning Wawel Castle, St. Mary's Basilica, and the historic Jewish Quarter of Kazimierz.",
    imageUrl: "./src/assets/krakowguide.jpeg",
    },
    {
    season: "winter",
    activity: "chill",
    destination: "Salzburg",
    country: "Austria",
    destinationdescription: "Salzburg is a charming city with a picturesque old town. In winter, it's especially enchanting with its Christmas markets, classical music concerts, and the Hohensalzburg Fortress.",
    imageUrl: "./src/assets/salzburg.jpeg",
    },
    {
    season: "winter",
    activity: "sports",
    destination: "St. Moritz",
    country: "Switzerland",
    destinationdescription: "St. Moritz is synonymous with luxury winter sports. Enjoy world-class skiing and snowboarding, as well as activities like ice skating, horse-drawn carriage rides, and polo on snow.",
    imageUrl: "./src/assets/stMoritzSkiing.jpeg",
    },
    {
    season: "winter",
    activity: "sightseeing",
    destination: "Vienna",
    country: "Austria",
    destinationdescription: "Vienna is a magical city during the winter months. You can explore its historic palaces, museums, and concert halls, including the Hofburg Palace, Belvedere Palace, and the Vienna State Opera.",
    imageUrl: "./src/assets/wien-winter.jpeg",
    },
    ]

    const findMatchingDestination = (season, activity) => {
        return vacationSuggestions.find((suggestion) => {
          return(
            suggestion.season === season &&
            suggestion.activity === activity
          )
            
        });    
    };

    const matchingDestination = findMatchingDestination(season, activity);
    console.log("This is the destination", matchingDestination )

    return (
        // ${formData.name}, you’ve shared with us that you are in the mood for a ${formData.season} getaway with focus on ${formData.activity}! Kudos for making an eco-friendly choice by avoiding traveling by air! Based on your choices, we think a great vacation spot for you is ${formData.destination}, ${formData.country}! ${matchingDestination.imageUrl} ${formData.destinationdescription}
        <div>
            <h2>Amazing! You have a match!</h2>
            <p>Dear {name}, </p>
            <p>Matching Destination: {matchingDestination.destination}, {matchingDestination.country}</p>
        <img src={matchingDestination.imageUrl} alt={matchingDestination.destination} />
        <p>Description: {matchingDestination.destinationdescription}</p>
        {eco === "checked" ? (
          <p>Great of you to think of the environment!</p>
          ) : (
          <p>Not taking the train? That's ok I guess!</p>
          )}
        </div>
    )
};