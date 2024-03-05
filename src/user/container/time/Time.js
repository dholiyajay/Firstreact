import React, { Component } from 'react'
import style from './Time.module.css';

export default class Time extends Component {
    // 1. Itis used to initialize sate value or biding  the lifecycle of a component. 
    constructor(props) {
        super(props);


        this.state = {
            time: new Date()
        };

    }


    tick = () => {
        // console.log("tick");
        this.setState({
            time: new Date()
        });
    }

    // 3. It is called after moutting. It is mostly used to get data from server

    componentDidMount = () => {
        setInterval(this.tick, 1000)
    }

    // 4. It is called when sate or props value changed

    componentDidUpdate(prevProps, prevState) {
        if (this.state.time !== prevState.time) {
            console.log("4. componentDidUpdate");
        }
    }

    // 5.It is used reaseld occupied resocurcs when we move to another componet

    componentWillUnmount = () => {
        clearInterval(this.intervalId);
        console.log("5.componentWillUnmount");
    }



    // 2. It is used display jsx in DOMException. It is called when any state or props are changed
    render() {
        return (
            <div>
                <h1>Time</h1>
                <h1 className={style.crad}>{this.state.time.toLocaleTimeString()}</h1>
            </div>
        )
    }
}
