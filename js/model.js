import { getJSON } from "./helpers.js";

export const state = {
  questions: "",
  page: 1,
  resultsPerPage: 1,
  correctAnswer: "",
  score: 0,
  done: false,
  restarted: false,
};

const apiKey = "5i5bYGliQcGzqZnfNYTvJ61Wb1zVzIu0s29fsRbg";
const category = "Linux";
let correctAnswer;

function transformQuestion(data) {
  return {
    question: data.question,
    optionA: data.answers.answer_a,
    optionB: data.answers.answer_b,
    optionC: data.answers.answer_c,
    optionD: data.answers.answer_d,
    optionE: data.answers.answer_e,
    category: data.category,
    level: data.difficulty,
    explanation: data.explanation,
    isCorrectA: data.correct_answers.answer_a_correct,
    isCorrectB: data.correct_answers.answer_b_correct,
    isCorrectC: data.correct_answers.answer_c_correct,
    isCorrectD: data.correct_answers.answer_d_correct,
    isCorrectE: data.correct_answers.answer_e_correct,
    correctAnswer: getCorrectAnswer(data.correct_answers),
    correctAnswerChar: correctAnswer[7].toUpperCase(),
    isCorrect: false,
    selectedOption: "",
    selectedAnswer: "",
    answered: false,
  };
}

function getCorrectAnswer(correctAnswers) {
  for (const key in correctAnswers) {
    if (correctAnswers[key] === "true") {
      correctAnswer = key;
      break;
    }
  }
  return correctAnswer;
}

export const loadQuestions = async function (number, level, topic) {
  try {
    const data = await getJSON(
      `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=${number}&category=${topic}&difficulty=${level}`
    );

    state.questions = data.map(transformQuestion);
  } catch (error) {
    throw error;
  }
};

export const getQuestionsByPage = function (page = state.page) {
  state.page = page;
  const start = (page - 1) * 1;
  const end = page * 1;

  return state.questions.slice(start, end);
};
