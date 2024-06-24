import AnalysisChart from "./AnalysisChart";
import Table from "./Table";

const Analysis =() =>{
    return(
        <div className="analysis-container">
          <div className="analysis-content shadow-lg p-5 bg-inherit">
           <h2 className="font-medium Order">Order By Countries</h2>
           <Table/>
          </div>
          <div className="analysis-content shadow-lg p-5">
          <div className="revenue-heading-content">
          <div className="revenue-title">
          <h3 className="font-medium">Salas Analysis</h3>
          
          </div>
          <div className="title-right-content">
            <ul className="revenue-sales">
            <li><select className="p-2 rounded">
            <option>This Week</option>
            <option>2 month</option>
            <option>3 month</option>
            </select></li>
            </ul>
          </div>
          </div>
          <div className="mt-5">
          <AnalysisChart/>
          </div>
          </div>
        </div>
    )
}

export default Analysis;