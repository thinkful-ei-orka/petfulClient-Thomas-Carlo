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
        isFront: false,
        adoptedPet: false
    }

    handleAdoptPet = () => {
        this.setState({
            adoptedPet: true
        })
    }

    getCat = () => {
        PetApiService.getCat()
            .then(cat => {
                this.setState({
                    cat
                })
            })
    }

    getDog = () => {
        PetApiService.getDog()
            .then(dog => {
                this.setState({
                    dog
                })
            })
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

    handleAddPerson = (person) => {
        console.log(person);
        const newPerson = {
            person
        }

        console.log(newPerson);
        PetApiService.addPerson(newPerson)
            .then(person => {
                let newPeople = [...this.state.peopleList, person];

                this.setState({
                    peopleList: newPeople
                })
            })
    }

    handleToggleFront = () => {
        this.setState({
            isFront: true
        })
    }

    render() {
        const value = {
            startFlag: this.state.startFlag,
            cat: this.state.cat,
            dog: this.state.dog,
            peopleList: this.state.peopleList,
            isFront: this.state.isFront,
            adoptedPet: this.state.adoptedPet,

            getPets: this.getPets,
            getPeople: this.getPeople,
            handleAddPerson: this.handleAddPerson,
            handleToggleFront: this.handleToggleFront,
            handleAdoptPet: this.handleAdoptPet,
            getCat: this.getCat,
            getDog: this.getDog
        }

        return (
            <PetContext.Provider value={value}>
                {this.props.children}
            </PetContext.Provider>
        )
    }
}