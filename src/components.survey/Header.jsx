

export const Header = ({ onStartSurvey }) => {
  return (
      <div className="header-container">
        <h1>A Day in the Life of an ADHDer</h1>
        <p>Welcome to our lighthearted survey designed to explore the quirks and nuances of living with ADHD! Whether you're a self-proclaimed multitasker extraordinaire or find yourself easily distracted by shiny objects, we invite you to share your experiences with us. This survey aims to capture the humor and relatability of navigating life with ADHD, so sit back, relax, and let's embark on this humorous journey together! 🚀</p>
        <br/>
        <button onClick={onStartSurvey}>Start survey</button>
      </div>
  )
}