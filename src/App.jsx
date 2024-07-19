import Home from "./views/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SurveyView from "./views/SurveyView";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey" element={<SurveyView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
