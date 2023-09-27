function Summary({ questions }) {
  const favoriteCharacterQuestion = questions.find(
    (question) => question.id === 1
  );
  const fashionAdmirerQuestion = questions.find(
    (question) => question.id === 2
  );
  const coffeeOrderQuestion = questions.find(
    (question) => question.id === 3
  );
  const memorableMomentQuestion = questions.find(
    (question) => question.id === 4
  );

  return (
    <div>
      <h2>Your "Friends" Persona:</h2>
      <p>
        Based on your survey responses, we've analyzed your "Friends" persona.
        Imagine you're sitting in Central Perk with your favorite character.
        Here's what your experience would be like:
      </p>
      <ul>
        <li>
          <strong>Favorite Character:</strong> {favoriteCharacterQuestion.answer} would be your partner in crime throughout your coffee shop adventures.
        </li>
        <li>
          <strong>Fashion Admirer:</strong> You admire the fashion sense of {fashionAdmirerQuestion.answer.join(', ')}. Looks like you appreciate style on a whole new level!
        </li>
        <li>
          <strong>Coffee Order:</strong> At Central Perk, you'd order a {coffeeOrderQuestion.answer} to keep the conversation flowing.
        </li>
        <li>
          <strong>Memorable Moment:</strong> Your favorite "Friends" moment/quote: {memorableMomentQuestion.answer}. This moment adds a unique touch to your "Friends" experience, just like Phoebe's eccentricity or Joey's classic pick-up lines.
        </li>
      </ul>
      <p>
        Now, imagine the hilarious mishaps and heartwarming moments you'd share with your "Friends" character over coffee. Enjoy your personalized "Friends" experience!
      </p>
    </div>
  );
}

export default Summary;
