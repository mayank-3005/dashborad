import user from '../assets/images/images.jpeg'
import SearchContainer from "./SearchBar";
const Header = ({ handleSideBar }) => {

  return (
    <>
    <div className="header bg-slate-800 display: flex; justify-between">
     <div>
     <SearchContainer/>
     </div>
      <div className="user">
      <div>
      <i className="fa-solid fa-envelope"></i>
      </div>
      <div>
      <i className="fa-solid fa-gear"></i>
      </div>
      <div>
      <i className="fa-regular fa-bell"></i>
      </div>
      <div>
      <img src={user} alt='user' height={30} width={30} className='rounded-xl'></img>
      </div>
      </div>
      
      
      

    

     
      
    </div>
    </>
  );
};

export default Header;
