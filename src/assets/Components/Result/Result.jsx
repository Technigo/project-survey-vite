export const Result = ({ coffee, cups, reason, time }) => {
  return (
    <div className="resultWrapper">
      <p>{coffee} is your favourite Coffee ☕</p>
      <p>You drink {cups} of coffee per day!</p>
      <p>You drink coffee for {reason} </p>
      <p>{time} it`s your preferred time slot to enjoy a coffee!</p>
      <h3>Thank you for taking part of this survey!</h3>
    </div>
  )
}
