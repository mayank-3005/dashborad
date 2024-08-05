import AnalysisChart from "./AnalysisChart";
import TabHeading from "./tab";



const Analysis =() =>{
    return(
        <div className="analysis-container">
          <div className="analysis-content shadow-lg bg-slate-800">
          <div className="revenue-heading-content">
          <div className="revenue-title">
          <h3 className="font-bold text-xl text-white">Activity</h3>
          </div>
          <div className="title-right-content">
            <ul className="revenue-sales">
            <li><select className="p-2 rounded border-2 border-slate-300">
            <option>Weekly</option>
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
          <div className="tab-heading bg-slate-800 p-4">
           <TabHeading/>
          </div>
        </div>
    )
}

export default Analysis;