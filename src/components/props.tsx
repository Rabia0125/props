import React from 'react'

// Structure format:
export const Props1 = (props : {name: string, age: number}) => {
  return (
    <div className='felx flex-col items-center justify-center'>
      <div className='bg-blue-100 p-4 rounded-md'>
      <h1 className='text-2xl text-green-500 font-serif'>Name: {props.name}</h1>
      <h1 className='text-2xl text-yellow-500 font-serif'>{`Age: ${props.age}`}</h1>
      </div>
    </div>
  )
}

// Destructure formate:
export const Props2 = ({name, age}: {name: string, age: number}) => {
    return ( 
      <div className='felx flex-col items-center justify-center'>
        <div className='bg-blue-200 p-4 rounded-md'>
        <h1 className='text-2xl text-purple-500 font-serif'>Name: {name}</h1>
        <h1 className='text-2xl text-pink-400 font-serif'>{`Age: ${age}`}</h1>
        </div>
      </div>
    )
}
    
