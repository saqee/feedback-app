import React, { useEffect, useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import Rating from "./Rating"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"
const FeedbackForm = ({ handleAdd }) => {
  const { addFeedback, FeedbackEdit, updateFeedback } =
    useContext(FeedbackContext)
  const [text, setText] = useState("")
  const [rating, setrating] = useState(10)
  const [btnDisabled, setbtnDisabled] = useState(true)
  const [message, setmessage] = useState("")
  const handleTextChange = (e) => {
    setText(e.target.value)
    setbtnDisabled(false)
    setmessage(null)
    if (text == "") {
      setbtnDisabled(true)
      setmessage(null)
    } else if (text !== "" && text.trim().length <= 10) {
      setbtnDisabled(true)
      setmessage("text must be  at least 10 characters")
    }
  }
  useEffect(() => {
    if (FeedbackEdit.edit == true) {
      setbtnDisabled(false)
      setText(FeedbackEdit.item.text)
      setrating(FeedbackEdit.item.rating)
    }
  }, [FeedbackEdit])
  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      setbtnDisabled(false)
      const newAddfeedback = {
        text,
        rating,
      }
      if (FeedbackEdit.edit === true) {
        updateFeedback(FeedbackEdit.item.id, newAddfeedback)
      } else {
        addFeedback(newAddfeedback)
      }

      setText("")
    }
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service</h2>
        <Rating select={(rating) => setrating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            value={text}
            //onChange={(e) => setText(e.target.value)}
            onChange={handleTextChange}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
