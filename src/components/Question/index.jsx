import { useState, useEffect } from "react";
import Option from "../Option";

// ---------- Renders each question of the Form ---------- //
function Question (props) {

    const options = {
        colorOptions: ['Black', 'Blue', 'Brown', 'Gray', 'Green', 'Pink', 'Purple', 'Red', 'Yellow', 'White'],
        transportationOptions: ['Car', 'Airplane', 'Ship', 'Train', 'By foot'],
        settingOptions: ['Countryside', 'Beach', 'Mountain', 'City', 'Cave'],
        naturalPhenomenonOptions: ['Volcano', 'Earthquake', 'Tsunami', 'Hurricane', 'Storm', 'Sand storm', 'Blizzard'],
        activityOptions: ['Pool party', 'Work out', 'Circus', 'Camping', 'Stay in and chill', 'Rally', 'Hiking'],
        chillOptions: ['Gym', 'Cemetery', 'Mall', 'Pool', 'Library', 'Park', 'Sauna'],
        taylorOptions: ['Debut', 'Fearless TV', 'Speak Now TV', 'Red TV', '1989 TV', 'Reputation', 'Lover', 'Folklore', 'Evermore', 'Midnights', 'The Tortured Poets Department']
    }

    // ----- Creating the state for the constants that will be used to set each question -----
    const [color, setColor] = useState('');
	const [transportation, setTransportation] = useState('');
	const [setting, setSetting] = useState('');
	const [naturalPhenomenon, setNaturalPhenomenon] = useState('');
	const [activity, setActivity] = useState('');
	const [placeToChill, setPlaceToChill] = useState('');
	const [taylorAlbum, setTaylorAlbum] = useState('');

    // ----- Gets the value of each radio button on the Option component for each question -----
	const getSelectionValue = (e) => {
        const {name, value} = e.target;

		if (name === 'colorOptions') {
			setColor(value)
		} else if (name === 'transportationOptions') {
			setTransportation(value);
		} else if (name === 'settingOptions') {
			setSetting(value);
		} else if (name === 'naturalPhenomenonOptions') {
			setNaturalPhenomenon(value);
		} else if (name === 'activityOptions') {
			setActivity(value);
		} else if (name === 'chillOptions') {
			setPlaceToChill(value);
		} else if (name === 'taylorOptions') {
			setTaylorAlbum(value);
		}
    
	}

    // ----- On any selected radio button uptade -----
    useEffect(() => {
        // ----- Calls the prop function getFormData with the value on the radio button selected for each question -----
        props.getFormAnswers(color, transportation, setting, naturalPhenomenon, activity, placeToChill, taylorAlbum)
    }, [color, transportation, setting, naturalPhenomenon, activity, placeToChill, taylorAlbum]
    );

	return (
            <fieldset>
                <legend>{props.label}</legend>
                {Object.values(options)[props.index].map(option => 
                    <Option 
                        key={`option-${option.toLowerCase().replace(/\s/g, '')}`} 
                        id={`option-${option.toLowerCase().replace(/\s/g, '')}`} 
                        name={Object.keys(options)[props.index]} 
                        value={option.toLowerCase().replace(/\s/g, '')} 
                        content={option} 
                        getData={getSelectionValue} />
                )}
            </fieldset>
	)
}

export default Question;

// Tentar colocar todas as respostas em um objeto ao invés de estados individuais. Fazer tipo foi feito no Form, mas fazer direto aqui, sem precisar mandar tanta variável para o Form.
// Encurtar caminhos, otimizar processos, reduzir código. KISS.
