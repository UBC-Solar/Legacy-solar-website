import React from 'react';

const Button = (props) => {
  return (
    <a href={props.Url}><div>{props.children}</div></a>
  )
}

export default Button;