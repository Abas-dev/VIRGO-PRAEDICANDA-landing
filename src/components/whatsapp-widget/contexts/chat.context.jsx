import React, { createContext, useMemo, useState } from 'react'

export const ChatContext = createContext({
  isChatOpen: false,
  setIsChatOpen: () => {}
})

export const ChatProvider = ({ children }) => {
  const [isChatOpen, setIsChatOpen] = useState(false)

  const value = useMemo(
    () => ({
      isChatOpen,
      setIsChatOpen
    }),
    [isChatOpen]
  )

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
}
