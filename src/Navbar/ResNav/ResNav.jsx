import React, { useState } from 'react'
import '../ResNav/ResNav.css'
import { MdSignalWifiStatusbar4Bar } from "react-icons/md";
import { Link } from 'react-router';

const ResNav = () => {
    const [show , setshow] = useState(false)
  return (
    <>
      <section className='resnav_part'>
      <MdSignalWifiStatusbar4Bar onClick={()=>setshow(!show)}/>
        {
          show&&
          <div className="resnav">
            <div className='resnav_content'>
             <div className="resnav_col2">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
             </div>
            </div>
         </div>
        }
    </section>
    </>
  )
}

export default ResNav