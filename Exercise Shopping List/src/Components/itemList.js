import React, { Component } from 'react';
import Item from "./item";

class ItemList extends React.Component {
    render() {
        return (
            <div className="itemList">
            <p className="items">Items</p>
            <ol className="item-list">
                {this.props.items.map((item, index) => <Item item={item} index={index}/>)}
            </ol>
            </div>);
    }
}

export default ItemList;