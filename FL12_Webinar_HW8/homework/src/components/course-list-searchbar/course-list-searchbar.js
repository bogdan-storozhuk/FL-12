import React,{Component} from 'react';
import {connect} from 'react-redux';
import {searchTermUpdated} from '../../actions'
import './course-list-searchbar.css';

class CourseListSearchbar extends Component{

    onUpdateSearchbar=(e)=>{
        this.props.searchTermUpdated(e.target.value);
    }
    
    render(){
        const{term} = this.props
        return(<input onChange={this.onUpdateSearchbar} value={term} className='course-list-searchbar' type='text' placeholder='Search'></input>);
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        searchTermUpdated:(term)=>dispatch(searchTermUpdated(term))
    }
}

const mapStateToProps=({term})=>{
    return{
        term
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CourseListSearchbar);