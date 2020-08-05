import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <h1>Petful</h1>
        <p>Description of adoption process</p>
        <img src='https://picsum.photos/200' alt='adopt a pet'></img>
        <Link to='/adopt'><button>Start Adoption Process</button></Link>
      </div>
    )
  }
}

export default LandingPage
