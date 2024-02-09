import {calculateInvestmentResults} from "../util/investment.js"

const Log=(data)=>{
    console.log(data);
    const results=calculateInvestmentResults(data);
    console.log("results",results);
     return(
        <div>
            <table id="result" >
                <thead>
                <tr >
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Intrest(Year)</th>
                    <th>Total Intrest</th>
                    <th>Invested Captial</th>
                </tr>
                </thead>
                <tbody>
                    {results.map((val)=>{
                        return
                        <tr key={val.year}>
                            <td>{val.year}</td>
                            <td>{val.interest}</td>
                            <td>{val.year}</td>
                            <td>{val.interest}</td>
                            <td>{val.year}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
     );
}

export default Log;