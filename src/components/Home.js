import Sidebar from "./Sidebar";
import Box from "./box";
import Header from "./Header";
import { useState } from "react";
import Revenue from "./Revenue";
import Analysis from "./Analysis";

const Home = () => {
    const [isActive, setIsActive] = useState(true);

    function handleSideBar() {
        setIsActive(!isActive);
    }

    return (
        <div className={isActive ? 'grid-container' : ''}>
            <Sidebar isActive={isActive} />
            <div className="content">
                <Header handleSideBar={handleSideBar}/>
                <div className="pt-5">
                <Box/>
                </div>
               <div>
               <Revenue/>
               </div>
               <div>
               <Analysis/>
               </div>
            </div>
          
        </div>
        
    );
};

export default Home;
