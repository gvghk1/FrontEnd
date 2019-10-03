import React, { Component } from 'react'

export class Bookitem extends Component {
    render() {
        return (
            <div>
                <p>Book Name {this.props.book.bookname}</p>
                <p>Author Name {this.props.book.authorName}</p>
                <p>Author Bio {this.props.book.authorBio}</p>
            </div>
        )
    }
}

export default Bookitem