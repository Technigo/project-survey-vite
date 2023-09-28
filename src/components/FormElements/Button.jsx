// Component for button, to allow it to be reused multiple times in the application. Takes in three props, an onClick, a text prop and a name for long or short class (from CSS).
export const Button = ({ onClick, text, longOrShortClass }) => {
    return (
        <div>
            {/* Text and the onclick is passed as props so that it can be either the default ("Next") or changed dynamically late, for example when restarting game. */}
            <button className={`submit-btn ${longOrShortClass}`} onClick={onClick} type="submit">{text || 'Next'}</button>
        </div>
    )
}
