import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }

        this.onChangeText = this.onChangeText.bind(this);
    }

    onChangeText (event) {
        this.setState({term: event.target.value});
        
        this.props.onChangeText(event.target.value)
    }

    render() {
        return (
            <div>
                <input className="form-control search-input"
                type="text"
                placeholder="Поиск по записям"
                onChange={this.onChangeText}/>
            </div>
        )
    }
}
