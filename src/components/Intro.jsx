import Button from "./Button";

export default function Intro({onClick}){
    
    return (
        <section className="intro-section flex">
            <h1 className="intro-header karla-font">Quizzical</h1>
            <p className="intro-text inter-font">Some description if needed</p>
            <Button onClick={onClick}>
                Start quiz
            </Button>
        </section>
    )
}