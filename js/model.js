export const state = {
  questions: {},
};

/*
answers
: 
{answer_a: 'kubectl ps node my-node', answer_b: 'kubectl resources node my-node', answer_c: 'kubectl top node my-node', answer_d: 'kubectl uptime node my-node', answer_e: null, …}
category
: 
"Linux"
correct_answer
: 
"answer_a"
correct_answers
: 
{answer_a_correct: 'false', answer_b_correct: 'false', answer_c_correct: 'true', answer_d_correct: 'false', answer_e_correct: 'false', …}
description
: 
null
difficulty
: 
"Easy"
explanation
: 
null
id
: 
745
multiple_correct_answers
: 
"false"
question
: 
"How to show the metrics for a given node in Kubernetes?"
*/
const apiKey = "5i5bYGliQcGzqZnfNYTvJ61Wb1zVzIu0s29fsRbg";
// const limit = 30;
const category = "Linux";
// const difficulty = "easy";

function transformQuestion(data) {
  let correctOption;

  // Find the correct answer option
  ["A", "B", "C", "D", "E"].forEach((option) => {
    const isCorrectKey = `answer_${option.toLowerCase()}_correct`;
    if (data.correct_answers[isCorrectKey]) {
      correctOption = option.toLowerCase();
    }
  });
  console.log(correctOption);

  return {
    question: data.question,
    optionA: data.answers.answer_a,
    optionB: data.answers.answer_b,
    optionC: data.answers.answer_c,
    optionD: data.answers.answer_d,
    optionE: data.answers.answer_e,
    category: data.category,
    correctAnswer: data.correct_answer,
    level: data.difficulty,
    explanation: data.explanation,
    isCorrectA: data.correct_answers.answer_a_correct,
    isCorrectB: data.correct_answers.answer_b_correct,
    isCorrectC: data.correct_answers.answer_c_correct,
    isCorrectD: data.correct_answers.answer_d_correct,
    isCorrectE: data.correct_answers.answer_e_correct,

    // Add other properties as needed
  };
}

export const loadQuestions = async function (number, level) {
  const respond = await fetch(
    `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=${number}&category=${category}&difficulty=${level}`
  );

  const data = await respond.json();

  console.log(data);

  const transformedQuestions = data.map(transformQuestion);

  console.log(transformedQuestions);
};
