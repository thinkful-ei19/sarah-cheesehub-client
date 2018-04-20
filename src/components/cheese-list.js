import React from 'react';
import {connect} from 'react-redux';
import { fetchCheeses } from '../actions/cheeseAct';
//import {some action} from '../actions/action'

class CheeseList extends React.Component {
  componentDidMount(){
    console.log(this.props)
    this.props.dispatch(fetchCheeses())
  }


render() {

  console.log(this.props);
  const cheeseList = this.props.cheeses.map((cheese, index)=>{
    return(
        <li key={index}> {cheese} </li>
    )
})
  return(
    <div className="cheeseList">
      <ul>
        { cheeseList }
      </ul>
    </div>
  )
}
}

const mapStateToProps = (state) => ({
  cheeses: state.cheeses
})

export default connect(mapStateToProps)(CheeseList);
