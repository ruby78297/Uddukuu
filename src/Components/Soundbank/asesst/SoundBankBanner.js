import React from 'react'
import Navbar from '../../Banner/Navbar/Navbar'
import "./SoundBankBanner.css"

export const SoundBankBanner = () => {
    return (
        <div  className="soundbank-banner-container-1">
        <div className="soundbank-banner-container">
        {
     window.scrollTo(0, 0)
   }
       <Navbar />
 
       <div className="soundbank-banner-text">
         <div className="soundbank-banner-heading">
            Sound Bank Tracks

           <div className="soundbank-banner-heading-0">
                License hand-picked tracks & beats from top industry producers<br/>
                    Find a track you love, write a topline and release your song<br/>
                    Exclusive licenses for commercial release
           </div>
    
          
         </div>
       </div>
     </div>
     </div>
    )
}
export default SoundBankBanner;
