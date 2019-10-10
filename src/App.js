import React from 'react';
import './App.css';
import Box from "./Box"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      arr: [1,2,3,4,5,6,7,8],
      number: 1
    }
  }

  componentDidMount(){
    this.runCounter()
  }

  runCounter(){
    setInterval(() =>
      this.counter()
    , 1000);
  }

  counter(){
    let num = this.state.number + 1
    if (num === 9){
      num = 1
    }
      this.setState({
        number: num
      })
  }

  render(){
    return (
      <div className="App">
        <Box
          arr={this.state.arr}
          number={this.state.number}
        />
      </div>
    )
  }
}

export default App;
