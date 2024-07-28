import React from 'react'
interface CardProp {
    name : string,
    thumbnail : string,
    color : string,
    
}
const Card:React.FC<CardProp> = ({name , thumbnail , color}) => {
  return (
    <>
    <div className='p-5 flex flex-col justify-center items-center border rounded-lg'>

      <h2 className={`text-2xl ${color} font-semibold` } >{name}</h2>
        <img src={thumbnail} alt="sada" className='mt-5' />
    </div>
    </>
  )
}

export default Card