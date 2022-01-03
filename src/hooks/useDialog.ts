import { useState } from 'react'

function useDialog (defaultState = false) {
  const [open, setOpen] = useState(defaultState)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return {
    open,
    handleOpen,
    handleClose
  }
}

export default useDialog
