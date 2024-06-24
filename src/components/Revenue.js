import { Link } from "react-router-dom";

import ApexChart from "./SalasChart";
import RadialChart from "./RadialChart";

const Revenue = () =>{
    return(
      <div className=" revenue-container">
      <div className="revenue-item revenue-content shadow-lg p-5">
        <div className="">
        <div className="revenue-heading-content">
        <div className="revenue-title">
        <h3 className="font-bold text-2xl">$102.5M</h3>
        <p className="font-medium text-cyan-400">Total Revenue</p>
        </div>
        <div className="title-right-content">
          <ul className="revenue-sales">
          <li className="flex items-center"><span className="circle-fill-1 me-2"></span><Link>Sales</Link></li>
          <li className="flex items-center"><span className="circle-fill-2 me-2"></span> <Link>Profit</Link></li>
          <li><select className="p-2 rounded">
          <option>1 month</option>
          <option>2 month</option>
          <option>3 month</option>
          </select></li>
          </ul>
        </div>
        </div>
        </div>
        <div className="sales-left-cart">
         <ApexChart/>
        </div>
      </div>
      <div className="revenue-item revenue-content shadow-lg p-5">
        <div className="">
        <div className="revenue-heading-content">
        <div className="revenue-title">
        <h3 className="font-bold">Coustomers</h3>
        
        </div>
        <div className="title-right-content">
          <ul className="revenue-sales">
          <li><select className="p-2 rounded">
          <option>1 month</option>
          <option>2 month</option>
          <option>3 month</option>
          </select></li>
          </ul>
        </div>
        </div>
        </div>
        <div className="sales-right mt-10 flex">
       <div className="radial-chart">
       <RadialChart/>
       </div>
       <div>
       <p className="text-xs flex"><span className="circle-fill-1 me-2"></span>New Coustomers</p>
       <h3 className="font-bold mb-4">10K</h3>
       <p className="text-xs flex"><span className="circle-fill-2 me-2"></span>Repeated</p>
       <h3 className="font-bold">4K</h3>
       </div>
        </div>
      </div>
      </div>
    )
}

export default Revenue;