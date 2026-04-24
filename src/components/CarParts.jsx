// components/CarParts.jsx
import React, { useState } from 'react';
import { useGetAll } from '../hooks/useGetAll';

const CarParts = () => {
  const { data, loading, error } = useGetAll();
  const [visibleCount, setVisibleCount] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  if (loading) {
    return <p>Cargando piezas...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  
  const datosFiltrados = data?.filter((item) =>
    item.articleProductName.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const mostrarMas = () => {
    setVisibleCount(visibleCount + 10);
  };

  const datosMostrar = datosFiltrados?.slice(0, visibleCount) || [];
  const hayMas = datosFiltrados?.length > visibleCount;

  return (
    <>
      <h1>Listado de Piezas de Auto</h1>
      
     
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setVisibleCount(10); 
        }}
      />
      
      {datosFiltrados.length > 0 ? (
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
            <button onClick={mostrarMas}>
              Ver más
            </button>
          )}
        </>
      ) : (
        <p>No se encontraron piezas</p>
      )}
    </>
  );
};

export default CarParts;