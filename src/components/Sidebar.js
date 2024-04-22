
import AllButoon from "./buttonField/Button";
import logo from "../assets/images/logo.png";
const Sidebar = () =>{
    return(
        <div className="sidebar shadow-lg">
        <div className="logo">
        <img src={logo} alt ="logo"></img>
        </div>
       <div className="Menu-btn">
       <div>
       <AllButoon styles={"btn-1 text-white"} icon={<i className="fa-solid fa-plus text-orange-600"></i>} type= {"submit"} btnText ={"New Lead"}/>
       </div>
      <div>
      <AllButoon  styles={"btn-2 text-white"} icon={<i className="fa-solid fa-table-columns text-lime-900"></i>} type= {"submit"} btnText ={"Home"}/>
      </div> 
      <div>
      <AllButoon styles={"btn-3"} icon={<i className="fa-solid fa-indian-rupee-sign"></i>} type= {"submit"} btnText ={"Payouts"}/>
      </div> 
      <div>
      <AllButoon styles={"btn-4"} icon={<i className="fa-solid fa-info"></i>} type= {"submit"} btnText ={"Info"}/>
      </div>
       </div>
        </div>
    )
};
export default Sidebar;