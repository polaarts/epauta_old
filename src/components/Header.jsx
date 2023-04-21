import React from 'react'

const Header = ({ children }) => {
  return (
    <header className="mb-6">
          <div className="flex justify-center">
            <h1 className="text-[30px] my-[10px] font-bold justify-center text-white">
              ePAUTA
            </h1>
          </div>
          {children}
        </header>
  )
}

export default Header
