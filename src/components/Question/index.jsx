import { useState, useEffect } from "react";
import Option from "../Option";
import questionOptions from '../../data/questionOptions.json';
import questionNameMap from '../../data/questionNameMap.json';

// ---------- Renders each question of the Form ---------- //
function Question ({ label, index, getFormAnswers }) {

    const [answer, setAnswer] = useState('');

    const optionKey = Object.keys(questionOptions)[index];
    const questionName = questionNameMap[optionKey];

    const handleChange = e => {
        const selectedOption = e.target.value;
        setAnswer(selectedOption);
        getFormAnswers({ [questionName]: selectedOption }); // From Form component
    };
    
	return (
            <fieldset>
                <legend>{label}</legend>
                {questionOptions[optionKey].map(option => 
                    <Option 
                        key={`option-${option.toLowerCase().replace(/\s/g, '')}`} 
                        id={`option-${option.toLowerCase().replace(/\s/g, '')}`} 
                        name={optionKey} 
                        value={option.toLowerCase().replace(/\s/g, '')} 
                        content={option} 
                        getData={handleChange} />
                )}
            </fieldset>
	)
}

export default Question;

//Fazer tipo foi feito no Form, mas fazer direto aqui, sem precisar mandar tanta variável para o Form.
// Encurtar caminhos, otimizar processos, reduzir código. KISS.
