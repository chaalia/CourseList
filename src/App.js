import { Component } from 'react/cjs/react.production.min';
import './App.css';
import CourseForm from './components/courseForm';
import CourseList from './components/courseList'

class App extends Component{
  state = {
    courses: [
      {name: "html"},
      {name: "JS"},
      {name: "Python"},
      {name: "Flutter"}
    ],
    current: ''
  }
  //  update course
  updateCourse = (e) => {
    this.setState({
      current: e.target.value
    })
  }
  // add course
  addCourse = (e) => {
    e.preventDefault();
    if (e.target.name.value !=='') {
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({name: current});
    this.setState(
      {
        courses,
        current: ''} )}
        else { 
          return false
         }
         console.log(e.target.value)

  }

  // delete course
  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1)
    this.setState(
      {
        courses:courses
      }
    )
  }

  // edit course
  editCourse = (index, value) => {
    let {courses} = this.state
    let course = courses[index]
    course['name'] = value
    this.setState({
      courses
    })

  }

  render(){

  const {courses} = this.state;
  const courselist = courses.map((course,index) => {
    return (
      courses.length>1 ? (<strong> 
        <CourseList details={course} key={index} index={index} update={this.handleChange} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>
      </strong>)
       : "There is no item to show"
       )
  })
  return (
    <section className="App">
      <CourseForm updateCourse={this.updateCourse} addCourse={this.addCourse} current={this.state.current} />
      <ul>
        <h3>
        {courselist}
        </h3>
      </ul>
    </section>
  );
}
}

export default App;
