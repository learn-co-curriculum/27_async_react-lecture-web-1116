import React, { Component } from 'react'

export default class SearchForm extends Component {

  constructor(){
    super()
    this.state = {query: ''}
  }

  handleChange(e){
    this.setState({
      query: e.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.updateGif(this.state.query)
    this.setState({query: ''})
  }

  render(){
    return (<div className='col-md-4'>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <input type='text' onChange={this.handleChange.bind(this)}value={this.state.query} />
                <input type='submit' />
              </form>
            </div>
          )
  }
}
