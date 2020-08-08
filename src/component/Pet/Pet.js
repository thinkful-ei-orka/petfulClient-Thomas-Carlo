import React, { Component } from 'react'

export default class Pet extends Component {

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
            </div>
        )
    }
}