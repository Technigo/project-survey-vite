// function to submit the form itself
export const CreateStoryBoard = ({ formData }) => {

    console.log(formData);
    const storyData =

        <container className="story-page">
            <h1>{formData.name} and the Enchanted Pumpkin Patch</h1>

            <p>In a {formData.townAdjective} town nestled among autumn hills, a fluffy cat named {formData.name} had a taste for adventure. Fall arrived, and with it came tales of the Enchanted Pumpkin Patch, whispered secrets among the elder cats.</p>

            <p>One moonlit night, {formData.name} set out to find it. Guided by the full moon, the cat wandered through rustling leaves and {formData.journeyMood}. Eventually, it stumbled upon a clearing bathed in moonlight, filled with enormous, {formData.pumpkinAdjective} pumpkins.</p>

            <p>{formData.name} touched the largest pumpkin, and it transformed into {formData.pumpkinPatchCharacter.charAt(0).toLowerCase() + formData.pumpkinPatchCharacter.slice(1)}. "I can grant one wish," it said. {formData.name} wished for {formData.wishChoice} and laughter for the town's cats. {formData.pumpkinPatchCharacter} granted {formData.name}'s wish, and the patch came alive with happiness.</p>

            <p>Cats from all around visited, and content purring filled the air. Watching from home, {formData.name} realized the essence of fall's magic—bringing joy to others. The Enchanted Pumpkin Patch became a cherished tradition, a tale told for generations from cat to kitten.</p>
        </container>

    return (storyData)
};
