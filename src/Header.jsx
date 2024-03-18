import "./Header.css"

export const Header = () => {
  return (
    <header className="header">
      <h1 onClick={() => location.reload()}>Surprise Holiday</h1>
      <h2>by Alma and Linda</h2>
    </header>
  )
}
