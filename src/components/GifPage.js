import React from 'react'
import axios from 'axios'

import SearchForm from './SearchForm'
import GifShow from './GifShow'

export default class GifPage extends React.Component {

  constructor(){
    super()
    this.state = {
      gif: 'No Search Yet'
    }
  }

  updateGif(query){
    axios.get('http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC')
      .then(function(response){
        console.log(response)
      })
    this.setState({gif: query})
  }

  render(){
    return(
      <div>
        <SearchForm updateGif={this.updateGif.bind(this)}/>
        < GifShow gif={this.state.gif}/>
      </div>)
  }
}
