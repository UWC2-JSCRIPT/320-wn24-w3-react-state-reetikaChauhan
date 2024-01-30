import '../App.css'
const HeadForm = () =>{
    return(
        <>
        <div className='head'>
            <div className='navbar'>
                <div className='bnb'>
                    <a href='#' className='bnb'>BnB</a>
                </div>
                <div className='center-links'>
                    <a href='#' className='stays'>Stays</a>
                    <a href='#'className='experiences'>Experineces</a>
                    <a href='#'className='onlineexperiences'>Online Experiences</a>
                </div>
                <div className='logins'>
                    <a href='#'className='byh'>BnB Your Home</a>
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