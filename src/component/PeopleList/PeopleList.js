import React, { Component } from 'react'

export default class PeopleList extends Component {


    render() {
        const people = this.props.list;
        console.log(people)
        return(
            <div className='pet-window'>
                {people.map((person, i) => {
                    return <p key={i}>{i}: {person}</p>
                })}
            </div>
        )
    }
}