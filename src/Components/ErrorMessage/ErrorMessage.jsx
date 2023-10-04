import style from "./ErrorMessage.module.css";
export const ErrorMessage = ({ error }) => {
  return (
    <>
      <div className={style.text}>
        {error.isFailed && <p className={style.text}>{error.message}</p>}
      </div>
    </>
  );
};
