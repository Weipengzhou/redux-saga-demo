import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from './redux/action';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        value:123
    }
  }
  handClick=()=>{
    this.props.buttonAdd();
  }
  render() {
    const {value}= this.props;
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
     ...bindActionCreators(action, dispatch)
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
