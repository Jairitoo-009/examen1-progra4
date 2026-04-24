// components/CarParts.jsx
import React, { useState } from 'react';
import { useGetAll } from '../hooks/useGetAll';

const CarParts = () => {
  const { data, loading, error } = useGetAll();
  const [visibleCount, setVisibleCount] = useState(10);

  if (loading) {
    return <p>Cargando piezas...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const mostrarMas = () => {
    setVisibleCount(visibleCount + 10);
  };

  const datosMostrar = data?.slice(0, visibleCount) || [];
  const hayMas = data?.length > visibleCount;

  return (
    <>
      <h1>Listado de Piezas de Auto</h1>
      {data && data.length > 0 ? (
        <>
          <ol>
            {datosMostrar.map((item) => (
              <li key={item.articleId}>
                <img 
                  src={item.s3image} 
                  alt={item.articleProductName}
                  width="100"
                />
                <br />
                <strong>{item.articleProductName}</strong> - {item.articleNo}
                <br />
                Proveedor: {item.supplierName}
              </li>
            ))}
          </ol>
          {hayMas && (
            <button onClick={mostrarMas} height="100px" width="100px">
              Ver más
            </button>
          )}
        </>
      ) : (
        <p>No hay piezas disponibles</p>
      )}
    </>
  );
};

export default CarParts;