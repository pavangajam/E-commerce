import React from 'react'
import img from '../images/one.jpg'

function Home() {
  return (

    <div className='container' align="center">
      <img src={img} alt=".." width="80%" className='mt-5'></img>
      <h3 className='profile-heading'>
        This is an E commerce website ,, here u can sell and buy any products u want..
        there is an secure transaction system where u can purchase ur items in  a safety manner..
      </h3>
    </div>
  )
}

export default Home