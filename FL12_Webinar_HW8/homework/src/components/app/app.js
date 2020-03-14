import React from 'react';
import {Route,Switch} from 'react-router-dom';
import {CoursePage,AddEditCourse} from '../pages/';
import CourseListHeader from '../course-list-header';
import './app.css';

const App=()=> {
  return (
    <main role='main' className='main'>
    <CourseListHeader/>
    <Switch>
      <Route path='/' component={CoursePage} exact></Route>
      <Route path='/add-edit-course' component={AddEditCourse}></Route>
      <Route path='/add-edit-course/:id' component={AddEditCourse}></Route>
    </Switch>
    </main>
    );
  }

export default App;
