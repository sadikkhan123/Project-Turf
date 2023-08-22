import React from 'react'
import { useParams } from 'react-router-dom'
const Singleturf = () => {
const params = useParams
const {name }  = params();
console.log(name)
  return (
    <div>
        <hi> single turf</hi>
        <p> {name}</p>
    </div>
  )
}

export default Singleturf