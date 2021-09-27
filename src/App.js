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
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({name: current});
    this.setState(
      {
        courses,
        current: ''} )
  }

  render(){

  const {courses} = this.state;
  const courselist = courses.map((course,index) => {
    return <strong>  <CourseList details={course} key={index} update={this.handleChange}/></strong>
  })
  return (
    <section className="App">
      <CourseForm updateCourse={this.updateCourse} addCourse={this.addCourse} current={this.state.current}/>
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
