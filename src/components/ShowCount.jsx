import React from 'react'

const ShowCount = ({count}) => {

    console.log(count);
  return (
    <>
      <p>You clicked here {count.number} times</p>
      <p>{count.text}!</p>
    </>
  )
}

export default ShowCount
