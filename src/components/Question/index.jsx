import { useState } from "react";
import Option from "../Option";
import questionOptions from '../../data/questionOptions.json';
import questionNameMap from '../../data/questionNameMap.json';
import "./Question.css"

// ---------- Renders each question of the Form ---------- //
function Question ({ label, optionKey, hasError, getFormAnswers, index }) {

    const [answer, setAnswer] = useState('');

   const questionName = Object.keys(questionNameMap)[index];
    
    const handleChange = e => {
        const selectedOption = e.target.value;
        const fieldsetParent = e.target.parentNode.closest('fieldset');
        const errorImage = fieldsetParent.getElementsByClassName('form-error-image')[0];
        if (errorImage !== undefined) {
            errorImage.style.display = 'none'
        }
        fieldsetParent.classList.remove('error-fieldset');

        setAnswer(selectedOption);
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
