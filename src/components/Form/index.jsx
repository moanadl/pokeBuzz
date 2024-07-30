import {useState } from "react";
import './Form.css'
import Question from "../Question";

function Form () {

	const questionsContent = ['Choose a color', 'Choose a transportation', 'Choose a setting', 'Choose a natural phenomenon', 'Choose something to do', 'Choose a place to chill', 'Choose a Taylor Swift album'];
	const questionsKey = ['colorChoice', 'transportationChoice', 'settingChoice', 'phenomenonChoice', 'activityChoice', 'chillChoice', 'taylorChoice'];

	const [formData, setFormData] = useState({
	    color: '',
	    transportation: '',
	    setting: '',
	    naturalPhenomenon: '',
	    activity: '',
	    placeToChill: '',
	    taylorAlbum: ''
	});

	const sendFormData = (e) => {
		e.preventDefault();
		console.log(formData)
	}

	const getFormData = (color, transportation, setting, naturalPhenomenon, activity, placeToChill, taylorAlbum) => {
		        
        setFormData((prevData) => ({
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
    
	return (
		<section>

			<h1>PokeBuzz - Find which pokemons you'd carry with you!</h1>
			<form onSubmit={sendFormData}>
				{questionsContent.map((questionContent, index) => 
					<Question 
						key={questionsKey[index]} 
						label={`${questionContent}:`} 
						index={index}
						getFormData={getFormData}/> 
				)}

				<button>Submit!</button>
			</form>
		</section>
	)
}

export default Form;
