import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./App.css";

class App extends Component {
  counter = 9;
  state = {
    tasks: [
      {
        id: 0,
        text: "Zagrać wreszcie w Wiedźmina 3",
        date: "2018-02-15",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: "Zrobić dobry uczynek",
        date: "2020-11-12",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: "Zwiedzić Mediolan",
        date: "2019-09-10",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 3,
        text: "Zapisać się a kurs trenera persnalnego",
        date: "2019-12-31",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 4,
        text: "Zrobić tatuaz",
        date: "2019-11-30",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 5,
        text: "Przeprowadzić się do Warszawy",
        date: "2020-01-31",
        important: true,
        active: true,
        finishDate: null
      }
    ]
  };

  deleteTask = id => {
    console.log("delete elementu o id" + id);
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex(task => task.id === id);
    // tasks.splice(index, 1);

    // this.setState({
    //   tasks
    // });

    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => tasks.id !== id);
    this.setState({
      tasks
    });
  };

  changeTaskStatus = id => {
    console.log("change w stanie elementu o id" + id);

    const tasks = Array.from(this.state.tasks); //bardziej wydajny rest [...this.state.tasks]
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks
    });
  };

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text: text, //tekst z inputa
      date: date, //text z inputa
      important: important, //wartość z inputa
      active: true,
      finishDate: null
    };
    this.counter++;

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }));

    return true;
  };

  render() {
    return (
      <div className="App">
        <h1>To DO APP</h1>
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
