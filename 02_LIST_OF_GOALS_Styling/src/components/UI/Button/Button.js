//import React from "react";
import styled from "styled-components";

// button is like a method that allows us to set a style to a button
// with a syntax similar to CSS
// this button method returns a new button component
// there is methods for all the HTML elements
// the new element will apply all the props we pass in the same way

//Adapting CSS to styled-components : Steps
// remove the first .button selector and brackets
// remove .button from sudo-selector and add & instead
const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

// import './Button.css';

// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
