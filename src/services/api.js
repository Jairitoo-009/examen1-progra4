

export const fetchPiezas = async () => {
  try {
    const respuesta = await fetch(import.meta.env.VITE_CARPARTS_API_URL , {
      headers: {
        'X-Access-Key': import.meta.env.VITE_ACCESS_KEY,
      },
    });


    if (!respuesta.ok) {
      throw new Error(`Error ${respuesta.status}: ${respuesta.statusText}`);
    }

    const datos = await respuesta.json();
     return datos.record.articles;
    

  } catch (error) {
    console.error('Error en fetchPreguntas:', error);
    throw error;
  }
};
