import React, { Component } from 'react';

class DeleteLastItem extends React.Component {
    state={
        items:[],
    }
    deleteLastItem = event => {
        this.props.onDeleteItem();
    };

    noItemsFound = () => {
        return this.props.items.length === 0;
    };

    render() {
        return (
            <button onClick={this.deleteLastItem} disabled={this.noItemsFound()}>
                Delete Last Item
            </button>
        );
    }
}

export default DeleteLastItem;