import React, { Component } from 'react'

export default class City extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     name: "surat",
        //     population: "98 million"
        // CountryName={this.state.name}

        // console.log(props);
    }


    // handlechange = () => {
    //     this.setState
    //         ({
    //             name: "vapi",
    //             population: "10 million"

    //         })
    // }
    render() {
        return (
            <>
                <p>city</p>
                {/* <h1>this is my city {this.state.name}</h1>
                <h3>population is {this.state.population}</h3> */}
                <h3>City name  {this.props.CountryName === "india" ? "surat" : "new york"}</h3>

                {/* <button onClick={this.handlechange}>onClick</button> */}

            </>
        )
    }
}
