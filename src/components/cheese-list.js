import React from 'react';
import {connect} from 'react-redux';
//import {some action} from '../actions/action'

class CheeseList extends React.Component {
  componentDidMount(){
    console.log(this.props)
    //this.props.dispatch(some WebGLActiveInfo())
  }
}

render(){
  console.log(this.props);
  return(
    <div className="cheeseList">
      <ul>
        <li>cheese</li>
      </ul>
    </div>
  )
}

