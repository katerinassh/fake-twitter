import React, {Component} from 'react';

import './post-list-item.css';

export default class PostListItem extends Component {

    render () {
        const {label, important, like, onDelete, onImportant, onLike} = this.props;

        let classes = "app-list-item d-flex justify-content-between";
        if (important) classes += ' important';
        if (like) classes += ' like';

        return (
            <div className={classes}>
                <span className="app-list-item-label" onClick={onLike}>
                    {label}
                </span>
    
                <div className="d-flex justify-content-center align-items-center">
                <button 
                className="btn-star btn-sm" 
                type="submit"
                onClick={onImportant}>
                    <i className="fa fa-star"></i>
                </button>
    
                <button 
                className="btn-trash btn-sm" 
                type="submit">
                    <i className="fa fa-trash-o" onClick={onDelete}></i>
                </button>
                
                <i className="fa fa-heart"/>
                </div>
            </div>
        )
    }
}

