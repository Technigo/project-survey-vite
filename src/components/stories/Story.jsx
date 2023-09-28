import { StoryFlyingBlindness } from "./StoryFlyingBlindness";
import { StoryFlyingFrail } from "./StoryFlyingFrail";
import { StoryFlyingFire } from "./StoryFlyingFire";

export const Story = ({ hero, superpower, weakness, villain }) => {
  console.log(superpower, weakness, hero, villain);
  if (superpower === "flying" && weakness === "blindness") {
    return (
      <StoryFlyingBlindness
        hero={hero}
        superpower={superpower}
        weakness={weakness}
        villain={villain}
      />
    );
  } else if (superpower === "flying" && weakness === "frail") {
    return (
      <StoryFlyingFrail
        hero={hero}
        superpower={superpower}
        weakness={weakness}
        villain={villain}
      />
    );
  } else if (superpower === "flying" && weakness === "fire") {
    return (
      <StoryFlyingFire
        hero={hero}
        superpower={superpower}
        weakness={weakness}
        villain={villain}
      />
    );
  } else {
    return <div>Choose other options</div>;
  }
};
