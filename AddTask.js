import React, { Component } from 'react'
import './AddTask.css'

class AddTask extends Component {
    state = {
        text: '',
        checked: false,
        date: "2019-09-25",
    }
    render() {
        return (
            <div className="form">
                <input type="text" placeholder="dodaj zadanie" value={this.state.text} />
                <input type="checkbox" checked={this.state.checked} id={important} />
                <label htmlFor="important">Priorytet</label>
                <br />
                <label htmlFor="date">Do kiedy zrobić</label>
                <input type="date" value={this.state.date} min="2019-01-01" max="2020-12-31" />
                <button>Dodaj</button>
                <br />
            </div>

        );
    }
}

export default AddTask;
