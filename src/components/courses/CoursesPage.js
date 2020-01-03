import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: ""
    }
  };

  // arrow functions inherit the binding context of their enclosing
  // scope, so there's to need to do .bind(this) in the constructor
  handleChange = event => {
    // remember, state should be immutable!
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = event => {
    event.preventDefault();
    alert(this.state.course.title);

    // dispatch is automatically passed in by connect when we omit
    // the arg mapDispatchToProps
    this.props.dispatch(courseActions.createCourse(this.state.course));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
      </form>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

// function mapDispatchToProps(actions) {

// }

export default connect(mapStateToProps /* , mapDispatchToProps */)(CoursesPage);
