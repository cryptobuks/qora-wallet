import connect from '../vendors/connect.js';

import * as Home from './Home';
import * as About from './About';


var Containers = {
    Home,
    About
};

Object.keys(Containers).forEach(function (key) {
    Containers[key] = connect(Containers[key].mapStateToProps)(Containers[key].component);
});

export default Containers;