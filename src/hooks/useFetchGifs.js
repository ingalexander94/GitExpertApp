import { useState, useEffect } from "react";
import { handlePeticion } from "../helpers/handlePeticion";

export const useFetchGifs = (categoria) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    handlePeticion(categoria).then((gif) => {
      setState({
        data: gif,
        loading: false,
      });
    });
  }, [categoria]);

  return state;
};
