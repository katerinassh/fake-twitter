import React, { Component } from 'react';
import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import PostStatusFilter from '../post-status-filter/';
import PostList from '../post-list/';
import PostAddFrom from '../post-add-form/';

import './app.css';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {label:'I`m going to learn React', important: true, like: false, id: 0},
                {label: 'That`s cool', important: false, like: false, id: 1},
                {label: 'I need a break', important: false, like: false, id: 2}
            ],
            term: '',
            filter: 'All'
        };
        this.maxId = 3;
        
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onImportantOrLike = this.onImportantOrLike.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.onSelectFilter = this.onSelectFilter.bind(this);
    }
    deleteItem (id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id == id);

            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArray = [...before, ...after];
            return {
                data : newArray
            }
        })
    }

    addItem (body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({ data}) => {
            const newArray = [...data, newItem]
            return {
                data : newArray
            }
        })
    }

    onImportantOrLike (id, status) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id == id);
            let newElem = data[index];

            if (status === 'important') {
                newElem = {
                    label: data[index].label,
                    important: !data[index].important,
                    like: data[index].like,
                    id: data[index].id
                }
            }
            if (status === 'like') {
                newElem = {
                    label: data[index].label,
                    important: data[index].important,
                    like: !data[index].like,
                    id: data[index].id
                }
            }

            const newArray = [...data.slice(0, index), newElem, ...data.slice(index + 1)];

            return {
                data: newArray
            }
        })
    }

    searchPosts (items, searchText) {
        if (searchText.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.label.indexOf(searchText) > -1
        });
    }

    onChangeText (newTerm) {
        this.setState({
            term: newTerm
        })
    }

    onFilterPosts (items, filter) {
        if (filter === 'All') {
            return items
        }
        if (filter=== 'Like') {
            return items.filter(item => item.like);
        }
    }

    onSelectFilter (name) {
        this.setState({filter: name});
    }

    render() {
        const visible = this.onFilterPosts(this.searchPosts(this.state.data, this.state.term), this.state.filter);

        return (
            <AppBlock>
                <AppHeader
                allAmount = {this.state.data.length}
                likedAmount = {this.state.data.filter(element => element.like).length}/>
                <div className="search-panel d-flex">
                    <SearchPanel
                    onChangeText = {this.onChangeText}/>
                    <PostStatusFilter
                    filter={this.state.filter}
                    onSelectFilter = {this.onSelectFilter}/>
                </div>
                <PostList 
                    posts = {visible} 
                    funcToDelete = {this.deleteItem} 
                    onImportantOrLike = {this.onImportantOrLike}/>
                <PostAddFrom 
                    onAdd = {this.addItem}/>
            </AppBlock>
        )
    }
}

