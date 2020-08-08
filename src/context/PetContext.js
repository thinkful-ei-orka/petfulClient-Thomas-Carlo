import React, { Component } from 'react';
import PetApiService from '../pet-api-server'

const PetContext = React.createContext({
    startFlag: null,
    cat: {},
    dog: {},
    peopleList: [],

    getPets: () => {},
    getPeople: () => {}
})

export default PetContext;

export class PetContextProvider extends Component {
    state = {
        startFlag: false,
        cat: {},
        dog: {},
        peopleList: [],
    }

    getPets = () =>  {
        PetApiService.getPets()
            .then(pets => {
                let cat = pets[1];
                let dog = pets[0];
                this.setState({
                    cat,
                    dog
                })
            })
    }

    getPeople = () => {
        PetApiService.getPeople()
            .then(people => {
                this.setState({
                    peopleList: people
                })
            })
    }

    render() {
        const value = {
            startFlag: this.state.startFlag,
            cat: this.state.cat,
            dog: this.state.dog,
            peopleList: this.state.peopleList,

            getPets: this.getPets,
            getPeople: this.getPeople
        }

        return (
            <PetContext.Provider value={value}>
                {this.props.children}
            </PetContext.Provider>
        )
    }
}