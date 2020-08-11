import React, { Component } from 'react';
import Pet from '../../component/Pet/Pet';
import PetContext from '../../context/PetContext';
import PersonList from '../../component/PeopleList/PeopleList';

export default class AdoptionRoute extends Component {
    static contextType = PetContext

    componentDidMount() {
        this.context.getPets();
        this.context.getPeople();
    }

    render() {

        console.log(this.context.peopleList);
        return (
            <>
                <PersonList list={this.context.peopleList} />
                <div className="pet-display">
                    <Pet type={this.context.cat} />
                    <Pet type={this.context.dog} />
                </div>

                {this.context.adoptedPet && 
                <div className='pet-adopted-message'>
                        <p>You've adopted a new pet!</p>
                </div>
                }
                
            </>
        )
    }
}