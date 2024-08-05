import Sidebar from "./Sidebar";
import Box from "./box";
import Header from "./Header";
import Analysis from "./Analysis";
import Table from "./Table";
import NetProfit from "./netProfit";
import ReviewCustomer from "./Review";


const Home = () => {
    return (
       
        <div className="home">
        <div className= 'bg-slate-800'>
        <Sidebar/>
        </div>
        <div>
        <Header/>
        <div className="main-content bg-black">
        <h3 className="text-2xl font-bold text-white mb-5">Dashboard</h3>
         <div className="box-main-content">
          <div>
          <Box/>
          </div>
          <div>
          <NetProfit/>
          </div>
         </div>
         <div className="analysis-chart pt-5">
         <Analysis/>
         </div>
         <div className="table-main-chart pt-5">
        <div>
        <Table/>
        </div>
        <div>
        <ReviewCustomer/>
        </div>
         </div>
        </div>
        </div>
       
        </div>
    );
};

export default Home;
