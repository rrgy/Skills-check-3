import React, { Component } from 'react'


class House extends Component {

    render() {
        const house = this.props.element
        console.log(this.props.house)
        return (
            <div>House
                <p>{house.propertyname}</p>
                <p>{house.address}</p>
                <p>{house.city}</p>
                <p>{house.state}</p>
                <p>{house.zip}</p>
                <button onClick={() => this.props.delete(house.id)}>delete</button>
            </div >
        )
    }
}

export default House;