import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.css';
import './style.css';
import './style.scss';

import axios from 'axios';

const Dummy = () => {
    //useEffect(() => {
    //    axios.get('http://localhost:4001/').then(function (response) {
    //        // handle success
    //        console.log(response);
    //      })
    //}, []);

    return (
        <div>
            <App />
        </div>
    )
}
ReactDOM.render(<Dummy></Dummy>, document.getElementById('root'));