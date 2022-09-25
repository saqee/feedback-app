import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { useState } from "react"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import Header from "./components/Header"
import About from "./pages/About"
import FeedbackData from "./data/FeedbackData.js"
import { FeedbackProvider } from "./context/FeedbackContext"

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <FeedbackProvider>
      <Header />
      <div className="container">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </Router>
      </div>
    </FeedbackProvider>
  )
}

export default App
