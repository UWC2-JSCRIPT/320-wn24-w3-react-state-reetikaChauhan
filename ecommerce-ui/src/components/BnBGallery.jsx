import '../App.css'
import PropTypes from "prop-types";

function BnBGallery({bnbs,setSelectedRental,handleAddToCart}){
   return(
    <>
    {
        bnbs.map((bnb,index) =>{
            const handleAddToCartClick = () => {
                // Update the selectedRental state
                setSelectedRental(bnb);
                // Call the handleAddToCart function with the selected rental
                handleAddToCart(bnb);
              };
          return(
            <div className="img-card" key={`bnb-${index}`}>
                <div className='image'>
                    <img src={bnb.image} alt="image"/>  
                    <div className='text'>
                      <button> <h6>{bnb.houseType}</h6> </button>    
                    </div> 
                    <div className='reviews'>
                        <span className="material-symbols-outlined">favorite</span>
                    </div>
                </div>
                <div className='location'>
                    <p>{`${bnb.location.city} , ${bnb.location.country}`}</p>
                    <div className='stars'>
                        <span className="material-symbols-outlined">star</span>
                        <p>{bnb.rating.stars}</p>
                    </div>
                </div>
                <div className='title'>
                    <p>{bnb.title}</p>
                </div>
                <div className='payment'>
                <p>{`$${bnb.payment.cost} , ${bnb.payment.description}`}</p>
                 <button className='book-rental' type="button" onClick= {handleAddToCartClick}>Book Rental</button>
                </div>
                
            </div>
          )
        })
    }
    
    </>
   )
}


BnBGallery.propTypes = {
bnbs: PropTypes.arrayOf(PropTypes.object).isRequired,
setSelectedRental:PropTypes.func.isRequired,
handleAddToCart:PropTypes.func.isRequired
};

export default BnBGallery