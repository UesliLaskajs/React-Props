import "./App.css"


const Parentprops=(prop)=>{
    const {firstName,lastName,age,hairColor}=prop;
    return(
        <div>
        <h1> {firstName},{lastName}</h1>
        <p>{age} years old</p>
        <p>HairColor is :{hairColor}</p>
        </div>
    )
}

export default Parentprops;