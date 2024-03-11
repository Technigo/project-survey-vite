import PropTypes from "prop-types";

export const TextInput = ({ value, updateSurveyData, valueKey, question }) => {
  // ユーザーが入力フィールドの値を変更した時に呼ばれる関数
  const handleChange = (event) => {
    // updateSurveyData 関数を使用して、アンケートの状態を更新
    // valueKey は更新するデータのキー、event.target.value は新しい入力値
    updateSurveyData(valueKey, event.target.value);
  };

  return (
    <div>
      <label htmlFor={valueKey}>{question}</label>
      <input type="text" id={valueKey} value={value} onChange={handleChange} />
    </div>
  );
};

// id と htmlFor 属性を使って、ラベルと入力フィールドの関連付けを行います。value はこの入力フィールドの現在の値。
//onChange イベントが発生した時（ユーザーがテキストを入力した時）、handleChange 関数が呼び出される

TextInput.propTypes = {
  value: PropTypes.string.isRequired, // 文字列であり、必須
  updateSurveyData: PropTypes.func.isRequired, // 関数であり、必須
  valueKey: PropTypes.string.isRequired, // 文字列であり、必須
  question: PropTypes.string.isRequired, // 文字列であり、必須
};
