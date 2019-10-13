import React, { Component } from 'react';
import Header from './components/layout/Header';
import Wishlist from './components/Wishlist';
import './App.css';

class App extends React.Component {
 
    state = {
      wishlist: [
        {
          id: 1,
          title: 'Beauty and the Beast',
          completed: false 
        },
        {
          id: 2,
          title: 'Harry Potter',
          completed: false 
        },
        {
          id: 3,
          title: 'Mickey and Mini',
          completed: false 
        }
      ]
    }

    // Toggle complete
    markComplete = (id) => {
      this.setState({ wishlist: this.state.wishlist.map(wishlist =>{
        if (wishlist.id === id){
          wishlist.completed = !wishlist.completed
        }
        return wishlist;
      })})
  }

  // Delete Wishlist Item
  delWishlistItem = (id) => {
    this.setState({ wishlist: [...this.state.wishlist.filter(wishlist => wishlist.id!== id)]});
  }
    render(){
  
      return (
        <div className="App">
          <Header />
          <Wishlist wishlist={this.state.wishlist} markComplete={this.markComplete}
           delWishlistItem={this.delWishlistItem} />
        </div>
      );
    }
}

export default App;
