export const StoryInvisibilityFire = ({
  hero,
  superpower,
  weakness,
  villain,
}) => {
  return (
    <div className="story">
      {`In the heart of Metropolis, a mysterious and elusive superhero known as ${hero} possessed the remarkable power of ${superpower}. ${hero} could vanish from sight at will, blending seamlessly with their surroundings. This power made them an enigma, a guardian unseen by the world.

However, ${hero} bore a hidden weakness: ${weakness}. The mere touch of flames would dispel their invisibility, leaving them vulnerable and exposed. It was a secret they guarded with utmost care, knowing that their power relied on the shadows.

${villain}, a cunning and malevolent villain, terrorized Metropolis with their control over ${weakness}. Their flames consumed entire buildings, leaving devastation in their wake. ${hero} knew that facing ${villain} would be their greatest challenge yet.

${villain}'s fiery onslaughts set the city ablaze, but ${hero}'s invisibility allowed them to navigate the inferno undetected. They moved silently through the smoke and flames, closing in on the unsuspecting villain. With a swift and stealthy strike, they incapacitated ${villain}, extinguishing their fiery reign of terror.

In the end, ${hero} proved that even a vulnerability as profound as ${weakness} could not hinder their determination to protect Metropolis. Their invisibility became a beacon of hope, a symbol that heroes could triumph over the darkest of foes.`}
    </div>
  );
};
