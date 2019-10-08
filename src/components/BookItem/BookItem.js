import React, { Component } from 'react'

export class Bookitem extends Component {

    // style= {"width": "18rem"}
    render() {
        return (

            <div className="card" style={this.style}>
                <div className="card-body">
                    <h5 className="card-title">Book Name: {this.props.book.book_name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Author Bio: {this.props.book.author_biography}</h6>
                    <h7 className ="card-subtitle mb-2 text-muted">Publishing: {this.props.book.book_publishing_info}</h7>
                    <p className="card-text">Author Name: {this.props.book.author_first_name + " " + this.props.book.author_last_name}</p>
                </div>
            </div>

        )
    }
}

export default Bookitem
