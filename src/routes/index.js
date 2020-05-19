import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import route Route from './Route';

import Home from '../components/Home';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';

export default function routes() {
    return <Switch>
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/ContactUs" component={ContactUs} />

    </Switch>
}