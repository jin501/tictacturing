import React, {Component} from 'react'
import {Stage} from 'react-konva'
import {Board} from '..styled/TicTacToe'
class TicTacToe extends Component {

  state = {
    rows: 3
  }

  componentWillMount() {
    let height = window.innerHeight
    let width = window.innerWidth
    let size = (height < width) ? height * .8 : width * .8
    let rows = this.state.rows
    let unit = size / rows

    this.setState({
      size,
      rows,
      units
    })
  }

  move = () => {

  }

  makeAIiMove = () => {

  }

  turingTest = () => {

  }

  recordGame = () => {

  }

  render() {
    return (
      <div>
        <Stage
          width={}
          height={}
        >
          {/* <Board/> */}
          {/* <Square/> */}
        </Stage>
      </div>

    )
  }
}

export default TicTacToe
