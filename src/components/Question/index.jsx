import { useState, useEffect } from "react";
import Option from "../Option";

function Question (props) {

    const options = {
        colorOptions: ['Black', 'Blue', 'Brown', 'Gray', 'Green', 'Pink', 'Purple', 'Red', 'Yellow', 'White'],
        transportationOptions: ['Car', 'Airplane', 'Ship', 'Train', 'By foot'],
        settingOptions: ['Countryside', 'Beach', 'Mountain', 'City', 'Cave'],
        naturalPhenomenonOptions: ['Volcano', 'Earthquake', 'Tsunami', 'Hurricane', 'Storm', 'Sand storm', 'Blizzard'],
        activityOptions: ['Pool party', 'Work out', 'Circus', 'Stay in and chill', 'Rally', 'Hiking'],
        chillOptions: ['Gym', 'Cemetery', 'Mall', 'Pool', 'Library', 'Park', 'Sauna'],
        taylorOptions: ['Debut', 'Fearless TV', 'Speak Now TV', 'Red TV', '1989 TV', 'Reputation', 'Lover', 'Folklore', 'Evermore', 'Midnights', 'The Tortured Poets Department']
    }

    const [color, setColor] = useState('');
	const [transportation, setTransportation] = useState('');
	const [setting, setSetting] = useState('');
	const [naturalPhenomenon, setNaturalPhenomenon] = useState('');
	const [activity, setActivity] = useState('');
	const [placeToChill, setPlaceToChill] = useState('');
	const [taylorAlbum, setTaylorAlbum] = useState('');

	const getSelectionValue = (e) => {
        const {name, value} = e.target;

		if (name === 'colorOptions') {
			setColor(value);
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

    useEffect(() => {
        props.getFormData(color, transportation, setting, naturalPhenomenon, activity, placeToChill, taylorAlbum)
    }, [color, transportation, setting, naturalPhenomenon, activity, placeToChill, taylorAlbum]
    );

	return (
            <fieldset>
                <legend>{props.label}</legend>
                {Object.values(options)[props.index].map(option => 
                    <Option 
                        key={`option-${option.toLowerCase()}`} 
                        id={`option-${option.toLowerCase()}`} 
                        name={Object.keys(options)[props.index]} 
                        value={option.toLowerCase()} 
                        content={option} 
                        getData={getSelectionValue} />
                )}
            </fieldset>
	)
}

export default Question;

// Tentar colocar todas as respostas em um objeto ao invés de estados individuais. Fazer tipo foi feito no Form, mas fazer direto aqui, sem precisar mandar tanta variável para o Form.
// Encurtar caminhos, otimizar processos, reduzir código. KISS.
