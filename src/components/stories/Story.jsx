import { StoryFlyingBlindness } from "./StoryFlyingBlindness";
import { StoryFlyingFrailty } from "./StoryFlyingFrailty";
import { StoryFlyingFire } from "./StoryFlyingFire";
import { StorySuperSpeedFrailty } from "./StorySuperSpeedFrailty";
import { StorySuperSpeedFire } from "./StorySuperSpeedFire";
import { StorySuperSpeedBlindness } from "./StorySuperSpeedBlindness";
import { StoryInvisibilityFrailty } from "./StoryInvisibilityFrailty";
import { StoryInvisibilityFire } from "./StoryInvisibilityFire";
import { StoryInvisibilityBlindness } from "./StoryInvisibilityBlindness";

//Component that receives relevant story data and returns the story that corresponds to the chosen superpower and weakness.
export const Story = ({ hero, superpower, weakness, villain }) => {
  if (superpower === "flying" && weakness === "blindness") {
    return (
      <StoryFlyingBlindness
        hero={hero}
        superpower={superpower}
        weakness={weakness}
        villain={villain}
      />
    );
  } else if (superpower === "flying" && weakness === "frailty") {
    return (
      <StoryFlyingFrailty
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
  } else if (superpower === "superspeed" && weakness === "frailty") {
    return (
      <StorySuperSpeedFrailty
        hero={hero}
        superpower={superpower}
        weakness={weakness}
        villain={villain}
      />
    );
  } else if (superpower === "superspeed" && weakness === "fire") {
    return (
      <StorySuperSpeedFire
        hero={hero}
        superpower={superpower}
        weakness={weakness}
        villain={villain}
      />
    );
  } else if (superpower === "superspeed" && weakness === "blindness") {
    return (
      <StorySuperSpeedBlindness
        hero={hero}
        superpower={superpower}
        weakness={weakness}
        villain={villain}
      />
    );
  } else if (superpower === "invisibility" && weakness === "frailty") {
    return (
      <StoryInvisibilityFrailty
        hero={hero}
        superpower={superpower}
        weakness={weakness}
        villain={villain}
      />
    );
  } else if (superpower === "invisibility" && weakness === "fire") {
    return (
      <StoryInvisibilityFire
        hero={hero}
        superpower={superpower}
        weakness={weakness}
        villain={villain}
      />
    );
  } else if (superpower === "invisibility" && weakness === "blindness") {
    return (
      <StoryInvisibilityBlindness
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
