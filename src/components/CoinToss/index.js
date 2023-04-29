// Write your code here

import './index.css'
import {Component} from 'react'

class CoinToss extends Component {
  state = {
    isHead: true,
    totalScore: 0,
    totalHeads: 0,
    totalTails: 0,
  }

  onClickTossCoin = () => {
    const getNum = Math.floor(Math.random() * 2)
    if (getNum === 0) {
      this.setState(prevState => ({
        isHead: true,
        totalScore: prevState.totalScore + 1,
        totalHeads: prevState.totalHeads + 1,
      }))
    } else if (getNum === 1) {
      this.setState(prevState => ({
        isHead: false,
        totalScore: prevState.totalScore + 1,
        totalTails: prevState.totalTails + 1,
      }))
    }
  }

  render() {
    const {isHead, totalScore, totalHeads, totalTails} = this.state
    const srcImage = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <div className="header-container">
            <h1 className="game-heading">Coin Toss Game</h1>
            <p className="game-sub-heading">Heads (or) Tails </p>
          </div>
          <div className="image-container">
            <img
              src={srcImage}
              alt="toss result"
              className="heads-tails-image"
            />
          </div>
          <div className="toss-coin-button-container">
            <button
              className="toss-coin-button"
              type="button"
              onClick={this.onClickTossCoin}
            >
              Toss Coin
            </button>
          </div>
          <div className="scores-container">
            <div className="total-score-container">
              <p className="score-status">Total: {totalScore}</p>
            </div>
            <div className="total-score-container">
              <p className="score-status">Heads: {totalHeads}</p>
            </div>
            <div className="total-score-container">
              <p className="score-status">Tails: {totalTails}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss

// import {Component} from 'react'

// import './index.css'

// class CoinToss extends Component {
//   state = {isHeads: 0, Heads: 0, Tails: 0, Total: 0}

//   onClick = () => {
//     const tossResult = Math.floor(Math.random() * 2)
//     this.setState({isHeads: tossResult})

//     let heads = 0
//     let tails = 0
//     let total = 0

//     if (tossResult === 0) {
//       heads += 1
//       tails += 0
//       total += 1
//     } else {
//       heads += 0
//       tails += 1
//       total += 1
//     }

//     this.setState(prevState => ({
//       Heads: prevState.Heads + heads,
//       Tails: prevState.Tails + tails,
//       Total: prevState.Total + total,
//     }))
//   }

//   render() {
//     const {isHeads} = this.state
//     const {Heads} = this.state
//     const {Tails} = this.state
//     const {Total} = this.state

//     return (
//       <div className="bg-container">
//         <div className="toss-container">
//           <h1 className="heading">Coin Toss Game</h1>
//           <p>Heads (or) Tails</p>
//           {isHeads === 0 ? (
//             <img
//               src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
//               alt="toss result"
//             />
//           ) : (
//             <img
//               src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
//               alt="toss result"
//             />
//           )}

//           <button type="button" className="button" onClick={this.onClick}>
//             Toss Coin
//           </button>
//           <p>Total: {Total}</p>
//           <p>Heads: {Heads}</p>
//           <p>Tails: {Tails}</p>
//         </div>
//       </div>
//     )
//   }
// }

// export default CoinToss
