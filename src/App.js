import React from 'react';
import Bookdetails from './components/Bookdetails';
import './App.css';

class App extends React.Component {
  state = {
    bookdetails: [
      {
       id: 1,
       bookname: 'Courage Mountain',
       authorName: 'Ferguson Yeomans',
       authorBio: 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
       bookDescrip: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
       bookGenre: 'Adventure|Children|Drama',
       book_pub: 'Dotted Hawthorn',
       book_rel: '9/12/2018',
       bookRate: '5',
      },
      {
        id: 2,
        bookname: 'idk',
        authorName: 'person',
        authorBio: 'pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
        bookDescrip: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
        bookGenre: 'Adventure|Children|Drama',
        book_pub: 'Dotted Hawthorn',
        book_rel: '9/12/2018',
        bookRate: '5',
       }
    ]
  }
  render(){
 
  return (
    <div className="App">
      <Bookdetails bookdetails = {this.state.bookdetails}/>
    </div>
  ); 
}
}

export default App;
