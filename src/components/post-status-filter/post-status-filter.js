import React, {Component} from 'react';

import './post-status-filter.css';

export default class PostStatusFilter extends Component { 
    constructor(props) {
        super (props);
        this.state = {
            btns: [
                {name: 'All', label: 'Все'},
                {name: 'Like', label: 'Понравилось'}
            ]
        }
    }

    render () {
        const {filter, onSelectFilter} = this.props;
        const {btns} = this.state;
        const buttons = btns.map(element => {
        const clazz = filter === element.name ? 'btn-info' : 'btn-outline-secondary';
            return (
            <button 
                key = {element.name} 
                type="button" 
                className={`btn ${clazz}`}
                onClick={()=> onSelectFilter(element.name)}>{element.label}
                </button>
            )
        });

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}
