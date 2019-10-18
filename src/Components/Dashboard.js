import React, { Component } from 'react'
import House from './House'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            houses: []
        }
    }
    componentDidMount() {
        axios.get('/api/houses')
            .then(res => this.setState({ houses: res.data }))
            .catch(error => console.log(error))
    }
    deleteHouse(id) {
        axios.delete(`/api/house/${id}`)

    }
    render() {
        return (
            <div>Dashboard
                <Link to='/wizard'><button>Add New Property</button></Link>
                {this.state.houses.map((element) => {
                    return <House
                        house={this.state.houses}
                        element={element}
                        delete={this.deleteHouse} />
                })}
            </div>
        )
    }
}

export default Dashboard