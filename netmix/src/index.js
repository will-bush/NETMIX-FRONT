import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter } from 'react-router-dom';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core';
// import red from '@material-ui/core/colors/red'
import grey from '@material-ui/core/colors/grey'
// import cyan from '@material-ui/core/colors/cyan'

const theme = createMuiTheme({
    palette: {
        primary: grey,
        secondary: {
            main: '#e60a14'
        }
    }
})

ReactDOM.render(

    <MuiThemeProvider theme={theme}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </MuiThemeProvider>
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
