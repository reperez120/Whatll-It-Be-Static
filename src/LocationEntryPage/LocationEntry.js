import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';
import DrinkResults from '../DrinkResults/DrinkResults';
import { BrowserRouter } from "react-router-dom";
import GetDrinkButton from '../GetDrinkButton/GetDrinkButton';
import './LocationEntry.css';

class LocationEntry extends Component {
    render() {
      return (
        <div className='LocationEntry'>
          <header className='LocationHeader'>
              <h3>Enter the name of your city to get a drink 
                suggestion.
              </h3>
          </header>
          <main> 
          <div className='location-form'>
            <label htmlFor='location-input'>
              Location:
            </label>
            </div>
            <br></br>
            <input type='text' id='location' name='location'/>
            <br></br>
            <Link to="/drink-results">
              <GetDrinkButton renderAs="button">
                <span>Enter</span>
              </GetDrinkButton>
            </Link>
            </main>
        </div>
      );
    } 
  }
  
  export default LocationEntry;