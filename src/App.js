import "./App.css";
import React from "react";
import Todo from "./Todo.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { taskName: "", task: [] };
  }
  ///hàm lấy dữ liệu từ textbox
  myTaskChangeHandler = (event) => {
    this.setState({ taskName: event.target.value });
    //console.log('myTaskChangeHandler',event.target.value);
  };
  //Hàm click để xuất dữ liệu
  addTask() {
    //console.log('addtaskh',this.state.taskName);
    if (this.state.taskName === "") {
      alert("Vui lòng nhập dữ liệu");
    } else {
      // Đẩy vào mảng
      const id = this.state.task.length;
      const name = this.state.taskName;
      this.state.task.push({ id, name, done: false });
      //câu lệnh set text box về rỗng khi click chọn xong
      this.setState({ taskName: "" });
    }
  }
  deleteTask = (id) => {
    // console.log('list',this.state.task);
    //console.log('delete task',id);
    const task = this.state.task.filter((task) => task.id !== id);
    this.setState({ task });
  };
  completeTask = (id) => {
    console.log("complateTask task", id);
    const task = this.state.task;
    task.forEach((task) => {
      if (task.id === id) {
        task.done = true;
      }
    });
    console.log("comlateTask ", task);
    this.setState({ task });
  };
  render() {
    return (
      <div className="App">
        <br />
        To do list
        <br />
        <div className="aligned">
          <img
            src="./assets/icons8_insert_equation_50px.png"
            alt="Add Task"
            width="25px"
            style={{ cursor: "pointer", paddingRight: "10px" }}
            title="Bấm để task"
            onClick={() => this.addTask()}
          />
          <input
            type="text"
            value={this.state.taskName}
            onChange={this.myTaskChangeHandler}
          />
        </div>
        <ul style={{ paddingleft: "10px" }}>
          {this.state.task.map((value, index) => {
            console.log("map", value);
            return (
              <Todo
              
                key={index}
                id={value.id}
                value={value.name}
                deleteTask={this.deleteTask}
                completeTask={this.completeTask}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
export default App;
