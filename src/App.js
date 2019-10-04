import React from 'react';
import Bookdetails from './components/Bookdetails/Bookdetails';
import './App.css';
const axios = require('axios');
const url = 'https://geek-text-backend.herokuapp.com/api';
class App extends React.Component {

    constructor(props)
  {
    super(props);
    this.state= {
      bookdetails: 
        [
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
        ],
      FetchedAt: null
    }
  }

    styling = {
        textAlign: "center",
    };

    componentDidMount(){
        console.log("First Run")
        this.getData();
        console.log("Last Run")
    }

    // componentWillMount()
    // {
    //     // Clear the interval right before component unmount
    //     clearInterval(this.interval);
    // }

    async getData() 
    {
        console.log("Get Run")
        try {
          const response = await axios.get(url);
          console.log(response)
          console.log('hoping for data', response.data)
          this.state.bookdetails = response.data
          console.log("Set Run")
        } catch (error) {
          console.error(error);
        }
      }

    render() {

        return (
            <div className="App" style={this.styling}>
                <h1>GeekText</h1>
                <p>Library</p>
                <Bookdetails bookdetails={this.state.bookdetails}/>
            </div>
        );
    }
}

export default App;
