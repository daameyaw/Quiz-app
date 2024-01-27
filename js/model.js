import { getJSON } from "./helpers.js";

export const state = {
  questions: [],
};

const apiKey = "5i5bYGliQcGzqZnfNYTvJ61Wb1zVzIu0s29fsRbg";
// const limit = 30;
const category = "Linux";
// const difficulty = "easy";
let transformedQuestions;

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
    isCorrectA: data.correct_answers.answer_a_correct,
    isCorrectB: data.correct_answers.answer_b_correct,
    isCorrectC: data.correct_answers.answer_c_correct,
    isCorrectD: data.correct_answers.answer_d_correct,
    isCorrectE: data.correct_answers.answer_e_correct,

    // Add other properties as needed
  };
}

export const loadQuestions = async function (number, level) {
  try {
    const data = await getJSON(
      `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=${number}&category=${category}&difficulty=${level}`
    );

    console.log(data);

    transformedQuestions = data.map(transformQuestion);

    state.questions = [...transformedQuestions];

    console.log(transformedQuestions);
  } catch (error) {
    throw error;
  }
};
