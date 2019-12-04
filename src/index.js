import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route} from 'react-router-dom';

// css
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// js
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';

// components
import Header from './components/layout/Header';
import Example1 from './components/examples/Example1';
import Counter from './components/examples/Counter';
import Clock from './components/examples/Clock';
import ToggleButton from './components/examples/ToggleButton';
import Formulaire from './components/examples/Formulaire';
import ApiExample from './components/examples/ApiExample';

ReactDOM.render(
        <Router>
            <Header />
            <Route exact path="/example1" component={Example1} />
            <div className="jumbotron">
                <Route path="/counter" component={Counter} />
                <Route path="/clock" component={Clock} />
                <Route path="/toggle-button" component={ToggleButton} />
                <Route path="/formulaire" component={Formulaire} />
                <Route path="/api" component={ApiExample} />
            </div>
        </Router>
        , document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
