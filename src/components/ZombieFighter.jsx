

function ZombieFigher({ name, price, strength, agility, img }) {
  return (
    <>
      
        <p>{name}</p>
        <img src={img} alt="" />
        <p>Strength: {strength} | Agility: {agility}</p>
        <p>Price: {price}</p>
     
    </>
  )
}

export default ZombieFigher