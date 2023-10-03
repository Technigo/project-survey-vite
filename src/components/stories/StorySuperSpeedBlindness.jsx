export const StorySuperSpeedBlindness = ({
  hero,
  superpower,
  weakness,
  villain,
}) => {
  return (
    <div className="story">
      {`
In the bustling city of Crestville, a mysterious superhero known as ${hero} soared through the streets. ${hero} possessed the incredible power of ${superpower}, allowing them to move at the blink of an eye. No one could match their lightning-fast reflexes and agility.

But ${hero} harbored a secret weakness: ${weakness}. Their eyes were shrouded in perpetual darkness, a vulnerability they had to guard against at all times. To compensate, ${hero} honed their other senses to perfection, relying on sound, touch, and intuition to navigate the world.

Crestville was under siege by the cunning villain ${villain}, a master of illusions and deceit. ${hero}'s ability to manipulate reality made them a formidable adversary. They spread chaos and confusion wherever they went, leaving the city in turmoil.

${hero}'s ${superpower} proved to be their greatest asset in this battle. They darted through ${hero}'s illusions, closing in on the villain with unmatched velocity. Using their heightened senses, ${hero} pinpointed ${villain}'s location and struck with precision.

In a blinding flurry of motion, ${hero} defeated ${villain} and brought peace to Crestville once more. Despite their blindness, ${hero}'s determination, adaptability, and incredible speed made them the city's most celebrated hero, proving that true strength could emerge from unexpected places.`}
    </div>
  );
};
