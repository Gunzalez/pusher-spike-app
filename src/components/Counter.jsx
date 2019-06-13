import React, { Component } from 'react';
import Pusher from 'pusher-js';

const stages = [
    "Agreement",
    "ID Verification",
    "Credit Check",
    "Contract Signing"
];

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stage: 0
        }
    }

    componentDidMount() {

        Pusher.logToConsole = true;

        const pusher = new Pusher("c325365c91b370d9cf45", {
            cluster: "eu",
            forceTLS: true
        });

        const channel = pusher.subscribe("my-channel");
        channel.bind("my-event", (data)=> {
            console.log(this.state.stage);
            if(this.state.stage === (stages.length -1)){
                this.setState({
                    stage : 0
                });
            } else {
                this.setState({
                    stage : this.state.stage + 1
                });
            }
        });
    }

    render() {
        const {stage} = this.state;


        return (
            <div className="container">
                <h2>{ stages[stage] }</h2>
            </div>
        );
    }
}

export default Counter;
