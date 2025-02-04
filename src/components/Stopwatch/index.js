import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isRunning: false, minHand: 0, secHand: 0}

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  onStart = () => {
    this.setState({isRunning: true})
  }

  onStop = () => {
    this.setState({isRunning: false})
  }

  tick = () => {
    const {secHand, isRunning} = this.state
    if (isRunning === true) {
      if (secHand === 59) {
        this.setState(prevState => ({
          secHand: 0,
          minHand: prevState.minHand + 1,
        }))
      } else {
        this.setState(prevState => ({secHand: prevState.secHand + 1}))
      }
    }
  }

  onReset = () => {
    this.setState({secHand: 0, minHand: 0, isRunning: false})
  }

  render() {
    const {isRunning, minHand, secHand} = this.state
    return (
      <div className="background-container">
        <h1 className="main-heading">Stopwatch</h1>
        <div className="timer">
          <div className="timer-heading-container">
            <img
              className="timer-img"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <h1>Timer</h1>
          </div>
          <h1 className="timer-min-sec-text">
            {minHand < 10 ? `0${minHand}` : minHand}:
            {secHand < 10 ? `0${secHand}` : secHand}
          </h1>
          <div className="button-container">
            <button
              className="control-button start-btn"
              onClick={this.onStart}
              type="button"
            >
              Start
            </button>
            <button
              className="control-button stop-btn"
              onClick={this.onStop}
              type="button"
            >
              Stop
            </button>
            <button
              className="control-button reset-btn"
              onClick={this.onReset}
              type="button"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
