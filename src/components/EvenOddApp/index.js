// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrease = () => {
    const randomNumber = this.getRandomNumber()

    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state

    const number = count % 2 === 0 ? 'Count is Even' : 'Count is Odd'

    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="heading">Count {count}</h1>
          <p className="even-odd">{number}</p>
          <button type="button" className="button" onClick={this.onIncrease}>
            Increment
          </button>
          <p className="description">
            Increase by Random Number between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
