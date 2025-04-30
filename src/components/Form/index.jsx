import {useState } from "react";
import { getResults } from "../../services/results";
import Question from "../Question";
import './Form.css'

// ---------- Renders the Form ---------- //
function Form (props) {

	const questionsContent = ['Choose a color', 'Choose a transportation', 'Choose a setting', 'Choose a natural phenomenon', 'Choose something to do', 'Choose a place to chill', 'Choose a Taylor Swift album'];
	const questionsKeys = ['colorChoice', 'transportationChoice', 'settingChoice', 'phenomenonChoice', 'activityChoice', 'chillChoice', 'taylorChoice'];

	// ----- Creating the state for the user's answers -----
	const [formAnswers, setFormAnswers] = useState({
	    color: '',
	    transportation: '',
	    setting: '',
	    naturalPhenomenon: '',
	    activity: '',
	    placeToChill: '',
	    taylorAlbum: ''
	});

	// ----- Gets the value of each radio button from the component Question to set the formAnswers -----
	const getFormAnswers = (color, transportation, setting, naturalPhenomenon, activity, placeToChill, taylorAlbum) => {
		        
        setFormAnswers((prevData) => ({
            ...prevData,
            color: color ? color : prevData.color,
            transportation: transportation ? transportation : prevData.transportation,
            setting: setting ? setting : prevData.setting,
            naturalPhenomenon: naturalPhenomenon ? naturalPhenomenon : prevData.naturalPhenomenon,
            activity: activity ? activity : prevData.activity,
            placeToChill: placeToChill ? placeToChill : prevData.placeToChill,
            taylorAlbum: taylorAlbum ? taylorAlbum : prevData.taylorAlbum
        }));
		
	}

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
			<h1>PokeBuzz - Find which pokemons you'd carry with you!</h1>
			<form onSubmit={sendFormAnswers}>
				{questionsContent.map((questionContent, index) => 
					<Question 
						key={questionsKeys[index]} 
						label={`${questionContent}:`} 
						index={index}
						getFormAnswers={getFormAnswers}/> 
				)}

				<button>Submit!</button>
			</form>
		</section>
	)
}

export default Form;
