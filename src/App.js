import {Component} from 'react'

import {RiCloseLine} from 'react-icons/ri'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

console.log()
class App extends Component {
  state = {
    showResult: false,
    yourChoice: 0,
    opponentChoice: 0,
    gameResult: '',
    score: 0,
  }

  onClickRock = () => {
    const opponent = Math.floor(Math.random() * choicesList.length)
    const {showResult, score} = this.state
    const you = 0
    let sc = score
    let result
    if (opponent === 1) {
      result = 'YOU WON'
    } else if (opponent === you) {
      result = 'IT IS DRAW'
    } else {
      result = 'YOU LOSE'
    }

    if (result === 'YOU WON') {
      sc += 1
    } else if (result === 'YOU LOSE') {
      sc -= 1
    }
    this.setState({
      showResult: !showResult,
      yourChoice: you,
      opponentChoice: opponent,
      gameResult: result,
      score: sc,
    })
  }

  onClickScissors = () => {
    const opponent = Math.floor(Math.random() * choicesList.length)
    const {showResult, score} = this.state
    const you = 1
    let result
    let sc = score
    if (opponent === 2) {
      result = 'YOU WON'
    } else if (opponent === you) {
      result = 'IT IS DRAW'
    } else {
      result = 'YOU LOSE'
    }

    if (result === 'YOU WON') {
      sc += 1
    } else if (result === 'YOU LOSE') {
      sc -= 1
    }

    this.setState({
      showResult: !showResult,
      yourChoice: you,
      opponentChoice: opponent,
      gameResult: result,
      score: sc,
    })
  }

  onClickPaper = () => {
    const opponent = Math.floor(Math.random() * choicesList.length)
    const {showResult, score} = this.state
    const you = 2
    let result
    let sc = score
    if (opponent === 0) {
      result = 'YOU WON'
    } else if (opponent === you) {
      result = 'IT IS DRAW'
    } else {
      result = 'YOU LOSE'
    }

    if (result === 'YOU WON') {
      sc += 1
    } else if (result === 'YOU LOSE') {
      sc -= 1
    }

    this.setState({
      showResult: !showResult,
      yourChoice: you,
      opponentChoice: opponent,
      gameResult: result,
      score: sc,
    })
  }

  onClickPlayAgain = () => {
    const {showResult} = this.state
    this.setState({showResult: !showResult})
  }

  renderResultContainer = () => {
    const {yourChoice, opponentChoice, gameResult} = this.state
    return (
      <div className="result-main">
        <div className="result-container">
          <div className="choice-container">
            <p className="para">You</p>
            <img
              src={choicesList[yourChoice].imageUrl}
              alt="your Choice"
              className="icon-element"
            />
          </div>
          <div className="choice-container">
            <p className="para">Opponent</p>
            <img
              src={choicesList[opponentChoice].imageUrl}
              alt="opponent Choice"
              className="icon-element"
            />
          </div>
        </div>
        <p className="para">{gameResult}</p>
        <button
          type="button"
          className="playAgain-button"
          onClick={this.onClickPlayAgain}
        >
          PLAY AGAIN
        </button>
      </div>
    )
  }

  renderButtonList = () => (
    <div className="button-container">
      <button
        type="button"
        data-testid="rockButton"
        className="button-element"
        onClick={this.onClickRock}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png"
          alt="ROCK"
          className="icon-element"
        />
      </button>
      <button
        type="button"
        data-testid="scissorsButton"
        className="button-element"
        onClick={this.onClickScissors}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png"
          alt="SCISSORS"
          className="icon-element"
        />
      </button>
      <button
        type="button"
        data-testid="paperButton"
        className="button-element"
        onClick={this.onClickPaper}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png"
          alt="PAPER"
          className="icon-element"
        />
      </button>
    </div>
  )

  render() {
    const {showResult, score} = this.state
    return (
      <div className="app-container">
        <div className="list-score-container">
          <div className="list-container">
            <h1 className="item">
              ROCK
              <br /> PAPER <br />
              SCISSORS
            </h1>
          </div>
          <div className="score-container">
            <p className="score"> Score</p>
            <p className="score">{score}</p>
          </div>
        </div>
        {showResult ? this.renderResultContainer() : this.renderButtonList()}
        <div className="rules-button-container">
          <Popup
            modal
            trigger={
              <button type="button" className="rules-button">
                Rules
              </button>
            }
          >
            {close => (
              <div className="pop-button-container">
                <button
                  type="button"
                  className="close-button"
                  onClick={() => close()}
                >
                  <RiCloseLine />
                </button>
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                    className="rules-image"
                  />
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}

export default App
