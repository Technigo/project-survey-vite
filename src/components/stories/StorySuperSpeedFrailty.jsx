export const StorySuperSpeedFrailty = ({
  hero,
  superpower,
  weakness,
  villain,
}) => {
  return (
    <div className="story">
      {`
In the heart of Metropolis, there resided a superhero known as ${hero}, equipped with the incredible power of ${superpower}. Swift as lightning, they dashed through the city in the blink of an eye, a beacon of hope even in the darkest hours. Yet, concealed beneath this lightning-fast exterior was a profound weakness - ${weakness}.

${hero}'s ${weakness} remained a closely guarded secret. To the world, they stood as an emblem of invincibility, racing against time to save lives and thwart villains. However, their frail body often bore the painful toll of their heroic exploits.

Metropolis faced a formidable nemesis in the shape of ${villain}, a cunning villain armed with the ability to manipulate energy and matter. ${villain} harbored sinister intentions, seeking to plunge the city into chaos, leaving destruction in their wake with each malicious scheme.

One momentous day, as ${villain}'s menacing plans threatened to unravel the very fabric of Metropolis, ${hero} sprang into action. The ensuing battle was a testament to their unwavering spirit. Although ${weakness} weighed heavily upon them, ${hero} raced against time to counter ${villain}'s energy-fueled assaults.

In a breathtaking display of heroism, ${hero} outmaneuvered ${villain}, utilizing their ${superpower} to disrupt the villain's nefarious plots. With sheer determination, they apprehended ${villain}, bringing an end to the reign of terror.

Metropolis celebrated ${hero}'s triumph, learning a profound lesson that true strength transcended physical ${weakness}. ${hero}'s legacy stood as a symbol of resilience, a reminder to the city that heroes could emerge from the unlikeliest of circumstances to defend the place they loved..`}
    </div>
  );
};
