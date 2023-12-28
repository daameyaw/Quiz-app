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
    // Add other properties as needed
  };
}

export const loadQuestions = async function (number, level) {
  const respond = await fetch(
    `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=${number}&category=${category}&difficulty=${level}`
  );

  const daTa = await respond.json();

  const [data] = daTa;
  console.log(daTa);
  if (data && data.questions && Array.isArray(data.questions)) {
    // Assuming the API response has a property 'questions' that is an array
    const transformedQuestions = data.questions.map(transformQuestion);

    // Now state.questions is an array of transformed questions
    state.questions = transformedQuestions;

    console.log(state.questions);
  } else {
    // Handle the case where the API response doesn't have the expected structure
    console.error("Invalid API response structure:", data);
  }
};
