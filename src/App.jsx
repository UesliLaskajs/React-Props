import Parentprops from "./Parent";


const App=()=>{
    return(
        <div className="description">
            <Parentprops firstName={'Uesli'} lastName={'Laska'} age={19} hairColor={'black'}/>
            <Parentprops firstName={'Bruno'} lastName={'Laska'} age={12} hairColor={'black'}/>
            <Parentprops firstName={'Flogert'} lastName={'Ciku'} age={23} hairColor={'yellow'}/>
            <Parentprops firstName={'DHimiter'} lastName={'Sinjari'} age={21} hairColor={'black'}/>
        </div>
    )
}

export default App;