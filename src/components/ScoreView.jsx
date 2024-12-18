import React from "react";
import "./ScoreView.css";
import { Link } from "react-router-dom";

function ScoreView({ handleResetClick, score }) {
  return (
    <div>
      <p>You scored {score} out of 20</p>
      <Link to="/" className="reset">
        Try Again
      </Link>
    </div>
  );
}

export default ScoreView;
