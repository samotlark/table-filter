import React from 'react';
import './App.css';
import Table from "./Table";
import data from "./data";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = data;
  }

  render() {
    return (
      <div className="App">
        <Table columns={["Name", "Surname", "Age"]} lines={this.state.lines}></Table>
      </div>
    );
  }
}

export default App;
