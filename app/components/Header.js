export default function Header({
  onActive,
  category,
  difficulty,
  onCategoryChange,
  onDifficultyChange,
  onHandleNextQuestion,
  disableNextButton,
  active,
  showPlayAgainButton,
}) {
  /* Check if the Start button should be rendered */
  const shouldRenderStartButton = !active && !showPlayAgainButton;

  /* 
This block of code does the following:
shows Category select dropdown
shows Difficulty select dropdown
Render the Start button if not active and not showing the play again button
Render the Next Question button if not disabled and active
*/
  return (
    <header>
      <aside>
        <img src="./images/icon-bulb.png" alt="" id="icon-bulb" />
        <h1>Multi-Category Trivia Quiz</h1>
        <img src="./images/icon-scrabble.png" alt="" id="icon-scrabble" />
      </aside>
      <form>
        <nav>
          <select id="category" value={category} onChange={onCategoryChange}>
            <option value="">Select Category</option>
            <option value="9">General Knowledge</option>
            <option value="17">Science and Nature</option>
            <option value="18">Science Computers</option>
            <option value="27">Animals</option>
          </select>
          <select
            id="difficulty"
            value={difficulty}
            onChange={onDifficultyChange}
          >
            <option value="">Select Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </nav>
        <menu>
          {shouldRenderStartButton && (
            <button
              className="start-next"
              id="start"
              type="button"
              onClick={onActive}
            >
              Start
            </button>
          )}
          {!disableNextButton && active && (
            <button
              className="start-next"
              id="next"
              type="button"
              onClick={onHandleNextQuestion}
            >
              Next Question
            </button>
          )}
        </menu>
      </form>
    </header>
  );
}
