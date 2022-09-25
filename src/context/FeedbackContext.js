import { createContext, useState } from "react"
import { v4 as uuidv4 } from "uuid"
const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, text: "sdmbfdsjfbhgfjksdfhjsdfjsfgjhdf", rating: 10 },
  ])
  const [FeedbackEdit, setEditFeedback] = useState({
    item: {},
    edit: true,
  })
  const handleDelete = (id) => {
    setFeedback(feedback.filter((data) => data.id !== id))
  }
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const editItem = (item) => {
    setEditFeedback({
      item: item,
      edit: true,
    })
  }
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id
          ? {
              ...item,
              ...updItem,
            }
          : item
      )
    )
  }
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        handleDelete,
        addFeedback,
        editItem,
        FeedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
