import React from "react"
import FeedBack from "./FeedBack"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"
const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext)
  if (!feedback || feedback.length === 0) {
    return <p>No FeedBack</p>
  } else {
    return (
      <div className="feedback-list">
        {feedback.map((item) => (
          <FeedBack item={item} key={item.id} />
        ))}
      </div>
    )
  }
}

export default FeedbackList
