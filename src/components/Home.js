import React from 'react';
import goldImage from './gold.jpg';
function Home() {

  return (
    <>

      <img src={goldImage} alt="goldImage" className='md-0' style={{
        width: "100%",
        height: "600px"
      }} />

    </>
  )
}
export default Home;