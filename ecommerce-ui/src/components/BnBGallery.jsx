import '../App.css'
function BnBGallery({bnbs}){
   return(
    <>
    {
        bnbs.map((bnb) =>{
          return(
            <div className="img-card">
                <div className='image'>
                    <img src={bnb.image} alt="image"/>  
                    <div className='text'>
                      <button> <h6>{bnb.houseType}</h6> </button>    
                    </div> 
                    <div className='reviews'>
                        <span class="material-symbols-outlined">favorite</span>
                    </div>
                </div>
                <div className='location'>
                    <p>{`${bnb.location.city} , ${bnb.location.country}`}</p>
                    <div className='stars'>
                        <span class="material-symbols-outlined">star</span>
                        <p>{bnb.rating.stars}</p>
                    </div>
                </div>
                <div className='title'>
                    <p>{bnb.title}</p>
                </div>
                <div className='payment'>
                <p>{`$${bnb.payment.cost} , ${bnb.payment.description}`}</p>
                </div>
               
            </div>
          )
        })
    }
    
    </>
   )
}
export default BnBGallery