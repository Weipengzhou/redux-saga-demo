import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from './redux/action';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
     
    }
  }
  handClick=()=>{
    this.props.buttonAdd();
  }
  render() {
    const {value,buttonState}= this.props;
    return (
      <div className="App">
          {value}       
        <button onClick={this.handClick.bind(this)} disabled={buttonState}>点击请求</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { value:state.value,buttonState:state.buttonState}
}

function mapDispatchToProps(dispatch) {
   return {
     ...bindActionCreators(action, dispatch)
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
