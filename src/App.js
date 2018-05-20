import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import ScrollBox from './ScrollBox'
import  styled  from 'styled-components'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Wrapper>
          <ScrollBox />
          <ScrollBox />
        </Wrapper>
      </div>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

export default App
