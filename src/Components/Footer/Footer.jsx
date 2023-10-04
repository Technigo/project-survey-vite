import style from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerText}>
        <p className={style.names}>Created by Elba Cacan, Mikael Öling, and Sakura Tanaka</p>
        <p>© Customer Survey</p>
      </div>
    </footer>
  );
};
