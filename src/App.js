import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ScoreView from "./components/ScoreView";
import { useState } from "react";

import Quiz from "./components/Quiz";

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Quiz score={score} setScore={setScore} />}
          />

          <Route
            path="/scoreview"
            element={<ScoreView score={score} setScore={setScore} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
