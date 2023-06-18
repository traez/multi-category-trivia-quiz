import { useEffect, useState } from "react";
import { startDataArray } from "../libs/startData";

export default function Section({
  question,
  correctAns,
  incorrectAns0,
  incorrectAns1,
  incorrectAns2,
  questionNum,
  score,
  setScore,
  setActive,
  setShowPlayAgainButton,
  setDisableNextButton,
}) {

  /* Set the default question text to either the current question or the first element of startDataArray */
  const questionText = question || startDataArray[0];

  /* Initialize state variables */
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [shuffledAnswers, setShuffledAnswers] = useState(startDataArray[1]);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

    /* 
Create an array of all answers
Shuffle the array of answers
Set the shuffled answers and enable the buttons
*/
  useEffect(() => {
    if (question) {
      const answers = [correctAns, incorrectAns0, incorrectAns1, incorrectAns2];
      const shuffled = shuffleArray(answers);
      setShuffledAnswers(shuffled);
      setButtonsDisabled(false);
    }
  }, [question, correctAns, incorrectAns0, incorrectAns1, incorrectAns2]);

      /* 
Set the shuffled answers to the initial set of answers when the question text is the same as the initial question text
*/
  useEffect(() => {
    if (questionText === startDataArray[0]) {
      setShuffledAnswers(startDataArray[1]);
    } 
  }, [questionText]);

        /* 
Increase the score if the selected answer is correct
Disable the game and show the play again button if it's the last question
*/
  const handleAnswerSelect = (event) => {
    setSelectedAnswer(event.target.value);
    setButtonsDisabled(true);

    if (event.target.value === correctAns) {
      setScore(score + 1);
    }

    if (questionNum === 5) {
      setActive(false);
      setShowPlayAgainButton(true);
      setDisableNextButton(true);
    }
  };

/* Helper function to shuffle an array */
  function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  return (
    <section>
      <h2 id="numbah2">
        Question <span id="numba">{questionNum}</span>
      </h2>
      <h3 id="question">{questionText}</h3>
      <ul>
        {shuffledAnswers.map((ans, index) => {
          const isCorrect = ans === correctAns;
          const isSelected = selectedAnswer === ans;
          const liClassName = isSelected
            ? isCorrect
              ? "correct"
              : "incorrect"
            : "";

          return (
            <li key={index} className={liClassName}>
              <label>
                {ans}
                <input
                  id={`option-${index}`}
                  type="radio"
                  name="quiz"
                  value={ans}
                  checked={isSelected}
                  onChange={handleAnswerSelect}
                  disabled={buttonsDisabled}
                />
              </label>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
