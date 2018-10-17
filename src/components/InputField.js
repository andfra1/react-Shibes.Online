import React, { Component } from 'react';

class InputField extends Component {

  constructor(props){
    super(props);

    this.state={
      amount: 1
    }

    this.handleInput=this.handleInput.bind(this);
  }
  
  handleInput(e) {
    this.setState({
      amount: e.target.value
    });
    this.props.getAmount(e.target.value);
  }

  render(){
    return(
      <input 
        type={this.props.inputType} 
        min={this.props.minVal} 
        max={this.props.maxVal}
        defaultValue={this.props.minVal}
        onChange={this.handleInput}
      />
    )
  }
}

export default InputField;