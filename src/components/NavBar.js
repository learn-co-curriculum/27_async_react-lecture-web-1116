import React from 'react'

import {Link} from 'react-router'

export default function NavBar(props){
  return(
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
           <a className="navbar-brand" href="#">{props.header}</a>
        </div>
        <div>
          <Link to='/search' >Search</Link>
          <Link to='/about' >About</Link>
        </div>
      </div>
    </nav>
  )
}
