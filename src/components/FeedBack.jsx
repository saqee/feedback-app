import React from "react"
import Card from "./shared/Card"
import { FaTimes, FaEdit } from "react-icons/fa"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"
const FeedBack = ({ item }) => {
  const { handleDelete, editItem } = useContext(FeedbackContext)
  const handleClick = (id) => {}
  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button>
        <FaEdit
          className="edit"
          color="purple"
          onClick={() => editItem(item)}
        />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedBack
