import React, { useState } from 'react';
// use
//component name must be uppercase
//must be in the finction/component body
//cannot call conditionally


const UseStateBasics = () => {
  /* console.log(useState('hello not world'));
  const value = useState(1)[0]
  const handler = useState(1)[1]
  console.log(value, handler) */

  const [text, setText] = useState('random title')

  const handleClick = () => {
    if(text === 'random title'){

      setText('hello not world');
    }else{
      setText('random title');
    }
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
