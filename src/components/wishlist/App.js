import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import TestCart from './components/pages/TestCart';
// import Books from './components/Books';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';

class App extends React.Component {
  state = {
      books: [
        { id: 1, name: 'Mickey and Mini', value: false },
        { id: 2, name: 'Harry Potter', value: false },
        { id: 3, name: 'Beauty and the beast', value: false },
        { id: 4, name: 'National Geographic: Africa', value: false }
      ]
  };

  handleChange = e => {
    const id = e.target.id;
    this.setState(prevState => {
      return {
        books: prevState.books.map(
          li => (li.id === +id ? { ...li,
            value: !li.value
          } : li)
        )
      };
    });
  };
  handleClick = () => {
    this.setState(prevState => {
      return {
        books: prevState.books.filter(li => !li.value)
      };
    });
  };

  render() {
    // const { id } = this;
    return (
      <Router>
      <div className="App">
      <Header />
      <Route exact path="/" render={props =>(
          <React.Fragment>
          {this.state.books.map(e => (
          <div style={  {backgroundColor: '#f4f4f4', padding: '10px', borderBottom: '1px #ccc dotted'}}
              key={e.id}>

            <input
              type="checkbox"
              id={e.id}
              checked={e.value}
              onChange={this.handleChange}
            />{' '}
            <name htmlFor={e.id}>{e.name}</name> 
        
          </div> 
        ))}
        <button variant="outline-dark" size="sm" onClick={this.handleClick}>Delete</button> 
          </React.Fragment>
        )}/>
        <Route path="/testCart" component={TestCart}/>
        
      </div>
      </Router>
    );
  }
}
//PropType



// const btnStyle = {
//   background: '#fff',
//   color: 'none',
//   border: 'none',
//   padding: '5px 8px',
//   borderRadius: '50%',
//   cursor: 'pointer',
//   float: 'right'
// }




export default App;
