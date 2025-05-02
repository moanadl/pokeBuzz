// ---------- Function do calculate the results of the better ranked types/habitas based on the scoreTable for each option selected by the user ---------- //
export const getResults = (formAnswers) => {

	// ----- Initializing the score for each type/habitat -----
	const score = [
		{
			type_habitat: 'bug',
			value: 0,
		},
		{
			type_habitat: 'dragon',
			value: 0,
		},
		{
			type_habitat: 'electric',
			value: 0,
		},
		{
			type_habitat: 'fairy',
			value: 0,
		},
		{
			type_habitat: 'fighting',
			value: 0,
		},
		{
			type_habitat: 'fire',
			value: 0,
		},
		{
			type_habitat: 'flying',
			value: 0,
		},
		{
			type_habitat: 'ghost',
			value: 0,
		},
		{
			type_habitat: 'grass',
			value: 0,
		},
		{
			type_habitat: 'ground',
			value: 0,
		},
		{
			type_habitat: 'ice',
			value: 0,
		},
		{
			type_habitat: 'normal',
			value: 0,
		},
		{
			type_habitat: 'poison',
			value: 0,
		},
		{
			type_habitat: 'psychic',
			value: 0,
		},
		{
			type_habitat: 'rock',
			value: 0,
		},
		{
			type_habitat: 'steel',
			value: 0,
		},
		{
			type_habitat: 'water',
			value: 0,
		},
		{
			type_habitat: 'cave',
			value: 0,
		},
		{
			type_habitat: 'forest',
			value: 0,
		},
		{
			type_habitat: 'grassland',
			value: 0,
		},
		{
			type_habitat: 'mountain',
			value: 0,
		},
		{
			type_habitat: 'roughTerrain',
			value: 0,
		},
		{
			type_habitat: 'sea',
			value: 0,
		},
		{
			type_habitat: 'urban',
			value: 0,
		},
		{
			type_habitat: 'waterEdges',
			value: 0,
		}
	];

	// ----- Score table for each Option of each Question of the Form -----
	// Colocar em ordem alfabética a pontuação
    const scoreTable = [
        {
			question: 'transportation',
			answers: [
				{ value: 'car', points: { ground: 1, normal: 3, roughTerrain: 1, urban: 3 } },
				{ value: 'airplane', points: { dragon: 2, flying: 3, psychic: 1, mountain: 1 } },
				{ value: 'ship', points: { ice: 3, water: 1, sea: 3, waterEdges: 2 } },
				{ value: 'train', points: { electric: 1, fairy: 1, fire: 1, ghost: 1, ground: 1, psychic: 1, rock: 1, steel: 1, cave: 2 } },
				{ value: 'byfoot', points: { bug: 1, fairy: 1, fighting: 1, grass: 1, ground: 1, poison: 1, rock: 1, cave: 1, forest: 1, grassland: 1 } },
			]
        },
        {
			question: 'setting',
			answers: [
				{ value: 'countryside', points: { bug: 2, grass: 2, ground: 1, forest: 2, grassland: 3 } },
				{ value: 'beach', points: { water: 2, sea: 3, waterEdges: 1 } },
				{ value: 'mountain', points: { dragon: 2, fire: 1, flying: 2, ice: 1, rock: 2, mountain: 3, roughTerrain: 2 } },
				{ value: 'city', points: { electric: 3, fighting: 2, ghost: 1, normal: 2, poison: 1, psychic: 1, urban: 3 } },
				{ value: 'cave', points: { fairy: 1, rock: 2, cave: 3 } }
			],
        },
        {
			question: 'naturalPhenomenon',
			answers: [
				{ value: 'volcano', points: { mountain: 3, fighting: 1, fire: 3, steel: 2 } },
				{ value: 'earthquake', points: { cave: 1, forest: 1, grassland: 1, bug: 1, grass: 1, ground: 3, rock: 2 } },
				{ value: 'tsunami', points: { sea: 3, waterEdges: 1, water: 2 } },
				{ value: 'hurricane', points: { dragon: 2, fairy: 1, flying: 3, psychic: 1 } },
				{ value: 'storm', points: { urban: 2, electric: 3, normal: 1, poison: 1 } },
				{ value: 'sandstorm', points: { roughTerrain: 2, ghost: 1 } },
				{ value: 'blizzard', points: { sea: 1, waterEdges: 2, ice: 3, water: 2 } },
			],
        },
        {
			question: 'activity',
			answers: [
				{ value: 'poolparty', points: { sea: 2, waterEdges: 3, ice: 1, water: 3 } },
				{ value: 'workout', points: { urban: 1, fighting: 3, steel: 2 } },
				{ value: 'circus', points: { fairy: 2, ghost: 2, poison: 1, psychic: 3 } },
				{ value: 'camping', points: { forest: 3, grassland: 2, grass: 2, bug: 3 } },
				{ value: 'stayinandchill', points: { urban: 3, normal: 2 } },
				{ value: 'rally', points: { roughTerrain: 3, electric: 1, fire: 1, ground: 3, rock: 2} },
				{ value: 'hiking', points: { cave: 1, mountain: 3 , roughTerrain: 3, dragon: 2, flying: 1, ground: 3, rock: 2} },
				
			],
        },
		{
			question: 'placeToChill',
			answers: [
				{ value: 'gym', points: { urban: 2, electric: 1, fighting: 3, rock: 1, steel: 2 } },
				{ value: 'cemetery', points: { cave: 1, poison: 3, ghost: 3, psychic: 2 } },
				{ value: 'mall', points: { urban: 3, electric: 2, steel: 1 } },
				{ value: 'pool', points: { sea: 2, waterEdges: 3, ice: 1, water: 3 } },
				{ value: 'library', points: { ghost: 1, normal: 2, psychic: 3 } },
				{ value: 'park', points: { forest: 2, grassland: 3, mountain: 1, roughTerrain: 1 } },
				{ value: 'sauna', points: { fire: 2 } }
			]
		},
        {
			question: 'taylorAlbum',
			answers: [
				{ value: 'debut', points: { electric: 1, grass: 3, forest: 2, grassland: 3, waterEdges: 2 } },
				{ value: 'fearlesstv', points: { electric: 1, fairy: 3, flying: 2, steel: 1, roughTerrain: 1} },
				{ value: 'speaknowtv', points: { dragon: 2, electric: 1, fairy: 2, fighting: 1, flying: 2, urban: 1} },
				{ value: 'redtv', points: { fire: 2, rock: 1, roughTerrain: 1} },
				{ value: '1989tv', points: { electric: 2, fighting: 1, flying: 1, ice: 1, water: 1, sea: 1, urban: 3} },
				{ value: 'reputation', points: { dragon: 2, electric: 2, fighting: 3, fire: 3, ice: 1, poison: 3, steel: 2, urban: 1} },
				{ value: 'lover', points: { electric: 3, fairy: 2, normal: 1, water: 1, sea: 1, urban: 2} },
				{ value: 'folklore', points: { bug: 2, fairy: 3, grass: 3, rock: 1, water: 2, cave: 2, forest: 3, grassland: 3, mountain: 1, waterEdges: 2 } },
				{ value: 'evermore', points: { bug: 2, electric: 1, fairy: 3, fire: 2, grass: 3, rock: 1, cave: 2, forest: 3, grassland: 3} },
				{ value: 'midnights', points: { bug: 1, fairy: 2, normal: 2, poison: 3, mountain: 1, urban: 3} },
				{ value: 'thetorturedpoetsdepartment', points: { fighting: 3, ghost: 2, poison: 3, psychic: 3, cave: 1, mountain: 1 } },
			]
        }
    ];
 
	// ----- Iterating through the user's answers to calculate the results for type/habitat -----
	for (let answerTitle in formAnswers) {
		// ----- Finding the index of the matching question inside the scoreTable -----
		let indexOfScoreInfo = scoreTable.findIndex(scoreInfo => scoreInfo.question === answerTitle);
		// ----- The 'color' question will return an index of -1 because it's not contained in the scoreTable. So we'll not consider it -----
		if (indexOfScoreInfo >= 0) {
			// ----- Finding the index of the matching answer inside the current question -----
			let indexOfAnswer = scoreTable[indexOfScoreInfo].answers.findIndex(answerScore => answerScore.value === formAnswers[answerTitle]);
			// ----- Accessing that answer to check the scores defined for it -----
			let scoresList = scoreTable[indexOfScoreInfo].answers[indexOfAnswer].points;
			// ----- Iterating through each answer score to update the user's score for each type/habitat -----
			for (let scoreItem in scoresList) { 
				// ----- Finding the index matching the current type/habitat score -----
				const scoreIndex = score.findIndex(item => item.type_habitat === scoreItem);
				// ----- Updating the user's score -----
				score[scoreIndex].value += scoresList[scoreItem];
			}
		}
	}

	// ----- Sorting the user's score from highest to lowest -----
	score.sort(function (a, b) {
		if (b.value > a.value) {
		  return 1;
		}
		if (b.value < a.value) {
		  return -1;
		}
		return 0;
	  });

	  console.log(score);
	  return score;
};
