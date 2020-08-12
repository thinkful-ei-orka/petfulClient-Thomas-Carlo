import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <h1>Petful</h1>
        <div className='petful-block'>
        <p>Welcome to petful!  Here at Petful, we get you the right pet in the right order!</p>
        <p>How the adoption process works:</p>
        <p>You'll see two lines of pets: one for cats, and one for dogs.  You put your name on the waiting list, and when you are the first person in line, you'll get to adopt your very own dog or cat!</p>
        <p>When you've adopted your pet, you will be removed from the line for others to adopt their pets.</p>
        <img src='https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='adopt a pet'></img>
        <Link to='/adopt'><button>Start Adoption Process</button></Link>
        </div>
      </div>
    )
  }
}

export default LandingPage
