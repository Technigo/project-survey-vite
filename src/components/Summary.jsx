function Summary({ questions }) {
  const nameInput = questions.find(
    (question) => question.id === 1
  );
  const favoriteCharacterQuestion = questions.find(
    (question) => question.id === 2
  );
  const fashionAdmirerQuestion = questions.find(
    (question) => question.id === 3
  );
  const coffeeOrderQuestion = questions.find(
    (question) => question.id === 4
  );
  const memorableMomentQuestion = questions.find(
    (question) => question.id === 5
  );


  return (
    < div >
      <h2>Your &ldquo;Friends&rdquo; Persona:</h2>
      <p>
        Based on your survey responses <strong>{nameInput.answer}</strong>, we&rsquo;ve analyzed your &ldquo;Friends&rdquo; persona.
        Imagine you&rsquo;re sitting in Central Perk with your favorite character.
        Here&rsquo;s what your experience would be like:
      </p>
      <ul>
        <li>
          <strong>Favorite Character:</strong> {favoriteCharacterQuestion.answer} would be your partner in crime throughout your coffee shop adventures.
        </li>
        <li>
          <strong>Fashion Admirer:</strong> You admire the fashion sense of {fashionAdmirerQuestion.answer.join(', ')}. Looks like you appreciate style on a whole new level!
        </li>
        <li>
          <strong>Coffee Order:</strong> At Central Perk, you&rsquo;d order a {coffeeOrderQuestion.answer} to keep the conversation flowing.
        </li>
        <li>
          <strong>Memorable Moment:</strong> Your favorite &ldquo;Friends&rdquo; moment/quote: {memorableMomentQuestion.answer}. This moment adds a unique touch to your &ldquo;Friends&rdquo; experience, just like Phoebe&rsquo;s eccentricity or Joey&rsquo;s classic pick-up lines.
        </li>
      </ul>
      <p>Now, imagine the hilarious mishaps and heartwarming moments you&rsquo;d share with your &ldquo;Friends&rdquo; character over coffee. Enjoy your personalized &ldquo;Friends&rdquo; experience!</p>
      <img src="/friends.avif" alt="picture of all the friends" style={{ width: '100%', height: 'auto' }} />
    </div >

  );
}

export default Summary;
