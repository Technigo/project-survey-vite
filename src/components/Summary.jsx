// src/components/Summary

export const Summary = ({ activity, musicYesNo, happySong }) => {
  return (
    <div className="summary-container">
      <h3>{activity} is your mood-boosting activity. Music {musicYesNo === 'yes' ? 'is' : 'is not'} making you happy, and if ever you’re down - listen to {happySong}.</h3> 
    </div>
  )
}