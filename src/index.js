import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import Tracks from './components/Tracks'
import App from './App'



ReactDOM.render(
    <Router>
        <div>
            <App />
        <Tracks />
        </div>
    </Router>
    ,document.getElementById('root'));
