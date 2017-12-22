import React, { Component } from 'react';
import { connect } from 'react-redux';
import action from './redux/action';
import './App.css';
// const Child =(props)=>(
//   props.list.map((result, index) => (<div key={index}>{result.id}+{result.city}+{result.name}+{result.phone}</div>))
// )

class App extends Component {

  handClick=()=>{
    this.props.add();
  }
  render() {
    const {value,list}= this.props;
    return (
      <div className="App">
                    {value}
                
           <button onClick={this.handClick.bind(this)}>点击请求</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { value:state.value,list:state.list  }
}

function mapDispatchToProps(dispatch) {
  return {
    add: (event) => dispatch(action.buttonAdd(event)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
