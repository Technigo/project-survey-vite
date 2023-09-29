import "./ProgressBar.css"

export const ProgressBar = ({counter, totalCount}) => {
  return (
    <div className="progress-bar" >
        <div style={{ width: `${(counter / totalCount) * 100}%` }} />
    </div>
  )
}
