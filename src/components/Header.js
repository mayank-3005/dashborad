import { useState } from "react";
const Header = () =>{
   
    const [searchdata, setSearchData] = useState({
        name: '',
      });
    
      const handleChange = (e) => {
        setSearchData({
          ...searchdata,
          [e.target.name]: e.target.value,
        });
      };
    
      



    return(
    <div className="header shadow-md">
   
       <div>
       <h2>Dasboard</h2>
       </div>
       <div className="search-container">
       <input type="text" placeholder="Search by Lead ID, Application, Company ID, Company Name, Email or Contact Number." value={searchdata.name}
       onChange={handleChange}></input>
       <button type="submit"><i className="fa-solid fa-magnifying-glass text-sm"></i></button>
   </div>
     <div className="user-info">
     <i className="fa-solid fa-user"></i>
     </div>
    </div>
    )
}

export default Header ;