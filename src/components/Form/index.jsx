import {useState } from "react";
import { getResults } from "../../utils/results";
import Question from "../Question";
import questions from '../../data/questionsData.json';
import './Form.css'

// ---------- Renders the Form ---------- //
function Form (props) {

	// ----- Creating the state for the form answers -----
	const [formAnswers, setFormAnswers] = useState(() => {
		Object.fromEntries(questions.map(key => [key, '']));
	});

	// ----- Gets the value of each radio button from the component Question to set the formAnswers -----
	const getFormAnswers = (partialAnswer) => {
        setFormAnswers((prev) => ({
            ...prev,
			...partialAnswer
        }));
	};

	// ----- On form submission -----
	const sendFormAnswers = (e) => {
		e.preventDefault();
		// ----- Calls the imported function getResults to calculate the results of the quiz for type/habitat -----
		const finalScore = getResults(formAnswers);
		// ----- Calls the prop function getFormResults with the calculated result for type/habitat and the form answers -----
		props.getFormResults(finalScore, formAnswers);
	}
    
	return (
		<section>
			<h1 className="form-title">
				Find out your six
                <img src="images/logo-pokemon.png" alt="Pokémon logo" />
            </h1>

			<form onSubmit={sendFormAnswers}>
				{questions.map((question, index) => 
					<Question 
						key={question.key} 
						label={`${question.label}:`} 
						index={index}
						getFormAnswers={getFormAnswers} /> 
				)}

				<button>Catch 'em!</button>
			</form>
		</section>
	)
}

export default Form;
