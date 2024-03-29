import React from 'react';


const CourseForm = (props) => {
    return (
        <form onSubmit={props.addCourse}>
            Add a course
            <input type="text" value={props.current} onChange={props.updateCourse}/>
            <button type="submit">Add course</button>
        </form>
    )
}

export default CourseForm;