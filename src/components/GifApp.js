import React from 'react'

import SearchForm from './SearchForm'
import GifShow from './GifShow'

export default class GifApp extends React.Component {

  constructor(){
    super()
    this.state = {
      gif: 'No Search Yet'
    }
  }

  updateGif(query){
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
