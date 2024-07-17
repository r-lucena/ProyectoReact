import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { themeJson } from "./theme";
import "./SurveyForm.css";
import { json } from "./json";
import { useEffect, useState } from "react";
import useFetchFree from "../Fetch-freeToGame/useFetchFree"

function SurveyComponent() {
  const [surveyResult, setSurveyResult] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [surveyModel, setSurveyModel] = useState(null);

  const {data, loading, error} = useFetchFree()

  useEffect(() => {
    const survey = new Model(json);
    survey.applyTheme(themeJson);
    survey.onComplete.add((sender, options) => {
      console.log(sender.data);
      setSurveyResult(sender.data);
      setIsCompleted(true);
      console.log(isCompleted);
    });

    setSurveyModel(survey)
  }, []);

  // useEffect(()=>{
  //   setSurveyResult(result)
  // },[])

  return (
    <div>
      <div className="survey-wrapper">
        {surveyModel && <Survey model={surveyModel} />}
      </div>
      {isCompleted && (
        <div className="survey-result">{JSON.stringify(surveyResult)}</div>
      )}
    </div>
  );
}

export default SurveyComponent;
