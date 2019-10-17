import React from "react";


class Registration extends React.Component {
  check_entries(){
    var loginid = document.getElementByID("LoginID");
    var pw = document.getElementByID("Password");
    var cfrmpw = document.getElementByID("ConfirmPassword");
    var name = document.getElementByID("Name");
    var nickname = document.getElementByID("Nickname");
    var email = document.myForm.email.value // document.getElementByID("email");
    var addrLine1 = document.getElementByID("AddressLine1");
    var city = document.getElementByID("City");
    var state = document.getElementByID("State");
    var zip = document.getElementByID("ZIPCode");
    // insert form validation here
    }
  render() {
    return (
      <div className="">
        <form>
            Welcome to the Account Creation page. Here, you will create your account. <br/>
            Enter the following: <br/> <br/> 
            Login Credentials: <br/>
            Login ID: <input type="text" id="LoginID" required/> <br/>
            Password: <input type="text" id="Password" required/> <br/>
            Confirm Password: <input type="text" id="ConfirmPassword" required/>
              <br/>
              <br/>
            Personal Information: <br/>
            Name: <input type="text" id="Name" required/> <br/>
            Nickname (for commenting and rating): <input type="text" id="Nickname" required/> <br/>
            E-mail Address: <input type="text" id="email" required/> <br/>
            Home/Street Address: <br/>
            Unit Number and Street: <input type="text" id="AddressLine1" required/> <br/>
            City: <input type="text" id="City" required/> <br/>
            State (2 letters-abbreviation): <input type="text" id="State" required/> <br/>
            ZIP Code: <input type="text" id="ZIPCode" required/> <br/> <br/>
            Credit Card Information: <br/> 
            Card Type (VISA, AmEx, etc): <input type="text" id="cc_type" required/> <br/>
            Card # (no spaces or dashes): <input type="text" id="cc_number" required/> <br/>
            Exp Date (MM/YYYY): <input type="text" id="cc_month" required/> /
                        <input type="text" id="cc_year" required/> <br/>
            CVV: <input type="text" id="cc_cvv" required/> <br/> <br/>
            <input type = "submit" value="Submit" onClick = "check_entries();"/>
        </form>
      </div>
    );
  }
}

export default Registration;
