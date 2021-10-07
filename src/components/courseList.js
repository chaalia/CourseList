import React, { Component } from "react";

class CourseList extends Component{

    // render course item
    renderCourse = () => {
        return(
          <ul> 
              <li>
                <span>{this.props.details.name}</span>
                <button onClick={() => {this.props.deleteCourse(this.props.index)}}>Delete course </button>
             </li>
             </ul>
        )
    }

    render() { 
    return(
        <React.Fragment>
                {/* <button> Update Course</button> */}
                {this.renderCourse()}
            
        </React.Fragment>
    );
}
}

export default CourseList;