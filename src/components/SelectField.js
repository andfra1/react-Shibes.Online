import React, { Component } from 'react';

class SelectField  extends Component {
  constructor(props){
    super(props);

    this.state={
      selectedOption: ''
    }

    this.handleSelect=this.handleSelect.bind(this);
  }
  
  handleSelect(e) {
    let rand = Math.floor(Math.random()*(this.props.options.length-1));
    if(this.props.options[e.target.value] === 'random') {
      
      this.setState({
        selectedOption: this.props.options[rand]
      })
      this.props.getSelOpt(this.props.options[rand]);
    }
    else {
      this.setState({
        selectedOption: this.props.options[e.target.value]
      })
      this.props.getSelOpt(this.props.options[e.target.value]);
    }
  }

  render(){
    return(
      <select defaultValue={this.props.options[0]} 
        onChange={this.handleSelect} 
      >
        {this.props.options.map( (index, val) => {
        return  <option key={val} value={val}>
                  {index}
                </option>
        })}
      </select>
    )
  }
}

export default SelectField;