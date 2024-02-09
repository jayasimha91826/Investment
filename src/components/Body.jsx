import { calculateInvestmentResults } from "../util/investment";

const Body=({onChangeInput,userInput1})=>{
 
    return(
        <div id="user-input" >
          <div className="input-group">
            <p>
              <label  htmlFor="ip1">Initial invetsment</label>
              <input value={userInput1.initialInvestment} type="number" required id="ip1"
              onChange={(event)=>onChangeInput(event.target.value,"initialInvestment")}/>
            </p>
            <p>    
              <label htmlFor="ip2">Anual Investment</label>
              <input value={userInput1.anualInvestment} type="number" required id="ip2"
              onChange={(event)=>onChangeInput(event.target.value,"anualInvestment")}/>
            </p>
          </div>
          <div className="input-group">
            <p>
              <label htmlFor="ip3">Expected Return</label>
              <input value={userInput1.expectedReturn} type="number" required id="ip3"
              onChange={(event)=>onChangeInput(event.target.value,"expectedReturn")}/>
            </p>
            <p>
              <label htmlFor="ip4">Duration</label>
              <input value={userInput1.duration} type="number" required id="ip4"
              onChange={(event)=>onChangeInput(event.target.value,'duration')}/>
            </p>
          </div>
      </div>
    );  
}

export default Body;