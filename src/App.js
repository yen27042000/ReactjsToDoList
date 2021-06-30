
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { taskName: '' ,
                   task:['task1','task2','task3']};
  }
 ///hàm lấy dữ liệu từ textbox
  myTaskChangeHandler=(event)=>{
    this.setState({taskName: event.target.value});
    //console.log('myTaskChangeHandler',event.target.value);
  };
 //Hàm click để xuất dữ liệu
  addTask(){
    console.log('addtaskh',this.state.taskName);
    if(this.state.taskName===''){
        alert('Vui lòng nhập dữ liệu')
    }else{
      // Đẩy vào mảng 
      this.state.task.push(this.state.taskName);
      //câu lệnh set text box về rỗng khi click chọn xong
       this.setState({taskName: ''});
    }
  }
  render() {
    return (
      <div className="App">
          <br />
          To do list
          <br />
          <div className="aligned">
            <img
              src='./assets/icons8_insert_equation_50px.png'
              alt='Add Task'
              width='25px'
              style={{cursor:'pointer', paddingRight:'10px'}}
              title='Bấm để task'
              onClick={() => this.addTask()}
            />
            <input type='text'
              value={this.state.taskName}
              onChange={this.myTaskChangeHandler}/>

          </div>
          <ul>
              {this.state.task.map((value,index)=>{
                return <li key={index} >{value}</li>
              })}
            </ul>
      </div>
    )
  };

}
export default App;

