import './Option.css'

function Option ({ id, name, value, getData, content }) {
	    
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
                <img src={`${process.env.PUBLIC_URL}/images/pokebola-semcor.svg`} alt='Pokebola used as radio button'/>
                <span>{content}</span>
                <img src={`${process.env.PUBLIC_URL}/images/pokebola-semcor.svg`} alt='Pokebola used as radio button'/>
            </label>
        </div>
	)
}

export default Option;
