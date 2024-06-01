

export default function Button (props){
    return (
        <button 
            className="intro-btn inter-font" 
            onClick={props.onClick}>
            {props.children}
        </button>
    )
}