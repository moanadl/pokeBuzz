export const getResults = (usersAnswers) => {
        
    console.log(usersAnswers);

	const score = {
		bug: 0,
		dragon: 0,
		electric: 0,
		fairy: 0,
		fighting: 0,
		fire: 0,
		flying: 0,
		ghost: 0,
		grass: 0,
		ground: 0,
		ice: 0,
		normal: 0,
		poison: 0,
		psych: 0,
		rock: 0,
		steel: 0,
		water: 0,
		cave: 0,
		forest: 0,
		grassland: 0,
		mountain: 0,
		roughTerrain: 0,
		sea: 0,
		urban: 0,
		waterEdges: 0
	};

    const scoreTable = [
        {
			question: 'transportation',
			answers: [
				{ value: 'car', points: { roughTerrain: 1, urban: 3, ground: 1, normal: 3 } },
				{ value: 'airplane', points: { mountain: 1, dragon: 2, flying: 3, psych: 1 } },
				{ value: 'ship', points: { sea: 3, wateredges: 2, ice: 3, water: 1 } },
				{ value: 'train', points: { cave: 1, electric: 1, fairy: 1, fire: 1, ghost: 1, ground: 1, psych: 1, rock: 1, steel: 1 } },
				{ value: 'byfoot', points: { cave: 1, forest: 1, grassland: 1, bug: 1, fairy: 1, fighting: 1, grass: 1, ground: 1, poison: 1, rock: 1 } },
			]
        },
        {
			question: 'setting',
			answers: [
				{ value: 'countryside', points: { grassland: 3 , forest: 2, grass: 2, bug: 2, ground: 1 } },
				{ value: 'beach', points: { waterEdges: 1, sea: 3, water: 2 } },
				{ value: 'mountain', points: { mountain: 3, roughTerrain: 2, fire: 1, ice: 1, dragon: 2, flying: 2, rock: 2 } },
				{ value: 'city', points: { urban: 3, normal: 2, poison: 1, electric: 3, fighting: 2, psych: 1, ghost: 1 } },
				{ value: 'cave', points: { cave: 3, fairy: 1, rock: 2 } }
			],
        },
        {
			question: 'naturalPhenomenon',
			answers: [
				{ value: 'volcano', points: { mountain: 3, fighting: 1, fire: 3, steel: 2 } },
				{ value: 'earthquake', points: { cave: 1, forest: 1, grassland: 1, bug: 1, grass: 1, ground: 3, rock: 2 } },
				{ value: 'tsunami', points: { sea: 3, waterEdges: 1, water: 2 } },
				{ value: 'hurricane', points: { dragon: 2, fairy: 1, flying: 3, psych: 1 } },
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
				{ value: 'circus', points: { fairy: 2, ghost: 2, poison: 1, psych: 3 } },
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
				{ value: 'cemetery', points: { cave: 1, poison: 3, ghost: 3, psych: 2 } },
				{ value: 'mall', points: { urban: 3, electric: 2, steel: 1 } },
				{ value: 'pool', points: { sea: 2, waterEdges: 3, ice: 1, water: 3 } },
				{ value: 'library', points: { ghost: 1, normal: 2, psych: 3 } },
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
				{ value: 'ttpd', points: { fighting: 3, ghost: 2, poison: 3, psych: 3, cave: 1, mountain: 1 } },
			]
        }
    ];
 
	for (let answerTitle in usersAnswers) {
		// console.log(`${answerTitle}: ${usersAnswers[answerTitle]}`);
		let indexOfScoreInfo = scoreTable.findIndex(scoreInfo => scoreInfo.question === answerTitle);
		if (indexOfScoreInfo >= 0) {
			let indexOfAnswer = scoreTable[indexOfScoreInfo].answers.findIndex(answerScore => answerScore.value === usersAnswers[answerTitle]);
			let scoresList = scoreTable[indexOfScoreInfo].answers[indexOfAnswer].points;
			for (let scoreItem in scoresList) {
				score[scoreItem] += scoresList[scoreItem];
			}
		}
	}
	console.log(score);

};
