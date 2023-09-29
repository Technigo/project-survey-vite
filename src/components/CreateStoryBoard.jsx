import "../css-components/CreateStoryBoard.css"


// function to submit the form itself

export const CreateStoryBoard = ({ formData }) => {

    console.log(formData);
    const storyData =

        <container className="story-page">
            <h1>{formData.name} and the Enchanted Pumpkin Patch</h1>

            <p>In a <span className="town">{formData.townAdjective}</span> town nestled among autumn hills, a fluffy cat named <span className="name">{formData.name}</span> had a taste for adventure. Fall arrived, and with it came tales of the Enchanted Pumpkin Patch, whispered secrets among the elder cats.</p>

            <p>One moonlit night, <span className="name">{formData.name}</span> set out to find it. Guided by the full moon, the cat wandered through rustling leaves and <span className="journey-mood">{formData.journeyMood}</span>. Eventually, it stumbled upon a clearing bathed in moonlight, filled with enormous, <span className="pumpkin-adjective">{formData.pumpkinAdjective}</span> pumpkins.</p>

            <p><span className="name">{formData.name}</span> touched the largest pumpkin, and it transformed into <span className="mysterious-character">{formData.pumpkinPatchCharacter.charAt(0).toLowerCase() + formData.pumpkinPatchCharacter.slice(1)}</span>. "I can grant one wish," it said. <span className="name">{formData.name}</span> wished for <span className="wish">{formData.wishChoice}</span> and laughter for the town's cats. <span className="mysterious-character">{formData.pumpkinPatchCharacter}</span> granted <span className="name">{formData.name}</span>'s wish, and the patch came alive with happiness.</p>

            <p>Cats from all around visited, and content purring filled the air. Watching from home, <span className="name">{formData.name}</span> realized the essence of fall's magic—bringing joy to others. The Enchanted Pumpkin Patch became a cherished tradition, a tale told for generations from cat to kitten.</p>
        </container>

    return (storyData)
};
