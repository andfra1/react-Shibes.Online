import React, { Component } from 'react';
import InputField from './components/InputField';
import SelectField from './components/SelectField';
import ButtonSubmit from './components/ButtonSubmit';

const API = 'http://shibe.online/api/';

class Form extends Component {
  constructor(props){
    super(props);

    this.state={
      selectOptions: ['shibes','cats','birds','random'],
      selectedOption: 'shibes',
      amount: 1,
      data: [],
      isLoading: false,
      error: null
    }

    this.handleForm = this.handleForm.bind(this);
    this.query = this.query.bind(this);
  }

  query() {
      this.setState({
        isLoading: true
      })
      fetch(API + this.state.selectedOption + "?count=" + this.state.amount)
      .then(response => {
        this.setState({
          isLoading: false
        })
        if (response.ok) {
          //console.log('ok',response);
          return response.json();
        } else {
         // console.log('err',response);
          throw new Error('Something went wrong ...');
        }
      })
        .then(data => this.setState({
          data
        }))
        .catch(error => this.setState({
          error, 
          isLoading: false
        }));
        //console.log('this.state.error',this.state.error);
  }

  getSelOpt = val => {
    this.setState({
      selectedOption: val
    })
  }

  getAmount = val => {
    this.setState({
      amount: val
    })
  }

  handleForm(event) {
    event.preventDefault();
  }

  render(){
    const { error, data, isLoading } = this.state;

    return (
      <div>
      <form onSubmit={this.handleForm}>

        <InputField 
          inputType="number" 
          minVal={1} 
          maxVal={10}
          getAmount={this.getAmount}
        />

        <SelectField 
          options={this.state.selectOptions}
          getSelOpt={this.getSelOpt}/>

        <ButtonSubmit
          bttnType='submit' 
          bttnText={isLoading ? 'Loading...' : 'Submit'} 
          bttnDisabled={isLoading ? 'disabled' : ''}
          sendQuery={this.query}
        />
      </form>
      <ul>
      {error && <p>{error.message}</p>}
      {data.map(hit =>
          <li key={hit}>
            <a href={hit} target="_blank" rel="noopener noreferrer"><img src={hit} width="200px" alt={hit}/></a>
          </li>
        )}
      </ul>
      </div>
    )
  }
}

export default Form;