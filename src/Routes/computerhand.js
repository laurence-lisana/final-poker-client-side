function Computer({computerhand}){
  
    
    return(
         <>
         <h2>Computer Hand</h2>
         <div className="hand">
             {computerhand.map(card => (
                 <img key={card.id} src={card.image} alt={`${card.rank} of ${card.suits}`} />
             ))}
         </div>
        </>
        
     )
}
export default Computer

