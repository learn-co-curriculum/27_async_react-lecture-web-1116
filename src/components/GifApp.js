import React from 'react'

import SearchForm from './SearchForm'
import GifShow from './GifShow'

export default class GifApp extends React.Component {

  constructor(){
    super()
    this.state = {
      gif: {images: {fixed_height: {}}}
    }
  }

  updateGif(query){
    let term = query.split(' ').join('+')
    fetch(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC`)
      .then(res => res.json())
      .then(gifs => this.setState({gif: gifs.data[0]}))
  }

  render(){
    return(
      <div>
        <SearchForm updateGif={this.updateGif.bind(this)}/>
        < GifShow gif={this.state.gif}/>
      </div>)
  }
}
