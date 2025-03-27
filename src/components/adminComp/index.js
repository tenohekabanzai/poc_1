import React from 'react'

const AdminComp = ({children}) => {
  return (
    <div className="">
          <nav className="bg-gray-400 flex justify-between p-3">
                <div className="text-5xl">Admin Portal</div>
                <div className="text-2xl mt-2">Logout</div>
            </nav>
          <div className="admin-layout flex min-h-screen">
          <aside className="bg-emerald-400 text-4xl w-64 p-4">
            <div className="">DashBoard</div>
            <div className="">Reports</div>
          </aside>
          <main className="flex-1 p-4">{children}</main>
        </div>
        </div>
  )
}

export default AdminComp