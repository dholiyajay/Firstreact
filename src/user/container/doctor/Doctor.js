import React, { Component } from 'react'
import Card from '../../component/Card/Card';
// import styles from "./Crad.module.css";


const Docterdetails = [
    {
        "id": 1,
        "name": "Dr. John Smith",
        "speciality": "Cardiologist",
        "hospital": "Hospital A",
        "fees": 6000
    },
    {
        "id": 2,
        "name": "Dr. Jane Johnson",
        "speciality": "Neurologist",
        "hospital": "Hospital B",
        "fees": 7500
    },
    {
        "id": 3,
        "name": "Dr. Peter Patient",
        "speciality": "Dentist",
        "hospital": "Hospital C",
        "fees": 5000
    }
]

export default class Doctor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            doctors: Docterdetails
        };
    }
    render() {
        return (
            <>
                {
                    this.state.doctors.map((v, i) => (
                        <Card data={v} />
                    ))
                }
            </>
        )
    }
}
