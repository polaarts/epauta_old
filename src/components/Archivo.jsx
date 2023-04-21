import React from "react";
import Tag from "./Tag";
import moment from "moment";

const Archivo = (props) => {
  const fechaSubida = props.fecha_subida;
  const fechaActual = moment().format('L')
  const fechaLimite = moment().subtract(1, 'days');
  

  const tags = props.tags.split(",");
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={props.enlace}
      className="relative h-min"
    >
      <div className="relative">
        <div className="border-2 rounded-[5px] bg-gray-100 p-[10px] opacity-100 hover:opacity-0 relative ">
          <h2 className="text-red-500">{props.ramo}</h2>
          <h3 className="text-gray-800">{props.tipo}</h3>
          <div className="flex flex-row space-x-2 text-gray-400">
            <h3>{props.año}</h3>
            <span>-</span>
            <h3>{props.semestre}</h3>
          </div>

          {moment(fechaSubida).isBefore(fechaLimite) ? null : (
            <div className="bg-yellow-500 rounded-[5px] p-1 px-2 absolute md:top-0 right-0 mr-2 md:mt-2 bottom-0 mb-2 md:bottom-auto sm:mb-2 text-[12px] text-white">
              Nuevo
            </div>
          )}
        </div>
        <div className=" p-[10px] w-full bg-gray-100 rounded-[5px] h-full absolute top-0 opacity-0 hover:opacity-100 border-2 border-red-200">
          <div className="grid grid-cols-2  xl:grid-cols-3 gap-3">
            {tags.map((tag, id) => (
              <Tag key={id} tag={tag} />
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default Archivo;
