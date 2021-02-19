import React from 'react'
import Svgs from './Svgs'

const Hero = (props) => {
  
  return (
      
    <div className='hero'>
      <div className='heroH1'>
        <h5 className='bodyTag'>{`<body>`}</h5>          
        <h5 className='h1Tags'>{`<h1>`}<br/><h1 className='intro'>Howdy,<br/> I'm <img src='../../images/firstLetter.png' className='firstLetter' />ocky,<br/>a web developer.</h1>{`<h1>`} </h5>
        <Svgs /> 
        </div>
    </div>
          
    
  
      
  )
}

export default Hero
