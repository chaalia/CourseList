import { Component } from 'react/cjs/react.production.min';
import './App.css';
import CourseForm from './components/courseForm';
import CourseList from './components/courseList'

class App extends Component{
  state = {
    courses: [
      {name: "html"},
      {name: "JS"}
    ] 
  }
  render(){
  return (
    <div className="App">
      <CourseForm/>
      <CourseList/>
    </div>
  );
}
}

export default App;
