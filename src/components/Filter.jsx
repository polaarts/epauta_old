import React from 'react'

const Filter = () => {
  return (
    <div className="bg-gray-100 sm:grid-cols-1 border-red-200 border-2 h-min rounded-[5px] relative w-full">
            <div className="flex ml-3 mt-3">
              <h3 className=" text-red-500 p-1">Filtros</h3>
              <button
                onClick={() => {
                  setSearchTerm("");
                }}
                className="absolute bg-red-500 p-1 px-2 text-white rounded top-3 right-3 text-[15px]"
              >
                RESET
              </button>
            </div>
            <div>
              {/* <div className="p-4 space-y-3">
                <h2 className="text-red-500">Fecha:</h2>
                <div className="grid grid-cols-5 gap-2">
                  {años.map((item, id) => (
                    <button
                      key={id}
                      onClick={() => {
                        setSearchTerm(handleAño(item));
                      }}
                      className="p-1 px-3 bg-white rounded focus:bg-red-500 focus:text-white ring-red-200 hover:bg-red-500 hover:text-white"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 space-y-2">
                <h2 className="text-red-500">Tipo de material:</h2>
                <div className="grid grid-cols-3 gap-2">
                  {tipos.map((item, id) => (
                    <button
                      key={id}
                      onClick={() => {
                        setSearchTerm(handleTipo(item));
                      }}
                      className="p-1 px-3 bg-white rounded hover:bg-red-500 hover:text-white focus:bg-red-500 focus:text-white"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div> */}

              <div className="p-4 space-y-3">
                <h2 className="text-red-500">Ramos disponibles:</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-2 gap-2">
                  {ramos.map((item, id) => (
                    <button
                      key={id}
                      onClick={() => {
                        setSearchTerm(handleRamo(item));
                      }}
                      className="p-1 px-3 bg-white rounded hover:bg-red-500 hover:text-white focus:bg-red-500 focus:text-white h-[60px]"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
  )
}

export default Filter
