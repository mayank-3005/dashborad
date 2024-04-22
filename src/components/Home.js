import Sidebar from "./Sidebar";
import Table from "./Table";
import Header from "./Header";

const Home = () => {
    return (
        <div className="grid-container">
            <Sidebar />
            <div className="content">
                <Header />
                <Table />
            </div>
        </div>
    );
};

export default Home;