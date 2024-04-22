import Sidebar from "./Sidebar";
import Table from "./Table";
import Header from "./Header";
import { useState } from "react";

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
                <Table />
            </div>
        </div>
    );
};

export default Home;
