import React, { Component } from 'react'
import styled from 'styled-components'
import moment from 'moment'
export default class ScrollBox extends Component {
  state = {
    sum: -29.44*9,
  }
  wheelUp = 0
  wheelDown = 0

  _onWheel = evt => {
    if (evt.deltaY < 0) {
      this.wheelUp++
      if (this.state.sum <= -20) {
        this.setState({ sum: this.state.sum + 29.44 })
      }

      console.log('scrolling up', this.wheelUp, this.state.sum)
    }
    if (evt.deltaY > 0) {
      this.wheelDown++
      if (this.state.sum >= -340) this.setState({ sum: this.state.sum - 29.44 })
      console.log('scrolling down', this.wheelDown, this.state.sum)
    }
  }

  componentDidMount() {
    console.log(this.state.sum)
    console.log(moment().add(-1, 'days').format("Do MMM"))
  }
  render() {
    let list = [-9,-8,-7,-6,-5,-4,-3,-2,-1, 0, 1,2,3,4,5,6,7,8,9]
    list = list.map((item, index) => {
      return 
      <List key={index}>
      {item===0?'Today':moment().add(item, 'days').format("Do MMM")}
      </List>
    })
    return (
      <Warpper onWheel={this._onWheel}>
        <SelectCon>
          <Action pos={`${this.state.sum}px`}>
            <WrapperList>{list}</WrapperList>
          </Action>
        </SelectCon>
      </Warpper>
    )
  }
}
const Warpper = styled.div`
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  height: 30px;
  width: 50px;
  border-radius:2px;
  background-color: red;
`
const Action = styled.div`
  justify-content: center;
  display: block;
  padding: 0px;
  margin: 0px;
  touch-action: none;
  height: 564px;
  transform: translateY(${props => (props.pos ? props.pos : '0px')});
  transition-duration: 0.5s
`
const SelectCon = styled.div`
  height: 100%;
  padding: 0px;
  margin: 0px;
  overflow: hidden;
  font-size: 10px;
  line-height: 30px;
  position: relative;
`

const List = styled.li`
  list-style-type: none;
  max-width: 50px;
  padding: 0px;
  margin: 0px;
  background-color: yellow;
  text-align: center;
`

const WrapperList = styled.ul`
  display: block;
  padding: 0px;
  margin: 0px;
   
  list-style-type: disc;
`
