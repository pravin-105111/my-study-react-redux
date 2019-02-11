import React, { Component } from 'react';
import Select from 'react-select';  

export default class RenderSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
        }
    }

    handleChange = selectedOption => {
        this.setState({
            selectedOption
        })
    }

    render() {
        const { selectedOption } = this.state;
        let {option, label, meta: { touched, error, warning } } = this.props;

        return (
            <div>
                <label>{label}</label>
                <div>
                    <Select value={selectedOption} onChange={this.handleChange} options={option} />
                    {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
                </div>
            </div>
        )
    }
}