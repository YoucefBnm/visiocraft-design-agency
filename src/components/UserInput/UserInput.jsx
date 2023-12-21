
const UserInput = ({ inputType, label, value, handleChange }) => {
  return (
   <input
        type={inputType}
        name={label}
        onChange={handleChange}
        value={value}
        id={label}
        placeholder={`Your ${label}`}
        className='input--user'
        required
    />
    

  )
}

export default UserInput