import React, { Component } from "react";

class CourseList extends Component{
    state = {
        isEdit : false
    }

    // render course item
    renderCourse = () => {

        return(
          <ul> 
              <li>
                <span>{this.props.details.name}</span>
                <button onClick={() => this.toggleState()}>Edit Course</button>
                <button onClick={() => {this.props.deleteCourse(this.props.index)}}>Delete course </button>
             </li>
             </ul>
        )
    }

    // update course item
    updateCourseItem = (e) => {
        e.preventDefault();
        this.props.editCourse(this.props.index, this.input.value);
        this.toggleState()
    }
    // render update form
     renderUpdateForm = () => {
        return (
            <form onSubmit={this.updateCourseItem}>
                <input type="text" ref={(v) => {this.input = v}} defaultValue={this.props.details.name}/>
                <button>Update form</button>
            </form>
            
        )
    }

    //toggle state
     toggleState = () => {
        let {isEdit} = this.state
        this.setState(
            {isEdit: !isEdit}
        )
     } 

    render() { 
        let {isEdit} = this.state
    return(
        <React.Fragment>
                {/* <button> Update Course</button> */}
                {isEdit ? this.renderUpdateForm() : this.renderCourse()}
            
        </React.Fragment>
    );
}
}

export default CourseList;