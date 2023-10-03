export const StoryFlyingFire = ({ hero, superpower, weakness, villain }) => {
  return (
    <div className="story">
      {`${hero} possessed the incredible power of ${superpower}, soaring through the skies with their auburn hair trailing behind like a fiery comet. ${hero} were a beacon of hope for their city, a guardian angel defending it from harm.

Yet, ${hero} harbored a hidden weakness - ${weakness}. Whenever flames appeared nearby, their powers waned, leaving them vulnerable as if their wings had been clipped. This secret was known only to them, until a villain named ${villain} discovered it.

${villain}, a pyromaniac with a penchant for chaos, aimed to destroy the city. Armed with the knowledge of ${hero}'s weakness, they set fires throughout, forcing ${hero} to face their deepest fear.

As flames raged and the city burned, ${hero} confronted ${villain} in a fiery showdown. Summoning every ounce of courage, they overcame their fear, determined to protect their home. They swooped down, engaging ${villain} in a battle that would decide the city's fate. In the end, it was their bravery and resilience that triumphed, extinguishing ${villain}'s flames of destruction.

${hero} not only conquered their weakness but proved that true heroes rise above their fears, soaring to new heights to protect those they love.`}
    </div>
  );
};
