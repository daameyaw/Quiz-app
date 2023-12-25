const apiKey = "5i5bYGliQcGzqZnfNYTvJ61Wb1zVzIu0s29fsRbg";
// const limit = 30;
const category = "Linux";
// const difficulty = "easy";

export const loadQuestions = async function (number, level) {
  const respond = await fetch(
    `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=${number}&category=${category}&difficulty=${level}`
  );

  const data = await respond.json();
  console.log(data);
};
// fetch(
//   `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=${limit}&category=${category}&difficulty=${difficulty}`
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error fetching data:", error));
