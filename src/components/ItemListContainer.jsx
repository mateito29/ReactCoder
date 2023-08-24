import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='titulo-container'>
      <h1 className='titulo-principal'>{greeting}</h1>
    </div>
  )
}

export default ItemListContainer