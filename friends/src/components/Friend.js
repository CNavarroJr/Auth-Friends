import React from 'react';

export function Friend (props) {
  console.log(props)

  return (

    <div className='cards'>
      <h2>{props.item.name}</h2>
      <p>{props.item.age}</p>
      <p>{props.item.email}</p>
    </div>

  )

}