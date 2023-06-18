export default async function decode(data, setQuestion, setCorrectAns, setIncorrectAns0, setIncorrectAns1, setIncorrectAns2) {

  let questionP = data.results[0].question;
  let txtQP = document.createElement("textarea");
  txtQP.innerHTML = questionP;
  setQuestion(txtQP.value);

  let correctAnsP = data.results[0].correct_answer;
  let txtCP = document.createElement("textarea");
  txtCP.innerHTML = correctAnsP;
  setCorrectAns(txtCP.value);

  let incorrectAns0 = data.results[0].incorrect_answers[0];
  let txtIP0 = document.createElement("textarea");
  txtIP0.innerHTML = incorrectAns0;
  setIncorrectAns0(txtIP0.value);

  let incorrectAns1 = data.results[0].incorrect_answers[1];
  let txtIP1 = document.createElement("textarea");
  txtIP1.innerHTML = incorrectAns1;
  setIncorrectAns1(txtIP1.value);

  let incorrectAns2 = data.results[0].incorrect_answers[2];
  let txtIP2 = document.createElement("textarea");
  txtIP2.innerHTML = incorrectAns2;
  setIncorrectAns2(txtIP2.value);
}

/*
function
*/
