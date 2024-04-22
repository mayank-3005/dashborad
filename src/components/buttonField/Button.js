
const AllButoon = ({type , btnText , icon , styles}) =>{
     return(
      <button className= {styles} type= {type} >{icon}{btnText}</button>
     );
};

export default AllButoon;