import '../App.css'
const HeadForm = () =>{
    return(
        <>
        <div className='head'>
            <div className='navbar'>
                <div className='bnb'>
                    <a href='#' className='bnb'><h4>BnB</h4></a>
                </div>
                <div className='center-links'>
                    <a href='#' className='stays'><h6>Stays</h6></a>
                    <a href='#'className='experiences'><h6>Experineces</h6></a>
                    <a href='#'className='onlineexperiences'><h6>Online Experiences</h6></a>
                </div>
                <div className='logins'>
                    <a href='#'className='byh'><h6>BnB your home</h6></a>
                    <a href='#'><span className="material-symbols-outlined">language</span></a>
                </div>
            </div> 
            <div className='heading'>
                <h4>Learn About Guest Favourites, most loved homes of BnB</h4>
            </div> 
            
        </div>
        </>
    )
}
export default HeadForm; 