import React, { Component } from 'react';
import Switch from 'react-switch'

class ButtonToggle extends Component {
    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }
     
    handleChange(checked) {
        this.setState({ checked });
    }
    render() {
        return (
            <div>
                <Switch onChange={this.handleChange} checked={this.state.checked} />
            </div>
        );
    }
}

export default ButtonToggle;
