import React, { useState } from 'react'
import './buttons.css'



function Buttons() {

  const [one] = useState(1)
  const [two] = useState(2)
  const [three] = useState(3)
  const [four] = useState(4)
  const [five] = useState(5)
  const [six] = useState(6)
  const [seven] = useState(7)
  const [eight] = useState(8)
  const [nine] = useState(9)
  const [zero] = useState(0)


  return (
    <div className='button'>
        <div className='but' onClick={()=>{console.log(one)}}>1</div>
        <div className='but'>2</div>
        <div className='but'>3</div>
        <div className='but'>/</div>
        <div className='but'>4</div>
        <div className='but'>5</div>
        <div className='but'>6</div>
        <div className='but'>x</div>
        <div className='but'>7</div>
        <div className='but'>8</div>
        <div className='but'>9</div>
        <div className='but'>-</div>
        <div className='but'>%</div>
        <div className='but'>0</div>
        <div className='but'>+</div>
        <div className='but'>=</div>
       
        
    </div>
  )
}

export default Buttons