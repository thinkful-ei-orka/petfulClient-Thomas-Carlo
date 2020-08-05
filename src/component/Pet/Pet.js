import React, { Component } from 'react'

export default class Pet extends Component {

    render() {
        const pet = this.props.type;
        return(
            <div className='pet-window'>
                <img src={pet.imageURL} alt={pet.imageDescription}></img>
                <p>{pet.imageDescription}</p>
                <p>{pet.name}</p>
                <p>{pet.sex}</p>
                <p>{pet.age}</p>
                <p>{pet.breed}</p>
                <p>{this.props.type.story}</p>
            </div>
        )
    }
}