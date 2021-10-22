import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './Components/AppHeader';
import CreateNewItem from './Components/CreateNewItem';
import DeleteLastItem from './Components/DeleteLastItem';
import ItemList from "./Components/itemList";


class App extends React.Component {
  state = {
    value: '',
    items: [],
  };

  handleAddItem=(item)=>{
      this.setState({items: [... this.state.items,item]})
  }


  handleDeleteItem=(item)=>{
      this.setState({items: this.state.items.slice(0, -1)})
  }


  render() {
    return (
      <div className="App">
        <AppHeader/>
        <h2>Shopping List</h2>
        <CreateNewItem onAddItem={this.handleAddItem}/>

        <DeleteLastItem onDeleteItem={this.handleDeleteItem} items={this.state.items}/>

        <ItemList items={this.state.items}/>
      </div>
    );
  }
}

export default App;
