import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import GifApp from './components/GifApp'
import About from './components/About'

import {Router, Route, browserHistory } from 'react-router'

ReactDOM.render(
<Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/search" component={GifApp} />
      <Route path="/about" component={About} />
    </Route>
</Router>, document.getElementById('container'))
