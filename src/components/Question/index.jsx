import { useState } from "react";
import Option from "../Option";
import questionOptions from '../../data/questionOptions.json';
import questionNameMap from '../../data/questionNameMap.json';
import "./Question.css"

// ---------- Renders each question of the Form ---------- //
function Question ({ label, optionKey, hasError, getFormAnswers, index }) {

    const [answer, setAnswer] = useState('');
//    console.log('optionKey:', optionKey);
   
   // const optionKey =  optionKey;
   const questionName = Object.keys(questionNameMap)[index];
//    console.log('questionName', questionName);
//    console.log('questionOptions[optionKey]:', questionOptions[questionName]);
    
    const handleChange = e => {
        const selectedOption = e.target.value;
        setAnswer(selectedOption);
        // console.log('selectedOption', selectedOption)
        getFormAnswers({ [optionKey]: selectedOption }); // From Form component
    };
    
	return (
            <fieldset className={hasError ? 'error-fieldset' : ''}>
                {hasError ? <img src='images/snorlax.png' className="form-error-image" alt=''/> : ''}
                <legend>{label}</legend>
                {questionOptions[questionName].map(option => 
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
