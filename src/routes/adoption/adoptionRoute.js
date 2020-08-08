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
        return(
            <>
            <p>Hello</p>
            <Pet type={this.context.cat} />
            <Pet type={this.context.dog} />

            <PersonList list={this.context.peopleList} />
            </>
        )
    }
}