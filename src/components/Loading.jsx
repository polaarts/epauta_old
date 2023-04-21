import React from 'react'

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-[30px] my-[10px] font-bold justify-center text-white">
              ePAUTA
            </h1>
            <h2 className="text-[20px] my-[10px] font-bold justify-center text-white">
              Cargando...
            </h2>
          </div>
        </div>
      </div>
  )
}

export default Loading
