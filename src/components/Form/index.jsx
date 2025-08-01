import { useState } from "react";
import { getResults } from "../../utils/results";
import Question from "../Question";
import questions from '../../data/questionsData.json';
import './Form.css'

function Form (props) {

	const [formErrors, setFormErrors] = useState([]);

	const [formAnswers, setFormAnswers] = useState(() => {
		Object.fromEntries(questions.map(key => [key, '']));
	});

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

		// ----- Calculates the results of the quiz for type/habitat -----
		const finalScore = getResults(formAnswers);
		// ----- Calculates the result for type/habitat and the form answers -----
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
						index={index}
						testid={question.key} /> 
				)}

				{formErrors.length > 0 && (
					<div data-testid='form-errors' className="form-errors" role='alert'>
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
