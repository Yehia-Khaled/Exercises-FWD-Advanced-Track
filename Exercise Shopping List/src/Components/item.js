import React, { Component } from 'react';
import PropTypes from "prop-types";


const Item=(props)=>{
    return(<div>
        <li key={props.index}>{props.item}</li>
    </div>)
}

Item.propTypes = {
    item: PropTypes.string.isRequired,
};
export default Item;