
export const Story = ({ formData }) => {
    return (
        <container>
            <div className="story-container">
                <h1>{formData.name}´s Halloween Story!</h1>
                <p>Once upon a chilling Halloween night, a brave soul named {formData.name} embarked on a spine-tingling adventure. With a lantern in hand and {formData.number} loyal companions by their side, they set out into the {formData.setLocation}, where the air was thick with anticipation.

                    The {formData.chooseWeather} sky above cast an eerie glow on the twisted trees of the dark forest. Shadows danced, and whispers of the {formData.chooseAntagonist} sent shivers down their spine. Armed with a trusty {formData.chooseSound}, they pressed on, their hearts pounding like a drumbeat in the night.

                    As they ventured deeper, the sound of rustling leaves and ghostly murmurs filled the air. It wasn't long before they encountered their first {formData.number} mysterious creatures, their eyes gleaming with curiosity. With a steady hand, they offered treats and made new friends amongst the supernatural.

                    With each step, their courage grew, and the night unfolded like a bewitched tale. Finally, as the moon reached its zenith, they stumbled upon an enchanted clearing where a grand Halloween party was in full swing. Ghosts, ghouls, and witches danced under the silvery light.

                    With the help of their trusty {formData.chooseSound}, they joined in the revelry, laughter echoing into the night. As the clock struck midnight, the Halloween magic reached its peak, and a burst of fireworks painted the sky.

                    The night had transformed from a chilling adventure into a heartwarming celebration. With their new friends, they watched the spectacle unfold, grateful for the memories they had made on this unforgettable Halloween night.

                    As dawn broke and the party came to an end, they bid farewell to their newfound companions and made their way home, hearts aglow with the magic of Halloween. In the end, it was a night filled with both spooky thrills and heartwarming connections—a Halloween tale they would cherish forever.</p>
            </div>

        </container >
    )
}

