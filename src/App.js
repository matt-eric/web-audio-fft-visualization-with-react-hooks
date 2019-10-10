import React from 'react';
import './App.scss';
import Box from "./Box"
import VisualDemo from "./VisualDemo"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      arr: [1,2,3,4,5,6,7,8],
      number: 1,
      heightNum: 50
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
    let height = this.getRandomArbitrary(55, 600)
    let num = this.state.number + 1
    if (num === 9){
      num = 1
    }
      this.setState({
        number: num,
        heightNum: height
      })
  }

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  render(){
    return (
      <div className="App">
        <VisualDemo/>
        <Box
          arr={this.state.arr}
          number={this.state.number}
          heightNum={this.state.heightNum}
        />
      </div>
    )
  }
}

export default App;
