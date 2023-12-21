import React from 'react'

const UserTextarea = ({ value, handleChange }) => {
  return (
    <textarea
        name='message'
        value={value}
        id='message'
        cols={30}
        rows={10}
        placeholder='Your message..'
        className='input--user input--user--textarea'
        onChange={handleChange}
    />
  )
}

export default UserTextarea