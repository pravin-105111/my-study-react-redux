import React, {Component} from 'react';

export default class SignUpDetails extends Component {
    componentDidMount() {
        this.props.getAllStates('Pravin');
    }
    routeToConfirm = () => {
        this.props.history.push('/sign-up-confirm');
    }
    render() {
        let {gitData} = this.props;
        console.log('gitData===',gitData);
        let data1 = gitData && gitData.data.login;
        console.log('aaaa', data1)
        return (
            <div className="App"> 
            <button onClick={this.routeToConfirm}>Sign Up</button>
            </div>
        )
    }
}