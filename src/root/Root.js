import React, { Component } from 'react';
import Routes from '../Routes';
import { PetContextProvider } from '../context/PetContext';

class Root extends Component {

  render() {
    return (
      <div className='Root'>
        <PetContextProvider>
        <Routes />
        </PetContextProvider>
      </div>
    )
  }
}

export default Root
