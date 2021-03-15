import React, { Component } from 'react';

import './post-add-form.css';

export default class PostAddFrom extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            text: ''
        }

        this.onChangeText = this.onChangeText.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeText (event) {
        this.setState({
            text: event.target.value
        })
    }

    onSubmit (event) {
        event.preventDefault();

        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        })
    }

    render () {
        return (
            <form 
                className="bottom-panel d-flex"
                onSubmit = {this.onSubmit}>
                <input type="text" 
                placeholder="О чём вы сейчас думаете?" 
                className="form-control new-post-label"
                value={this.state.text}
                onChange={this.onChangeText}/>
                <button 
                type="submit"
                className="btn btn-outline-secondary">
                    Добавить
                </button>
            </form>
        )
    }
}
