import React from 'react';
import PostListItem from '../post-list-item/';

import './post-list.css';

const PostList = ({posts, funcToDelete, onImportantOrLike}) => {
    const elements = posts.map(item => {
        return (
            <li key={item.id} className='list-group-item'>
            <PostListItem 
                label = {item.label} 
                important = {item.important} 
                like = {item.like}
                onDelete = {() => funcToDelete(item.id)}
                onImportant = {() => onImportantOrLike(item.id, 'important')}
                onLike = {() => onImportantOrLike(item.id, 'like')}/>
        </li>
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;