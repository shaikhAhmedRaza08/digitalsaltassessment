import React, { useState } from 'react'
import ShowToast from './ShowToast'

function Component1() {
  const [messages, setMessages] = useState([]);

  const handleShowToast = () => {
    const newMessage = {
      message: `Toast message ${messages.length + 1}`,
      duration: 7000, // 7 seconds
    };
    setMessages([...messages, newMessage]);
  };
  return (
    <>
      <div>Component1</div>
      <button onClick={handleShowToast}>Show Toast</button>
      <ShowToast messages={messages} />
    </>
  )
}

export default Component1