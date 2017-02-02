import React from 'react'

export default function GifShow(props){
  return (<div className='col-md-8'><img src={props.gif.images.fixed_height.url} /></div>)
}
