import "./Footer.css"

export const Footer = () => {
    const footerText = "A Technigo Student Project by Anna Robertsson & Vera Witting";
    return (
        <footer>
            <div className="footerText">
                <p>{footerText}</p>
            </div>
        </footer>
    )
}