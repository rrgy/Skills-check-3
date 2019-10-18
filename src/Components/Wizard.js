import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Wizard extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
    }
    handleName(e) {
        this.setState({ name: e.target.value })
    }
    handleAddress(e) {
        this.setState({ address: e.target.value })
    }
    handleCity(e) {
        this.setState({ city: e.target.value })
    }
    handleState(e) {
        this.setState({ state: e.target.value })
    }
    handleZip(e) {
        this.setState({ zip: e.target.value })
    }
    postHouse() {
        const { name, address, city, state, zip } = this.state
        axios.post('/api/house', { name, address, city, state, zip })
            .then(this.setState({ name: '', address: '', city: '', state: '', zip: 0 }))
    }
    render() {
        console.log(this.state.state)
        return (
            <div>Wizard
                <Link to='/'><button>Cancel</button></Link>
                <input placeholder='name' onChange={e => this.handleName(e)}></input>
                <input placeholder='address' onChange={e => this.handleAddress(e)}></input>
                <input placeholder='city' onChange={e => this.handleCity(e)}></input>
                <input placeholder='state' onChange={e => this.handleState(e)}></input>
                <input placeholder='zip' onChange={e => this.handleZip(e)}></input>
                <button onClick={() => this.postHouse()}><Link to='/'>Complete</Link></button>
            </div>
        )
    }
}

export default Wizard