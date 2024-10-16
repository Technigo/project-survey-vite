// src/components/Summary

export const Summary = ({ activity, musicYesNo, happySong }) => {
  return (
    <>
      <h2>Survey Summary</h2>
      <p>{activity} is your mood-boosting activity. Music {musicYesNo === 'yes' ? 'is' : 'is not'} making you happy, and if ever you’re down - listen to {happySong}.</p> 
    </>
  )
}