
const Inputfield = ({label ,type , name , id , value , placeholder , onChange}) =>{
  return(
    <div>
    <label  className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
     
    />
  </div>
  )
}

export default Inputfield