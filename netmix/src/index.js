import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter } from 'react-router-dom';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey'

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

serviceWorker.unregister();
