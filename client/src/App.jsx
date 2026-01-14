import { useState } from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import Main from './components/Main'
import './App.css'
import "./styles/layout.css"

function App() {

  const [mainPage, setMainPage] = useState("goals");

  function changeMainPage(page) {
    setMainPage(page);
  }

  return (
    <>
      <Header />
      <Menu changeMainPage={changeMainPage} />
      <Main state={mainPage}/>
    </>
  )
}

export default App
