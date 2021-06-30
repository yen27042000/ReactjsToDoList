import "./Todo.css";
import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    console.log("props", props);
    this.state = { taskName: "" };
  }
 
  render() {
    return (
      <div className="App1">
        <div className="aligned">
          <img
            src="./assets/icons8_checked_radio_button_50px.png"
            alt="Add Task"
            width="25px"
            style={{ cursor: "pointer", paddingRight: "10px" }}
            title="Bấm để hoàn thành task"
            onClick={() => this.props.completeTask(this.props.id)}
          />
           <img
            src="./assets/icons8_recycle_bin_50px.png"
            alt="Add Task"
            width="25px"
            style={{ cursor: "pointer", paddingRight: "10px"  }}
            title="Bấm để xóa task"
            onClick={() => this.props.deleteTask(this.props.id)}
          />
          <span>{this.props.value}</span>
         
        </div>
      </div>
    );
  }
}
export default Todo;
