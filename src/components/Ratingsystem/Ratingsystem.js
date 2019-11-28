import React, { useState } from "react";
import "./styles.css";

//Todo Figure out why `export default Ratingsystem;` does not work
export class Ratingsystem extends React.Component {
    render() {
        return (

            <div className="">
                <Checkbox
                    checked={this.checked}
                    onChange={buttonPressed} />
                <span>No purchased </span>
                <br />
                <h>
                    Average Rating: <Average />
                </h>
                <StarRating totalStars={5} />
                <CommentBox data={commentData} />

            </div>
        );
    }
}



var createClass = require('create-react-class');

const Checkbox = props => (
    <input type="checkbox" {...props} />
)

const Star = (

    { selected = false, onClick = f => f }) => (
        <div className={selected ? "star selected" : "star"} onClick={onClick} />
    );


var StarRating = ({ totalStars }) => {
    var [starsSelected, selectStar] = useState(1);
    return (
        <div className="star-rating">
            {[...Array(totalStars)].map((n, i) => (
                <Star
                    key={i}
                    selected={i < starsSelected}
                    onClick={() => selectStar(i + 1)}
                />
            ))}
            <p>

                {starsSelected} out of {totalStars} stars
                <input value={starsSelected} id="SelectedStars" hidden="true" />

            </p>
        </div>


    );
};





function Average() {
    var popularitySum = 0;
    var itemsFound = 0;
    var averagePopularity = 0;
    var len = commentData.length;
    var item = null;

    for (let i = 0; i < len; i++) {
        item = commentData[i];
        if (item.rating) {
            popularitySum = parseFloat(popularitySum) + parseFloat(item.rating);
            itemsFound = itemsFound + 1;
        }
    }
    averagePopularity = popularitySum / itemsFound;
    return averagePopularity;

    popularitySum = 0;
    itemsFound = 0;
    averagePopularity = 0;
}



var commentData = [
    {
        author: "Eric Jerez",
        text: "Horrible book",
        rating: 2
    },
    {
        author: "Jeffffffff",
        text: "Amazing!",
        rating: 5
    },
    {
        author: "Pedro",
        text: "asfsafcas",
        rating: 2
    }
];
var CommentBox = createClass({

    getInitialState: function () {
        return {

            data: commentData
        }
    },
    handleCommentSubmit: function (comment) {
        this.props.data.push(comment);
        var comments = this.state.data;
        var newComments = comments.concat([comment]);
        this.setState({ data: newComments });
    },
    render: function () {
        return (
            <div className="comment-box">
                <CommentForm data={this.props.data} onCommentSubmit={this.handleCommentSubmit} />
                <CommentList data={this.props.data} />
            </div>
        );
    }
});



var CommentList = createClass({
    render: function () {
        return (

            <div className="comment-list">
                {this.props.data.map(function (c) {
                    return (

                        <Comment author={c.author} text={c.text} rating={c.rating} />

                    );
                })}
            </div>
        );
    }
});

var CommentForm = createClass({
    handleSubmit: function (e) {

        document.getElementById("estrellaNumero").value = document.getElementById("SelectedStars").value;

        if (prueba == 1) {


            e.preventDefault();
            var authorVal = e.target[0].value.trim();
            var textVal = e.target[2].value.trim();
            var rateVal = e.target[3].value.trim();

            if (!textVal || !authorVal || !rateVal) {
                return;
            }




            if (document.getElementById("NameBox").disabled == false) {


                this.props.onCommentSubmit({ author: authorVal, text: textVal, rating: rateVal });
                e.target[0].value = '';
                e.target[2].value = '';
                return;
            }

            else {



                this.props.onCommentSubmit({ author: authorVal, text: textVal, rating: rateVal });
                e.target[0].value = 'Anonymous';
                e.target[2].value = '';
                return;
            }
        }

        else {

            e.preventDefault();
            var authorVal = e.target[0].value.trim();
            var textVal = e.target[2].value.trim();
            var rateVal = e.target[3].value.trim();

            if (!textVal || !authorVal || !rateVal) {
                return;
            }
            this.props.onCommentSubmit({ author: authorVal, text: textVal, rating: rateVal });
            e.target[0].value = '';
            e.target[2].value = '';
            return;
        }

    },


    render: function () {
        return (

            <form className="comment-form form-group" onSubmit={this.handleSubmit}>




                <div className="input-group">
                    <span className="input-group-addon">Name</span>
                    <input type="text" id="NameBox" placeholder="Your name" className="form-control" />
                    <Checkbox
                        checked={this.checked}
                        onChange={cambio && myFunction}
                        id="AnonymousCheckbox"
                    />
                    <span>Do not show username (Anonymous)</span>

                </div>

                <div className="input-group">
                    <span className="input-group-addon">Comment</span>
                    <input type="text" id="comentario" maxLength="1200" placeholder="Say something... (Limited to:1200 Chars)" className="form-control" />
                </div>

                <input type="number" id="estrellaNumero" min="1" max="5" hidden="true" />
                <input type="submit" value="Post" className="btn btn-primary" />
            </form>
        );


    }
});

var pressed = false;


function buttonPressed() {
    if (pressed == false) {
        pressed = true;
        document.getElementById("NameBox").disabled = true;
        document.getElementById("comentario").disabled = true;
        document.getElementById("AnonymousCheckbox").disabled = true;


    }
    else {
        pressed = false;
        document.getElementById("NameBox").disabled = false;
        document.getElementById("comentario").disabled = false;
        document.getElementById("AnonymousCheckbox").disabled = false;
    }




}

function myFunction() {



    if (document.getElementById("NameBox").disabled == true) {
        document.getElementById("NameBox").disabled = false;
        document.getElementById("NameBox").value = "";
    }
    else {
        document.getElementById("NameBox").disabled = true;
        document.getElementById("NameBox").value = "Anonymous";
    }
}


var prueba = 1;


const cambio = () => {
    if (prueba == 1) {
        prueba = 2;


    }
    else {
        prueba = 1;

    }
    return prueba;
};


var Comment = createClass({
    render: function () {



        return (
            <div className="comment">
                <h2 className="author">{this.props.author}</h2>
                <h3>Rating: {this.props.rating}</h3>

                {this.props.text}

            </div>
        );





    }
});