import RadialChart from "./RadialChart";




const NetProfit = () =>{
    return(

        <div className=" net-container bg-slate-800">
         <div className="netbox">
           <div className="title">
           <p className="text-sm text-white font-bold mb-4">Net Profit</p>
           </div>
           <div className="Price">
           <h3 className="text-2xl text-white font-bold mb-4">$569.25</h3>
           </div>
           <div className="chart">
        <i className="fa-solid fa-arrow-up text-green-500 me-1"></i><span className="font-bold text-sm text-green-500">3%</span>
        </div>
         </div>
        <div className="net-chart">
        <RadialChart/>
        </div>
        </div>
       
    )
       
        
};





  


export default NetProfit;