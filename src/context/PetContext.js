import React, { Component } from 'react';

const PetContext = React.createContext({
    startFlag: null,
    cat: {},
    dog: {},
    peopleList: []
})

export default PetContext;

export class PetContextProvider extends Component {
    state = {
        startFlag: false,
        cat: {},
        dog: {},
        peopleList: [],
    }

    render() {
        const value = {
            startFlag: this.state.startFlag,
            cat: this.state.cat,
            dog: this.state.dog,
            peopleList: this.state.peopleList
        }

        return (
            <PetContext.Provider value={value}>
                {this.props.children}
            </PetContext.Provider>
        )
    }
}