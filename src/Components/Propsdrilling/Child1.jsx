import React from 'react'
import Child2 from './Child2'

const Child1 = (props) => {
  return (
    <div>
        <Child2 text= {props.text}/>
    </div>
  )
}

export default Child1