import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import RestartButton from '../RestartButton/RestartButton';
import './DrinkResults.css';


export default class DrinkResults extends Component {
    render() {
      return (
        <div className='DrinkResults'>
            <header>
                <h2>May we suggest a: </h2>
                <h3>drink name</h3>
            </header>
            <main>
                <br></br>
                <Link to="/">
                    <RestartButton renderAs="button">
                        <span>Results</span>
                    </RestartButton>
                </Link>
            </main>
        </div>
    )}
}

