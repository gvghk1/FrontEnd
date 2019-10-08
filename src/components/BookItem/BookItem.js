import React, { Component } from 'react'

export class Bookitem extends Component {

    // style= {"width": "18rem"}
    render() {
        return (

            <div className="card" style={this.style}>
                <div className="card-body">
                    <h5 className="card-title">Book Name: {this.props.book.book_name}</h5>
                    <img src={this.props.book.book_cover} alt="Girl in a jacket" width="100" height="100"></img>
                    <h6 className="card-subtitle mb-2 text-muted">Author Bio: {this.props.book.author_biography}</h6>
                    <h7 className ="card-subtitle mb-2 text-muted">Publish Date: {this.props.book.book_publishing_info + " "}</h7>
                    <h8 className = "card-subtitle mb-2 text-muted">Release Date:{this.props.book.book_releaseDate} </h8>
                    <br></br><h9 className = "card-subtitle mb-2 text-muted">Genre: {this.props.book.book_genre}  </h9>
                    <p className="card-text">Author Name: {this.props.book.author_first_name + " " + this.props.book.author_last_name}</p>
                </div> 
            </div>

        )
    } 
}

export default Bookitem
