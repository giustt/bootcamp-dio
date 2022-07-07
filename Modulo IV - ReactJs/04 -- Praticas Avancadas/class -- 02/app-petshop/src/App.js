import React from 'react'
import PetShop from './PetShop'

function App () {
  const handleClick = () => {
    console.log('Iniciando o banho...')
  }
  
  return (
    <PetShop
      dogs={1}
      cats={3}
      customerName="Gustavo de Cassio -- giustt"
      onClick={handleClick}
      status="done"
    />
  )
}

export default App