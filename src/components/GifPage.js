import React from 'react'
import axios from 'axios'

import SearchForm from './SearchForm'
import GifShow from './GifShow'

export default class GifPage extends React.Component {

  constructor(){
    super()
    this.state = {
      gif: null
    }
  }

  updateGif(query){
    // What is this??
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query.split(" ").join("+")}&api_key=dc6zaTOxFJmzC`)
      .then( response => {
        console.log(response)
        let gifs = response.data.data
        let index = Math.round( (Math.random() * gifs.length) )
        let gifUrl = gifs[index].images.fixed_height.url
        this.setState({gif: gifUrl})
      })
  }

  render(){
    return(
      <div>
        <SearchForm updateGif={this.updateGif.bind(this)}/>
        < GifShow gif={this.state.gif}/>
      </div>)
  }
}
