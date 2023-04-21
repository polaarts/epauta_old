import Archivo from "../components/Archivo";
import { use, useEffect, useState } from "react";
import axios from "axios";
import Illustration from "../../assets/illustration.png";
import Image from "next/image";

import { Analytics } from "@vercel/analytics/react";

import Loading from "@/components/Loading";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  // const [año, setAño] = useState("");
  // const [tipo, setTipo] = useState("");

  const [archivos, setArchivos] = useState([]);
  const [loading, setLoading] = useState(true);

  const [ramo, setRamo] = useState([]);

  useEffect(() => {
    axios
      .get("https://epauta-api.onrender.com/api/ramos")
      .then((res) => {
        setRamo(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://epauta-api.onrender.com/api/enlaces")
      .then((res) => {
        setArchivos(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const añosSet = new Set();

  archivos.map((item) => {
    añosSet.add(item.anio);
  });

  const años = [...añosSet].sort();

  const handleAño = (año) => {
    return año.toString();
  };

  const tiposSet = new Set();

  archivos.map((item) => {
    tiposSet.add(item.tipo.replace(/[0-9]+/g, ""));
  });

  const tipos = [...tiposSet];

  const handleTipo = (tipo) => {
    return tipo;
  };

  const ramosSet = new Set();

  const sustituir = (ramo_id) => {
    for (let i = 0; i < ramo.length; i++) {
      if (ramo[i].id == ramo_id) {
        return ramo[i].nombre;
      }
    }
  };

  archivos.map((item) => {
    ramosSet.add(sustituir(item.ramo_id));
  });

  const ramos = [...ramosSet];

  const handleRamo = (ramo) => {
    return ramo;
  };

  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  // devolver una pantalla de carga

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
      <Analytics />
        <head>
          <title>ePAUTA</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </head>
        <main className="container mx-auto">
          <header className="mb-6">
            <div className="flex justify-center">
              <h1 className="text-[30px] my-[10px] font-bold justify-center text-white">
                ePAUTA
              </h1>
            </div>
            <nav className="px-[20px] space-x-3 flex justify-center">
              <input
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
                type="search"
                placeholder="Control, ecuaciones diferenciales, 2019..."
                className="p-3 border-2 border-gray-200 bg-gray-50 focus:ring focus:ring-gray-300 focus:outline-none rounded-[5px] h-[35px] lg:w-1/2 w-full"
              />
            </nav>
          </header>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-6 space-y-6 md:space-y-0 mx-4 mb-8">
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
            <div className="grid col-span-2 grid-cols-2 md:grid-cols-3  gap-4 relative md:pt-10 pt-16">
              <p className="absolute text-white">
                Estos son los últimos 20 archivos agregados. Filtra o busca el
                material que deseas.
              </p>
              {archivos
                .filter((item) => {
                  if (searchTerm == "") {
                    return item;
                  } else if (
                    item.tipo
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    removeAccents(sustituir(item.ramo_id))
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    sustituir(item.ramo_id)
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    item.anio.toString().includes(searchTerm)
                  ) {
                    return item;
                  } else if (searchTerm == handleAño(item.anio)) {
                    return item;
                  }
                })
                .sort((a, b) => {
                  return b.id - a.id;
                })
                .slice(0, 21)
                .map((item, id) => (
                  <Archivo
                    key={id}
                    enlace={item.enlace}
                    ramo={sustituir(item.ramo_id)}
                    tipo={item.tipo}
                    año={item.anio}
                    semestre={item.semestre}
                    tags={item.tags}
                    fecha_subida={item.fecha_subida}
                  />
                ))}
              {archivos.filter((item) => {
                if (searchTerm === "") {
                  return item;
                } else if (
                  item.tipo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  removeAccents(sustituir(item.ramo_id))
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  sustituir(item.ramo_id)
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  item.anio.toString().includes(searchTerm)
                ) {
                  return item;
                }
              }).length === 0 && (
                <>
                  <div className=" col-span-4">
                    <Image
                      src={Illustration}
                      width={500}
                      height={500}
                      className="mx-auto"
                    />
                  </div>
                </>
              )}
            </div>
          </div>

          {/* <footer>
          <hr className="mx-4 mt-8" />
        </footer> */}
        </main>
      </>
    );
  }
}
