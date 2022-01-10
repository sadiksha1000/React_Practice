import React from 'react';

import classes from './Button.module.css';
// import styled from 'styled-components';

const Button = props => {
  return (
    <button type={props.type} className={classes.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

// const Button=styled.button`color:blue`;
export default Button;
