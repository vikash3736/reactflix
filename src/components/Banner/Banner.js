import React from 'react'
import './Banner.css'

const Banner = () => {

  function truncate(str,n){
    return str.length > n ? str.substring(0,n-1) + '.....' : str;
  }
  return (
    <header className='banner' 
    style={{
      backgroundSize: 'cover',
      backgroundImage: `url("https://wallpapercave.com/wp/wp8741529.jpg")`,
      backgroundPosition: 'center center'
    }}>
      
      <div className="bannerContent">
        <h1 className="bannerTitle">Movie Name</h1>
        <div className="bannerButtons">
          <button className='bannerBtn'>Play</button>
          <button className='bannerBtn'>My List</button>
        </div>
        <div className="bannerDescription">
          {truncate(`This is a test Description
        This is a test DescriptionThis is a test DescriptionThis is a test DescriptionThis is a test Description
        This is a test DescriptionThis is a test DescriptionThis is a test DescriptionThis is a test DescriptionThis is a test Description
        This is a test DescriptionThis is a test DescriptionThis is a test DescriptionThis is a test Description
        This is a test DescriptionThis is a test DescriptionThis is a test DescriptionThis is a test DescriptionThis is a test DescriptionThis is a test DescriptionThis is a test DescriptionThis is a test DescriptionThis is a test Description
        This is a test DescriptionThis is a test DescriptionThis is a test DescriptionThis is a test Description`,200)}
        </div>
      </div>

      <div className="bannerFadeBottom" />
    </header>
  )
}

export default Banner