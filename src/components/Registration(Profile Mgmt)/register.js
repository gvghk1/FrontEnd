import React, { Component } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
//import "./Profile.css";
import "./style.scss";

interface Address {
  unit_street: string;
  city: string;
  state: string;
  zip_code: int;
}

interface Card {
  cc_num: string;
  month: string;
  year: string;
  cvv: string;
}

export class Register extends React.Component {

  state = {
    Addresses: [],
    Cards: []
  }

  addAddress() {
    this.setState({Addresses: [...this.state.Addresses, '']})
  }

  deleteAddress(index) {
    // remove item at index
    this.state.Addresses.splice(index, 1)

    // update the state
    this.setState({Addresses: this.state.Addresses})
  }

  handleChangeAddress(e, index){
    this.state.Addresses[index] = e.target.value
    this.setState({Addresses: this.state.Addresses})
  }

  addCard() {
    this.setState({Cards: [...this.state.Cards, '']})
  }

  deleteCard(index) {
    // remove item at index
    this.state.Cards.splice(index, 1)

    // update the state
    this.setState({Cards: this.state.Cards})
  }
  
  handleSubmit = () => { // method to handle submission of Login and Password

  }

  handleChangeCards(e, index){
    this.state.Cards[index] = e.target.value
    this.setState({Cards: this.state.Cards})
  }

  

  render() {
    return (
      <div className="base-container">
        <form name = "form">
        Welcome to the Account Creation page. Here, you will create your account.<br/>
        <a href="">Already have an account? Click here to login.</a> <br/>
        Enter the following to proceed: <br/> <br/>
        <div class = "form-header">
        <h4 class = "title">Login Credentials</h4>
        </div>
        Login ID: <input type="text" id="LoginID" required/> <br/>
        Password: <input type="text" id="Password" required/> <br/>
        (Password must be 6-20 characters, and contain at least one lowercase letter, uppercase letter, and a number 0-9)<br/>
    
          
        <div class = "form-header">
        <h4 class = "title">Personal Information</h4>
        </div>
        <div className ='lbl'>
          Name: <input type="text" id="Name" required/><br/>
          Nickname: <input type="text" id="Nickname" required/> <br/>
          E-mail Address: <input type="text" id="email" required/> <br/>
        </div>
    
        <div class = "form-header">
        <h4 class = "title">Shipping/Home Addresses</h4>
        <h5 class = "title">Address 1</h5><br/>
        </div>
        <div className ='lbl'>
        Unit Number and Street: <input type="text" id="AddressLine1" required/> <br/>
        City: <input type="text" id="City" required/> <br/>
        State (2 letter-abbreviation): <input type="text" id="State" required/> <br/>
        ZIP Code: <input type="text" id="ZIPCode" required/> <br/><br/>
        </div>
        {
          this.state.Addresses.map((address, index)=>{
            return (
              <div key={index}>
                <h5 class = "title">Address {index + 2}</h5><br/>
                <div className = 'lbl'>
                Unit Number and Street: <input type="text" id="AddressLine1" onChange = {(e) => this.handleChangeAddress(e, index)
                    } value = {address}/> <br/> 
                City: <input type="text" id="City" onChange = {(e) => this.handleChangeAddress(e, index)
                    } value = {address}/> <br/> 
                State (2 letter-abbreviation): <input type="text" id="State" onChange = {(e) => this.handleChangeAddress(e, index)
                    } value = {address}/> <br/>
                ZIP Code: <input type="text" id="ZIPCode" onChange = {(e) => this.handleChangeAddress(e, index)
                    } value = {address}/><br/><br/>
                <button onClick = {(e)=> this.deleteAddress(e)}>Delete This Address</button><br/> <br/>
                </div>
              </div>
            )
          })
        }
        <br/><button onClick={(e) =>this.addAddress(e)}>Add Address</button><br/><br/>
        <br/> <br/>

 
        <div class = "form-header">
        <h4 class = "title">Credit Cards</h4>
        </div>
        <h5 class = "title">Card 1</h5><br/>
        Card # (no spaces or dashes): <input type="text" id="cc_number" required/> <br/>
        Exp Date (MM/YYYY): 
          <div class="date-field">
            <div class="month">
              Month <select name="Month">
               <option value="january">01</option>
                <option value="february">02</option>
                <option value="march">03</option>
                <option value="april">04</option>
                <option value="may">05</option>
                <option value="june">06</option>
                <option value="july">07</option>
                <option value="august">08</option>
                <option value="september">09</option>
                <option value="october">10</option>
                <option value="november">11</option>          
                <option value="december">12</option>          
              </select>
              </div>
              <div class="year">
                Year <select name="Year">
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>        
                  <option value="2023">2023</option>        
                  <option value="2024">2024</option>        
                  <option value="2025">2025</option>        
                  <option value="2026">2026</option>                
                </select>
              </div>
              </div>
              CVV: <input type="text" id="cc_cvv" required/> <br/> <br/>
              {
                this.state.Cards.map((card, index)=>{
                  return (
                    <div key={index}>
                      <h5 class = "title">Card {index + 2}</h5><br/>
                      Card # (no spaces or dashes): <input type="text" id="cc_number" required/> <br/>
                      Exp Date (MM/YYYY): 
                        <div class="date-field">
                          <div class="month">
                            Month <select name="Month">
                            <option value="january">01</option>
                              <option value="february">02</option>
                              <option value="march">03</option>
                              <option value="april">04</option>
                              <option value="may">05</option>
                              <option value="june">06</option>
                              <option value="july">07</option>
                              <option value="august">08</option>
                              <option value="september">09</option>
                              <option value="october">10</option>
                              <option value="november">11</option>          
                              <option value="december">12</option>          
                            </select>
                            </div>
                            <div class="year">
                              Year <select name="Year">
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>        
                                <option value="2023">2023</option>        
                                <option value="2024">2024</option>        
                                <option value="2025">2025</option>        
                                <option value="2026">2026</option>                
                              </select>
                            </div>
                            </div>
                            CVV: <input type="text" id="cc_cvv" required/> <br/> <br/>
                            <button onClick = {(e)=> this.deleteCard(e)}>Delete This Card</button><br/> <br/>
                    </div>
                  )
                })
              }
              <button onClick={(e) =>this.addCard(e)}>Add Card</button><br/><br/>
              <br/> <br/>
              
              <input
                className="submit-button"
                type="submit"
                value="Submit"
                onClick={this.handleSubmit}
              /><br/><br/>
            </form></div>
    )
  }
}
export default Register
