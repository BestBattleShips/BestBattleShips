import React, {Component} from 'react';
import axios from 'axios';

class Opponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opponent: 'Waiting on Opponent'
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.number !== prevProps.number) {
      if (this.props.number === 2) {
        axios.post('battleship/getPlayerNumber', {
          playerNum: this.props.number
        })
        .then((res) => {
          console.log('line19',res.data)
          this.setState({
            opponent: res.data
          })
        })
        .catch((err) => {
          console.log(err)
        })
      } else if (this.props.number === 1) {
        if (this.state.opponent === 'Waiting on Opponent') {
          let myInterval = setInterval(() => {
            axios.post('battleship/getPlayerNumber', {
              playerNum: this.props.number
            })
            .then((res) => {
              console.log('line35',res.data);
              this.setState({
                opponent: res.data
              }, () => {
                if (res.data !== 'Waiting on Opponent') {
                  clearInterval(myInterval);
                }
              })
            })
            .catch((err) => {
              console.log(err)
            })
          }, 1000)
        }
      }
    }
  }
  
  render() {
    return (
      <div>{this.state.opponent}</div>
    )
  }
}

export default Opponent;