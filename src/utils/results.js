
import scoreTable from "../data/scoreTable.json"
import pokemonTypes from "../data/pokemonTypes.json";

// ---------- Calculates the results of the better ranked types/habitas based on the scoreTable for each option selected by the user ---------- //
export const getResults = (formAnswers) => {

	// ----- Initializing the score for each type/habitat -----
	const score = {};

	// Creating the object
	pokemonTypes.forEach(type => {
		score[type] = 0;
	});

	// ----- Iterating through the user's answers to calculate the results for type/habitat -----
	Object.entries(formAnswers).forEach(([questionTitle, answer]) => {
		const questionOptions = scoreTable.find(scoreTableItem => scoreTableItem.question === questionTitle);
		if (!questionOptions) return // Color option

		const answerPoints = questionOptions.answers.find(a => a.value === answer);
		if (!answerPoints) return

		Object.entries(answerPoints.points).forEach(([type, points]) => {
			score[type] += points;
		})
	})

	// ----- Sorting the user's score from highest to lowest -----
	const sortedScore = Object.entries(score)
	.map(([type, points]) => ({ type, points }))
	.sort((a, b) => b.points - a.points);

	return sortedScore;
};
