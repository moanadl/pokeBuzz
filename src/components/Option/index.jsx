import './Option.css'

// ---------- Renders each option for each Question of the Form ---------- //
function Option ({ id, name, value, getData, content }) {
	
    // <fieldset className={hasError ? 'error-fieldset' : ''}>
    //             {hasError ? <img src='images/snorlax.png' className="form-error-image" alt=''/> : ''}
    
	return (

        <div className="radio-options">
            <label htmlFor={id}>
                <input 
                type="radio" 
                id={id} 
                name={name} 
                value={value} 
                onChange={getData}
                />
                <img src='images/pokebola-semcor.svg' alt='Pokebola usada como radio button'/>
                <span>{content}</span>
                <img src='images/pokebola-semcor.svg' alt='Pokebola usada como radio button'/>
            </label>
        </div>
	)
}

export default Option;

