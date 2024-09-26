import style from "./SubmitButton.module.css";
export const SubmitButton = ({ text, onClickEvent, url }) => {
  console.log(url);
  return (
    <>
      {url ? (
        <a href={url} target="_blank" rel="noreferrer">
          <button className={style.button}>{text}</button>
        </a>
      ) : (
        <button className={style.button} onClick={onClickEvent}>
          {text}
        </button>
      )}
    </>
  );
};
