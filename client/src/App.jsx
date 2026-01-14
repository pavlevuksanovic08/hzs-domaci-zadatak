import { useState } from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import Main from './components/Main'
import './App.css'
import "./styles/layout.css"

function App() {

  const [mainPage, setMainPage] = useState("goals")

  return (
    <>
      <Header />
      <Menu />
      <Main />
    </>
  )
}

export default App
