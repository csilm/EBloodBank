import React from 'react'
import Container1 from './Container1'
import Container2 from './Container2'
import Container3 from './Container3'
import Container4 from './Container4'
import Container5 from './Container5'

const All = () => {
  return (
    <div className= 'absolute flex flex-wrap w-full h-auto justify-center items-center'>
    <Container1 />
    <Container2 />
    <Container3 />
   <Container4 />
   <Container5 />
    </div>
  )
}

export default All