import { Component } from 'react/cjs/react.production.min';
import './App.css';
import CourseForm from './components/courseForm';
import CourseList from './components/courseList'

class App extends Component{
  state = {
    courses: [
      {name: "html"},
      {name: "JS"},
      {name: "Python"}
    ] 
  }
  render(){

  const {courses} = this.state;
  const courselist = courses.map((course,index) => {
    return     <CourseList details={course} key={index}/>
  })
  return (
    <section className="App">
      <CourseForm/>
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
