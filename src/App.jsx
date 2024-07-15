import Home from "./views/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SurveyComponent from "./components/surveyForm/SurveyComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey" element={<SurveyComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
