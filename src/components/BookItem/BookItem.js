import React, { Component } from 'react'

export class Bookitem extends Component {

    // style= {"width": "18rem"}
    render() {
        return (

            <div className="card" style={this.style}>
                <div className="card-body">
                    <h5 className="card-title">Book Name: {this.props.book.bookname}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Author Bio: {this.props.book.authorBio}</h6>
                    <p className="card-text">Author Name: {this.props.book.authorName}</p>
                </div>
            </div>

        )
    }
}

export default Bookitem
