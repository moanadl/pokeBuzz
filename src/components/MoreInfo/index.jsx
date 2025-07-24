import './MoreInfo.css'

function MoreInfo (props) {

	return (
        <div className="more-info-message black-background">
            <p>This website was created as a study project. Studying doesn't have to be boring. <br/><br/>Develop fun apps to enhance my skills while building a strong portfolio is one of my favortie activities. Check more on the following links.</p>
            <div className='contact-links'>
                <a href="https://github.com/moanadl">Github</a>
                <a href="https://www.linkedin.com/in/moana-lopes/">Linkedin</a>
            </div>

            <button onClick={props.toggleMoreInfo}><span>X</span></button>
        </div>
    );
}

export default MoreInfo;
