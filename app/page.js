"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Article from "./components/Article";
import Footer from "./components/Footer";
import fetchQA from "./libs/fetchQA";
import decode from "./libs/decode";

/* State variables */
export default function Home() {
  const [category, setCategory] = useState("");
  const [categoryIndex, setCategoryIndex] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [active, setActive] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [question, setQuestion] = useState("");
  const [correctAns, setCorrectAns] = useState("");
  const [incorrectAns0, setIncorrectAns0] = useState("");
  const [incorrectAns1, setIncorrectAns1] = useState("");
  const [incorrectAns2, setIncorrectAns2] = useState("");
  const [questionNum, setQuestionNum] = useState(1);
  const [score, setScore] = useState(0);
  const [showPlayAgainButton, setShowPlayAgainButton] = useState(false);
  const [disableNextButton, setDisableNextButton] = useState(false);

  /* Event handlers */
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setCategoryIndex(event.target.selectedIndex);
  };

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  /* Fetch data from API and update state variables */
  async function fetchData() {
    try {
      const data = await fetchQA(category, difficulty, categoryIndex);
      setFeedback(data);
      decode(
        data,
        setQuestion,
        setCorrectAns,
        setIncorrectAns0,
        setIncorrectAns1,
        setIncorrectAns2
      );
    } catch (error) {
      setFeedback(null);
    }
  }

  /* Fetch data when the active state, category, difficulty, or categoryIndex changes */
  useEffect(() => {
    if (active) {
      fetchData();
      setShowPlayAgainButton(false);
    }
  }, [active, category, difficulty, categoryIndex]);

  /* Activate the game when category and difficulty are selected */
  const activeFunction = () => {
    if (category && difficulty) {
      setActive(true);
    }
  };

  /* Event handler for the next question button */
  const handleNextQuestion = () => {
    fetchData();
    setQuestionNum(questionNum + 1);
  };

  /* Reset the game state variables */
  const resetGame = () => {
    setCategory("");
    setCategoryIndex("");
    setDifficulty("");
    setActive(false);
    setFeedback("");
    setQuestion("");
    setCorrectAns("");
    setIncorrectAns0("");
    setIncorrectAns1("");
    setIncorrectAns2("");
    setQuestionNum(1);
    setScore(0);
    setShowPlayAgainButton(false);
    setDisableNextButton(false);
  };

  /* Log feedback and correct answer to the console */
  console.log(feedback, correctAns);

  return (
    <main>
      <Header
        onActive={activeFunction}
        category={category}
        difficulty={difficulty}
        onCategoryChange={handleCategoryChange}
        onDifficultyChange={handleDifficultyChange}
        onHandleNextQuestion={handleNextQuestion}
        disableNextButton={disableNextButton}
        active={active}
        showPlayAgainButton={showPlayAgainButton}
      />
      <Section
        question={question}
        correctAns={correctAns}
        incorrectAns0={incorrectAns0}
        incorrectAns1={incorrectAns1}
        incorrectAns2={incorrectAns2}
        questionNum={questionNum}
        score={score}
        setScore={setScore}
        setActive={setActive}
        setShowPlayAgainButton={setShowPlayAgainButton}
        setDisableNextButton={setDisableNextButton}
      />
      <Article
        score={score}
        questionNum={questionNum}
        showPlayAgainButton={showPlayAgainButton}
        active={active}
        onPlayAgain={resetGame}
      />
      <Footer />
    </main>
  );
}
