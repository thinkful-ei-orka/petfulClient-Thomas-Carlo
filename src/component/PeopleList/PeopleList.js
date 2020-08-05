import React, { Component } from 'react'

export default class PeopleList extends Component {


    render() {
        const list = this.props.list;
        return(
            <div className='pet-window'>
                {list.forEach((person, i) => {
                    return <p>{i}: {person}</p>
                })}
            </div>
        )
    }
}