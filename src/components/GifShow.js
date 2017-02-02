import React from 'react'

export default function GifShow(props){
  if (!props.gif) {
    return <div></div>
  }
  return (<div className='col-md-8'><img src={props.gif} /></div>)
}
