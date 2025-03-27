import React from 'react'

const CustomerComp = ({children}) => {
  return (
    <div className="public-layout">
            <nav className="bg-gray-400 flex justify-between p-3">
                <div className="text-5xl">Customer Portal</div>
                <div className="text-2xl mt-2">SignUp/Login</div>
            </nav>
            <main className="flex-1 min-h-screen p-4">{children}</main>
          </div>
  )
}

export default CustomerComp