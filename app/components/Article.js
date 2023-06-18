export default function Article({
  score,
  questionNum,
  showPlayAgainButton,
  active,
  onPlayAgain,
}) {
  /* Initialize the default feedback text */
  let feedbackText =
    "First select Category and Difficulty level, then press Start";

  /* Update the feedback text when the game is over 
    Update the feedback text during an active game
    */
  if (showPlayAgainButton) {
    feedbackText = `Game over! Final Score: ${score}/${questionNum}. Press "Play again" to have another try`;
  } else if (active) {
    feedbackText = `Score: ${score}/${questionNum}`;
  }

  return (
    <article>
      <h4 id="feedback">{feedbackText}</h4>
      {showPlayAgainButton && (
        <button id="again" onClick={onPlayAgain}>
          Play Again
        </button>
      )}
    </article>
  );
}
