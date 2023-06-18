<section>
<h2 id="numbah2">
  Question <span id="numba">1</span>
</h2>
<h3 id="question">{startDataArray[0]}</h3>
<ul>
  {startDataArray[1].map((color, index) => (
    <li key={index}>
      <label>
        {color}
        <input id={`option-${index}`} type="radio" name="quiz" />
      </label>
    </li>
  ))}
</ul>
</section>