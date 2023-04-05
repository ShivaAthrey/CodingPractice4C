// Write your code here
import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {count: 0}

  increaseOf = () => {
    const {count} = this.state
    this.setState({count: count + 1})
  }
  decreaseOf = () => {
    const {count} = this.state
    this.setState({count: count + 1})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">
            Bob ate <span className="span">{count}</span> mangoes
            <span className="span">{count}</span> bananas
          </h1>
          <div className="fruit-container">
            <div className="fruit1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image1"
              />
              <button onClick={this.increaseOf} className="button">
                Eat Mango
              </button>
            </div>
            <div className="fruit1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image1"
              />
              <button onClick={this.decreaseOf} className="button">
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
