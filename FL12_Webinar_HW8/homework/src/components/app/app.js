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
      <Route path='/add-edit-course' component={AddEditCourse} exact></Route>
      <Route path='/add-edit-course/:id' render={({match})=>{
        const {id}=match.params;
        return <AddEditCourse itemId={id}/>
      }}></Route>
    </Switch>
    </main>
    );
  }

export default App;
