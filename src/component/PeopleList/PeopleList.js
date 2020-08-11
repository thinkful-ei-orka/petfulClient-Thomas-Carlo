import React, { Component } from 'react';
import PetContext from '../../context/PetContext';
import PetApiService from '../../pet-api-server';

export default class PeopleList extends Component {
    static contextType = PetContext;

    state = {
        disabled: false,
    }

    handleCycle = () => {
        PetApiService.removePerson();
        this.context.getPeople();
    }

    startProcess = (e) => {
        e.preventDefault();

        const { person } = e.target;

        this.context.handleAddPerson(person.value);
        this.setState({
            disabled: true
        })

        let count = 0;
        let petFlag = true;
        let interval = setInterval(() => {
            count++;
            if(count === 3) {
                this.context.handleToggleFront();
                clearInterval(interval);
            } 
            if(petFlag) {
                PetApiService.removeCat()
                    .then(res => {
                        this.context.getCat();
                    })
                
            } else {
                PetApiService.removeDog()
                    .then(res => {
                        this.context.getDog();
                    })
                
            }
            petFlag = !petFlag;
            this.handleCycle();
        }, 3000)

        
    }


    render() {
        const people = this.props.list;

        console.log(this.context.isFront);

        return (
            <div className='pet-window'>
                <form id="pet-form" onSubmit={this.startProcess}>
                    <div class="button-container">
                        <input id="person" type="text" className="person-input"></input>
                        <button type="submit" disabled={this.state.disabled} >Add To Line</button>
                    </div>
                </form>




                <p>People in line:</p>
                {people.map((person, i) => {
                    return <p key={i}>{i}: {person}</p>
                })}


            </div>
        )
    }
}