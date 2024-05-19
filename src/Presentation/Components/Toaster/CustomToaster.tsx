import React from 'react'
import { Toaster } from 'react-hot-toast'

export default function CustomToaster() {
  return (
    <Toaster  
            position="bottom-left"
            toastOptions={{
              success: {
                style: {
                  background: 'green',
                  color : 'white'
                },
              },
              error: {
                style: {
                  background: 'red',
                },
              },
            }}
        />
  )
}
