function Player({playerhand,handleChange}){
    return(
        <>
         <h2>Player Hand</h2>
            <div className="hand">
                {playerhand.map(card => (
                    <img key={card.id} src={card.image} alt={`${card.rank} of ${card.suits}`} onClick={()=>{handleChange(card)}}/>
                ))}
            </div>
        </>
    )
}
export default Player
