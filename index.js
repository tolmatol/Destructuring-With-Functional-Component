import React, { Component } from 'react';
import { render } from 'react-dom';
import Destructuring from './Destructuring'; 

const  App =()=> {

    return (
      <div>
        <Destructuring name="Vishvjeet" rollNo={123456} />
        
      </div>
    );
}

render(<App />, document.getElementById('root'));
