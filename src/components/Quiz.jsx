import React from "react";
import QuizView from "./QuizView";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Quiz = ({ score, setScore }) => {
  const navigate = useNavigate();
  const questions = [
    {
      question: "Which is not a type of tissue?",
      answers: [
        { text: "epithelial" },
        { text: "connective" },
        { text: "muscle" },
        { text: "nerves", isCorrect: true },
      ],
    },
    {
      question: "The adult human skeleton is made up of how many bones?",
      answers: [
        { text: "206", isCorrect: true },
        { text: "350" },
        { text: "280" },
        { text: "185" },
      ],
    },
    {
      question: "Which is not part of the digestive system?",
      answers: [
        { text: "mouth" },
        { text: "heart", isCorrect: true },
        { text: "large intestine" },
        { text: "stomach" },
      ],
    },
    {
      question:
        "Which of the following is not true about the cardiovascular system?",
      answers: [
        { text: "carries oxygen, nutrients, and hormones to cells" },
        { text: "removes waste products like carbon dioxide" },
        {
          text: "arteries carry blood away from the heart and veins carry blood back to the rest of the body",
          isCorrect: true,
        },
        {
          text: "arteries carry blood away from the heart and veins carry blood back to the rest of the heart",
        },
      ],
    },
    {
      question: "What does DNA stand for?",
      answers: [
        { text: "Deoxyribonucleic acid", isCorrect: true },
        { text: "Deoxyribonucleic adenosine" },
        { text: "D-ribo Nucleic Acid" },
        { text: "none of the above" },
      ],
    },
    {
      question: "What is the main gas that makes up the earth's atmosphere?",
      answers: [
        { text: "carbon" },
        { text: "oxygen" },
        { text: "nitrogen", isCorrect: true },
        { text: "hydrogen" },
      ],
    },
    {
      question: "How many vertebrae does a human have?",
      answers: [
        { text: "22" },
        { text: "11" },
        { text: "33", isCorrect: true },
        { text: "none of the above" },
      ],
    },
    {
      question: "What is the heaviest organ in a human?",
      answers: [
        { text: "skin", isCorrect: true },
        { text: "heart" },
        { text: "lungs" },
        { text: "liver" },
      ],
    },
    {
      question: "How many states of matter are there?",
      answers: [
        { text: "4", isCorrect: true },
        { text: "3" },
        { text: "2" },
        { text: "1" },
      ],
    },
    {
      question: "Which is not a function of skeleton?",
      answers: [
        { text: "gives body shape" },
        { text: "movement" },
        { text: "protection" },
        { text: "produce hormones", isCorrect: true },
      ],
    },
    {
      question: "Which is the largest planet in our solar system?",
      answers: [
        { text: "Mars" },
        { text: "Neptune" },
        { text: "Jupiter", isCorrect: true },
        { text: "Sun" },
      ],
    },
    {
      question: "Which is the most abundant element in the universe?",
      answers: [
        { text: "Helium" },
        { text: "Hydrogen", isCorrect: true },
        { text: "Carbon" },
        { text: "Oxygen" },
      ],
    },
    {
      question: "What is the hardest natural substance on Earth?",
      answers: [
        { text: "Gold" },
        { text: "Diamond", isCorrect: true },
        { text: "Iron" },
        { text: "Carbon" },
      ],
    },
    {
      question:
        "In physics, for every action there is an equal and opposite what?",
      answers: [
        { text: "distraction" },
        { text: "reaction", isCorrect: true },
        { text: "force" },
        { text: "none of the above" },
      ],
    },
    {
      question: "What causes dew?",
      answers: [
        { text: "evaporation", isCorrect: true },
        { text: "condensation" },
        { text: "transpiration" },
        { text: "precipitation" },
      ],
    },
    {
      question:
        "The layer of the atmosphere in which weather occurs is called the:",
      answers: [
        { text: "mesosphere" },
        { text: "stratosphere" },
        { text: "Troposphere", isCorrect: true },
        { text: "ionosphere" },
      ],
    },
    {
      question: "What is the study of fungi?",
      answers: [
        { text: "phycology" },
        { text: "virology" },
        { text: "mushroomology" },
        { text: "mycology", isCorrect: true },
      ],
    },
    {
      question: "Group 18 of the periodic table is made up of which elements?",
      answers: [
        { text: "noble gases", isCorrect: true },
        { text: "halogens" },
        { text: "metals" },
        { text: "alkali metals" },
      ],
    },
    {
      question: "Which of these chemicals help fruit to ripen?",
      answers: [
        { text: "methane" },
        { text: "carbon dioxide" },
        { text: "ethylene", isCorrect: true },
        { text: "nitrogen oxide" },
      ],
    },
    {
      question: "What is NaCl?",
      answers: [
        { text: "table salt", isCorrect: true },
        { text: "silver" },
        { text: "gold" },
        { text: "iron" },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    const next = currentQuestion + 1;
    if (next < questions.length) setCurrentQuestion(next);
    else {
      setIsQuizOver(true);
      navigate("/scoreview");
      handleResetClick();
    }
  };

  const handleResetClick = () => {
    setCurrentQuestion(0);
    setIsQuizOver(false);
  };
  return (
    <div>
      <QuizView
        questions={questions}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        handleAnswerClick={handleAnswerClick}
      />
      {/* )} */}
    </div>
  );
};

export default Quiz;
