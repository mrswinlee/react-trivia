import React from "react";
import "./QuizView.css";
import { useNavigate } from "react-router-dom";

function QuizView({
  questions,
  currentQuestion,
  setCurrentQuestion,
  handleAnswerClick,
}) {
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate("/scoreview");
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <>
      <div className="question">
        <div className="question-number">
          <span>
            Question {currentQuestion + 1} / {questions.length}
          </span>
        </div>
        <div className="question-text">
          {questions[currentQuestion].question}
        </div>
      </div>
      <div className="answer">
        {questions[currentQuestion].answers.map(({ text, isCorrect }) => (
          <button key={text} onClick={() => handleAnswerClick(isCorrect)}>
            {text}
          </button>
        ))}
        <div className="next-back">
          <button onClick={handleNext}>next</button>
          <button onClick={handleBack}>back</button>
        </div>
      </div>
    </>
  );
}

export default QuizView;
