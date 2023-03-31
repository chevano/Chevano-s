import React from 'react';
import '../App.css';

const Home = () => {
  return (
    <>
      <div className='main'>
        <div></div>
        <video 
          src="https://player.vimeo.com/external/347024091.hd.mp4?s=2c27a6159bf05b60fdfc085b6f37be26dc06e71a&profile_id=174"
          autoPlay 
          loop 
          muted 
        />
        <div className="content">
            <h1>Welcome</h1>
            <p>To Chevano's.</p>
        </div>
    </div>
      <section className='home-image'>
        <p className="intro">Here you get to fulfill your <br></br>Jamaican cusine fantasy!</p>
      </section>
    </>
  )
}
export default Home;