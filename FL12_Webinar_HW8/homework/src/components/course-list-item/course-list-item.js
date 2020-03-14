import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {lessonRemovedFromCourse} from '../../actions';
import './course-list-item.css';
import deleteIcon from '../../delete.svg';
import editIcon from '../../edit.svg';

class CourseListItem extends Component{

    render(){
        const {
            courseLesson,
            onDelete,
            onEdit
        } = this.props;
        const {
            id,
            topic,
            date,
            lecturer,
            duration
        } = courseLesson;
        const editLink=`/add-edit-course:${id}`;
        return(
            <div className='course-list-item'>
                <span>{date}</span>
                <span className='topic'>{topic}</span>
                <span>{lecturer}</span>
                <span>{duration}</span>
                <button onClick={()=>onDelete(id)}><img className='icon' src={deleteIcon} alt='deleteIcon'></img>Delete</button>
                <button onClick={()=>onEdit(id)}>
                    <Link className='edit-link' to='/add-edit-course'>
                        <img className='icon' src={editIcon} alt='editIcon'></img>
                        Edit
                    </Link>
                </button>
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onDelete:(id)=>dispatch(lessonRemovedFromCourse(id)),
        onEdit:(id)=>console.log(`on edit ${id}`)
    }
}

export default connect(null,mapDispatchToProps)(CourseListItem);