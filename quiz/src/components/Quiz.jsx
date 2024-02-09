import { useState, useCallback } from "react";

import QUESTIONS from "../questions.js";
import Timer from "./Timer.jsx";
QUESTIONS.sort(() => Math.random() - 0.5);

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answer, setAnswer] = useState("");
  var score = 0;
  const activeQuestionIndex = userAnswers.length;
  const quixCompleted = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAns = useCallback((selectedAns, e) => {
    console.log("e.target", e.target);
    e.target.style.backgroundColor = "yellow";
    setUserAnswers((prev) => {
      return [...prev, selectedAns];
    });

    setTimeout(() => {}, 1000);
    if (selectedAns === QUESTIONS[activeQuestionIndex].answers[0]) {
      setAnswer("correct");
      setScore = score + 1;
    }else{
        setAnswer('wrong')
    }
    console.log("score", score);
    e.target.style.backgroundColor =
      selectedAns === QUESTIONS[activeQuestionIndex].answers[0]
        ? "green"
        : "red";
  }, [activeQuestionIndex]);

  const handleSkipAns = useCallback(
    () => handleSelectAns(null),
    [handleSelectAns]
  );

  if (quixCompleted) {
    return (
      <div id="summary">
        <h2>Completed</h2>
      </div>
    );
  }
  const shuffeledOpts = [...QUESTIONS[activeQuestionIndex].answers];
  shuffeledOpts.sort(() => Math.random() - 0.5);
  return (
    <>
      <div id="quiz">
        <div id="question">
          <Timer
            key={activeQuestionIndex}
            timeout={10000}
            onTimeout={() => handleSelectAns(null)}
          />
          <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
          <ul id="answers">
            {shuffeledOpts.map((ans) => (
              <li key={ans} className="answer">
                <button onClick={(e) => handleSelectAns(ans, e)}>{ans}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
