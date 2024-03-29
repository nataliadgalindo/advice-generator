/* eslint-disable react/no-unescaped-entities */
import dividerImg from "/images/pattern-divider-desktop.svg"
import axios from "axios"
import { useState, useEffect } from "react"

function App() {
  let [advice, setAdvice] = useState("")

  useEffect(() => {
    handleButtonClick()
  }, [])

  function handleButtonClick() {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        setAdvice(response.data.slip)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="advice-container">
      <main className="advice-box">
        <section className="advice-content">
          <p className="advice-id">Advice #{advice.id}</p>
          <h1 className="advice">"{advice.advice}"</h1>
          <div className="divider-img">
            <img className="divider" src={dividerImg} alt="divider" />
          </div>
          <button onClick={handleButtonClick} className="advice-btn">
            <img src={"/images/icon-dice.svg"} alt="dice" />
          </button>
        </section>
      </main>
    </div>
  )
}
export default App
