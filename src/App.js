import React from 'react'
import decimaltobinary from './decimaltobinary'
import binarytodecimal from './binarytodecimal'

class App extends React.Component {

  constructor(){
    super()

    this.state = {
      decimalNumber: "",
      binaryNumber: "",
    }

    this.handleChange = this.handleChange.bind(this)
  }


    handleChange({ target: { name, value } }) {
      
      const newState = { decimalNumber: "", binaryNumber: "" }
    
      if (name && value) {

        newState[name] = value

        console.log(newState);

        newState[name === 'binaryNumber' ? 'decimalNumber' : 'binaryNumber'] = {
          binaryNumber: binarytodecimal,
          decimalNumber: decimaltobinary, 
        }[name](value)
        

        console.log(newState);
      }
    
      this.setState(newState)
    }

  render(){
    return(
      <div>
        <div className="wrapperBlock">
          <h1>Decimal</h1>
          <input
            name="decimalNumber"
            type="number"
            value={this.state.decimalNumber}
            onChange={this.handleChange}
          />


          <h1>Binary</h1>
          <input
            name="binaryNumber"
            type="number"

            value={this.state.binaryNumber}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }

}


export default App