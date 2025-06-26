import {useState } from "react";
import { getResults } from "../../utils/results";
import Question from "../Question";
import questions from '../../data/questionsData.json';
import './Form.css'

// ---------- Renders the Form ---------- //
function Form (props) {

	const [formErrors, setFormErrors] = useState([]);

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
		const formData = new FormData(e.target);
		console.log(formData);

		const missingFields = [];

		questions.forEach(question => {
			if (!formData.get(question.key)) {
			missingFields.push(question.label);
			}
		});

		 if (missingFields.length > 0) {
			setFormErrors(missingFields);
			return;
		}

		setFormErrors([]);

		console.log(missingFields);

		// ----- Calls the imported function getResults to calculate the results of the quiz for type/habitat -----
		const finalScore = getResults(formAnswers);
		// ----- Calls the prop function getFormResults with the calculated result for type/habitat and the form answers -----
		props.getFormResults(finalScore, formAnswers);
	}
    
	return (
		<section>
			<form onSubmit={sendFormAnswers}>
				{questions.map((question, index) => 
					<Question 
						key={question.key} 
						label={`${question.label}:`} 
						optionKey={question.key}
						hasError={formErrors.includes(question.label)}
						getFormAnswers={getFormAnswers}
						index={index} /> 
				)}

				{formErrors.length > 0 && (
					<div className="form-errors">
						<p>You need to select one option from the following questions:</p>
						<ul>
						{formErrors.map((field, index) => (
							<li key={index}>{field}</li>
						))}
						</ul>
						<p>Follow the sleepy Snorlax!</p>
					</div>
					)}
					<button className="form-button">Catch 'em!</button>
			</form>
		</section>
	)
}

export default Form;
