import './Option.css'

function Option (props) {
	
	return (

        <div className="radio-options">
            <input 
                type="radio" 
                id={props.id} 
                name={props.name} 
                value={props.value} 
                onChange={props.getData}
                required/>
            <label htmlFor={props.id}>{props.content}</label>
        </div>
	)
}

export default Option;
