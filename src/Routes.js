import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import adoptionRoute from './routes/adoption/adoptionRoute';
import processRoute from './routes/process/processRoute';
import LandingPage from './routes/LandingPage/LandingPage';

class Routes extends Component {
    render () {
        return (
            <>
            <Switch>
                <Route exact path='/' component={LandingPage} />
                <Route exact path='/adopt' component={adoptionRoute} />
                <Route exact path='/proces' component={processRoute} />
            </Switch>
            </>
        )
    }
}

export default Routes;