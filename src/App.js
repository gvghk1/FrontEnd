import React from 'react';
import Bookdetails from './components/Bookdetails/Bookdetails';
import './App.css';

const axios = require('axios');
const url = 'https://geek-text-backend.herokuapp.com/api';

class App extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
            bookdetails:
                [
                    {
                        "_id": "5d97808aeec2e9b7d414ce5a",
                        "id": 33,
                        "book_name": "Kind Hearts and Coronets",
                        "book_cover": "http://dummyimage.com/350x350.png/ff4444/ffffff",
                        "author_first_name": "Harvey",
                        "author_last_name": "Inskipp",
                        "author_biography": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
                        "book_desc": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
                        "book_genre": "Comedy|Drama",
                        "book_publisher": "Eastern Milkpea",
                        "book_releaseDate": "06/08/2019",
                        "book_rating": 4,
                        "email": "hinskippw@discuz.net",
                        "gender": "Male",
                        "book_publishing_info": "6/22/2019",
                        "book_copies_sold": 95,
                        "book_price": 39
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


    componentDidMount() {
        console.log("First Run");
        this.getData();
        console.log("Last Run");
        console.log('after change?', this.state.bookdetails)
    }

    // componentWillMount()
    // {
    //     // Clear the interval right before component unmount
    //     clearInterval(this.interval);
    // }

    async getData() {
        console.log("Get Run");
        try {
            const response = await axios.get(url);
            console.log(response);
            console.log('hoping for data', response.data);
            this.state.bookdetails = response.data;
            //here should change?
            this.setState({bookdetails: response.data});
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
