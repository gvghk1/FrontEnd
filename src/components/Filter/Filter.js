import React, { Component } from "react";


class Filter extends Component {

    render() {
        return (
            <div className="filter">
                <div className="alert alert-success" role="alert">

                    <h3>Sort by</h3>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                            <label className="form-check-label" htmlFor="defaultCheck1">
                                Genre
                            </label>

                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck2"></input>
                        <label className="form-check-label" htmlFor="defaultCheck2">
                            Top sellers
                        </label>


                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck3"></input>
                        <label className="form-check-label" htmlFor="defaultCheck3">
                            Book Title
                        </label>
                    </div>
                    <br></br>


                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Book Rating</label>
                        <div className="col-sm-10">
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>All</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>


                    <div className="form-group row">
                        <label htmlFor="exampleFormControlSelect1" className="col-sm-2 col-form-label">Results Per Page</label>
                        <div className="col-sm-10">
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>All</option>
                                <option>10</option>
                                <option>20</option>
                            </select>
                        </div>
                    </div>


                    {/*Todo have to do for loop to get author names to display*/}
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Sort by author</label>
                        <div className="col-sm-10">
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>Author Name here</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="exampleInputPassword1" className="col-sm-2 col-form-label">Price</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" id="exampleInputPrice1"  placeholder="20"/>
                        </div>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="checkbox" aria-label="Checkbox for following text input"></input>
                            </div>
                        </div>
                        <input type="text" className="form-control" placeholder="To sort by date put year here"></input>
                    </div>

                 </div>
            </div>
        );
    }
}

export default Filter;
