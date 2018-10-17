import React from 'react';

const ButtonSubmit = (props) => {
  
  return (
    <button type={props.bttnType}
      name={props.bttnType} 
      disabled={props.bttnDisabled}
      onClick={props.sendQuery}
    >
      {props.bttnText}
    </button>
  )
}

export default ButtonSubmit;