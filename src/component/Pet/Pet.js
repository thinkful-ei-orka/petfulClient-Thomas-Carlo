import React, { Component } from 'react'
import PetContext from '../../context/PetContext';

export default class Pet extends Component {
    static contextType = PetContext;

    handleAdopt = () => {
        this.context.handleAdoptPet();
    }

    render() {
        const pet = this.props.type;
        return(
            <div className='pet-window'>
                <img src={pet.imageURL} alt={pet.imageDescription}></img>
                <p>{pet.imageDescription}</p>
                <p>Name: {pet.name}</p>
                <p>Sex: {pet.sex}</p>
                <p>Age: {pet.age}</p>
                <p>Breed: {pet.breed}</p>
                <p>Story: {this.props.type.story}</p>

                {this.context.isFront &&
                <>
                    <button onClick={this.handleAdopt}>Adopt me!</button>
                </>
                }
            </div>
        )
    }
}