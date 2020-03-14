import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';


import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import CourseService from './services/course-service';
import {CourseServiceProvider} from './components/course-service-context/';

import store from './store';

const courseService= new CourseService();
ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <CourseServiceProvider value={courseService}>
                <Router>
                    <App/>
                </Router>
            </CourseServiceProvider>
        </ErrorBoundry>
    </Provider>, document.getElementById('root'));