import { useState } from "react";
import { TextInput } from "./TextInput";
import { SelectOption } from "./SelectOption";
import { RadioButtons } from "./RadioButtons";
import { RangeSlider } from "./RangeSlider";
import { SurveySummary } from "./SurveySummary";

// SurveyForm コンポーネントを定義
export const SurveyForm = () => {
  // アンケートの回答データを管理するための状態（state）を設定
  const [surveyData, setSurveyData] = useState({
    tvShow: "",
    harryPotter: "",
    loudOrNoisy: "",
    goodKid: "",
    satisfaction: 50,
  });

  // 現在のアンケートのステップを管理する状態？？
  const [currentStep, setCurrentStep] = useState(1);

  // アンケートが提出されたかどうかを管理する状態？？
  const [submit, setSubmit] = useState(false);

  // アンケートデータを更新する関数？？
  const updateSurveyData = (field, value) => {
    setSurveyData((values) => ({ ...values, [field]: value }));
  };

  // 「次へ」ボタンを押した時に呼ばれる関数
  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  // 「戻る」ボタンを押した時に呼ばれる関数
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // アンケートを提出
  const submitSurvey = () => {
    setSubmit(true); // アンケートが提出されたことを示す状態をtrueに設定
  };

  // アンケートの質問とそれに対応するコンポーネントの設定
  const steps = [
    {
      Component: TextInput,
      valueKey: "tvShow",
      question: "What’s your guilty pleasure TV show?",
      answerRequired: true,
    },
    {
      Component: SelectOption,
      valueKey: "harryPotter",
      question: "Which Harry Potter house best describes your values?",
      options: [
        { name: "Gryffindor for bravery", valueKey: "gryffindor" },
        { name: "Hufflepuff for patience", valueKey: "hufflepuff" },
        { name: "Ravenclaw for wit", valueKey: "ravenclaw" },
        { name: "Slytherin for ambition", valueKey: "slytherin" },
      ],
      answerRequired: true,
    },
    {
      Component: RadioButtons,
      valueKey: "loudOrNoisy",
      question: "Loud talker or a noisy eater?",
      options: [
        { name: "Loud talker", valueKey: "loud" },
        { name: "Noisy eater", valueKey: "noisy" },
      ],
      answerRequired: true,
    },
    // レンジスライダー
    {
      Component: RangeSlider,
      valueKey: "satisfaction",
      question: "How satisfied are you with our service?",
      min: 0,
      max: 100,
      step: 1,
      answerRequired: true,
    },
  ];

  // フォームの提出を扱う関数？？
  const handleSubmit = (event) => {
    event.preventDefault(); // refresh thing??
  };

  // アンケートの現在のステップに応じたコンポーネントを描画？？
  const currentStepDetails = steps[currentStep - 1];

  return (
    <>
      {submit ? (
        // アンケートが提出された場合、サマリーを表示？？
        <SurveySummary surveyData={surveyData} />
      ) : (
        // アンケートが提出されていない場合、フォームを表示
        <form onSubmit={handleSubmit}>
          <div>
            {/* 現在のステップの質問コンポーネントを描画します？？ */}
            <currentStepDetails.Component
              value={surveyData[currentStepDetails.valueKey]}
              updateSurveyData={updateSurveyData}
              {...currentStepDetails}
            />
          </div>
          <div>
            {/* 「戻る」ボタン（最初のステップ以外で表示） */}
            {currentStep > 1 && <button onClick={prevStep}>Back</button>}
            {/* 「次へ」または「提出」ボタン（ステップに応じて） */}
            {currentStep < steps.length ? (
              <button onClick={nextStep}>Continue</button>
            ) : (
              <button onClick={submitSurvey}>Submit</button>
            )}
          </div>
        </form>
      )}
    </>
  );
};
