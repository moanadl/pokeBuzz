import './MoreInfo.css'

function MoreInfo (props) {

	return (
        <div className="more-info-message black-background">
            <p>This website was created as a study project. Studying doesn't have to be boring and develop fun apps to enhance my skills while building a strong portfolio is one of my favortie activities.</p>
            <button onClick={props.toggleMoreInfo}><span>X</span></button>
        </div>
    );
}

export default MoreInfo;
