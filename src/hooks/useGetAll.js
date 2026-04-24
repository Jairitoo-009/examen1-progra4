// hooks/useGetAll.js
import { useState, useEffect } from 'react';
import { fetchPiezas } from '../services/api';

export const useGetAll = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        setLoading(true);
        const resultado = await fetchPiezas();
        setData(resultado);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    obtenerDatos();
  }, []);

  return { data, loading, error };
};