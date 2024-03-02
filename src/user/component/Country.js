import React, { Component } from 'react'

export default class Country extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "india",
            Timezone: " UTC+5:30"

        }
    }



    handlechange = () => {
        this.setState
            ({
                name: "USA",
                Timezone: "UTC-5"

            })
    }
    render() {
        return (
            <>
                <p>Country</p>
                <h1>this is my Country {this.state.name}</h1>
                <h3>Time Zone is {this.state.Timezone}</h3>


                <button onClick={this.handlechange}>onClick</button>

            </>
        );
    }

}
