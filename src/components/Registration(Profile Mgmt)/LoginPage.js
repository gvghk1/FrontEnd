import React from "react";


class Registration extends React.Component {
    render() {
        return (
            <div className="">
                <div class = "form-header">
                <h4 class = "title">Welcome to the Account Login Page</h4>
            </div>
            Enter your existing login credentials in the fields below to proceed to proceed: <br/> <br/>
            <form>
                Login ID: <input type="text" id="LoginID" required/> <br/>
                Password: <input type="text" id="Password" required/> <br/>
                <input type = "submit" value="Submit"></input>
            </form>

            <a href="file:///C:/Users/Paul/Desktop/Sample/create%20profile.html?Month=january&Year=2019">Don't have an account? Click here to create one.</a>
            </div>
        );
    }
}