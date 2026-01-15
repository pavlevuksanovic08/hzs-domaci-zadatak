import { useState } from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import Main from './components/Main'
import './App.css'
import "./styles/layout.css"
import CreateAcc from './components/CreateAcc'

function App() {

  const userID = localStorage.getItem("userID") || null;
  const [mainPage, setMainPage] = useState("goals");

  function changeMainPage(page) {
    setMainPage(page);
  }

  return (
    <>
      {userID ?
      <>
        <Header state={mainPage} />
        <Menu changeMainPage={changeMainPage} />
        <Main state={mainPage}/>
      </> : <CreateAcc />}
    </>
  )
}

export default App
